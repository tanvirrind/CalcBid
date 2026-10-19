// Shared server helpers for the /api/app/* surface (CalcBid app section).
// Additive — the existing /api/quotes and /api/customers routes are untouched.

import { prisma } from "./prisma";
import { requireUser } from "./api-auth";

export const PLANS = ["Free", "Solo", "Crew"];
export const QUOTE_STATUSES = ["draft", "sent", "viewed", "approved", "declined"];

export const r2 = (n) => Math.round((Number(n) || 0) * 100) / 100;

// Auth wrapper: 401 when signed out, { user } otherwise.
export async function requireAppUser() {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return { user: null, unauthorized };
  return { user, unauthorized: null };
}

export async function getUserPlan(userId) {
  const u = await prisma.user.findUnique({
    where: { id: userId },
    select: { plan: true },
  });
  const plan = u?.plan || "Free";
  return PLANS.includes(plan) ? plan : "Free";
}

export function monthStart() {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

// Server-side Free-plan gate: max 3 quotes per calendar month.
export async function assertQuoteAllowed(userId) {
  const plan = await getUserPlan(userId);
  if (plan !== "Free") return { ok: true, plan, count: null };
  const count = await prisma.quote.count({
    where: { userId, createdAt: { gte: monthStart() } },
  });
  if (count >= 3) {
    return { ok: false, plan, count, reason: "You've used your 3 free quotes this month." };
  }
  return { ok: true, plan, count };
}

export function assertInvoiceAllowed(plan) {
  if (plan === "Free") {
    return { ok: false, reason: "Invoicing needs a Solo or Crew plan." };
  }
  return { ok: true };
}

// Lazy profile (holds counters). Additive — no impact on existing flows.
export async function getOrCreateProfile(userId) {
  return prisma.businessProfile.upsert({
    where: { userId },
    create: { userId },
    update: {},
  });
}

// Sequential numbers per user, computed server-side (atomic increment).
export async function nextNumber(userId, kind) {
  await getOrCreateProfile(userId);
  const field = kind === "invoice" ? "nextInvoiceNumber" : "nextQuoteNumber";
  const p = await prisma.businessProfile.update({
    where: { userId },
    data: { [field]: { increment: 1 } },
  });
  const n = p[field] - 1;
  return (kind === "invoice" ? "INV-" : "CB-") + n;
}

export const cleanItems = (items) =>
  (Array.isArray(items) ? items : [])
    .filter((it) => it && (it.desc || Number(it.price)))
    .map((it) => ({
      desc: String(it.desc ?? "").slice(0, 500),
      qty: Math.max(0, parseFloat(it.qty) || 0),
      price: Math.max(0, parseFloat(it.price) || 0),
    }));

// Totals: subtotal → markup → discount → tax. Matches the app wizard.
export function totalsOf(items, { markupPct = 0, discount = 0, taxRate = 0 } = {}) {
  const sub = items.reduce((s, it) => s + it.qty * it.price, 0);
  const afterMarkup = sub * (1 + Math.max(0, markupPct) / 100);
  const afterDisc = Math.max(0, afterMarkup - Math.max(0, discount));
  const total = afterDisc * (1 + Math.max(0, taxRate) / 100);
  return { subtotal: r2(sub), total: r2(total) };
}

export function overdue(inv) {
  return inv.status !== "paid" && inv.dueDate && new Date(inv.dueDate) < new Date();
}
