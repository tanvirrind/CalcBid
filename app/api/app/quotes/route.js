import { prisma } from "../../../../lib/prisma";
import {
  requireAppUser,
  assertQuoteAllowed,
  nextNumber,
  cleanItems,
} from "../../../../lib/app-api";

async function findOrCreateCustomer(userId, body) {
  const id = String(body.clientId ?? "").trim();
  if (id) {
    const c = await prisma.customer.findFirst({ where: { id, userId } });
    if (c) return c;
  }
  const name = String(body.clientName ?? "").trim().slice(0, 200);
  if (!name) return null;
  return prisma.customer.create({
    data: {
      userId,
      name,
      email: String(body.clientEmail ?? "").trim().slice(0, 200) || null,
      phone: String(body.clientPhone ?? "").trim().slice(0, 50) || null,
    },
  });
}

// GET /api/app/quotes — list the user's quotes, newest first.
export async function GET(req) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const status = new URL(req.url).searchParams.get("status");
  const quotes = await prisma.quote.findMany({
    where: { userId: user.id, ...(status ? { status } : {}) },
    include: {
      customer: { select: { id: true, name: true } },
      invoice: { select: { id: true, number: true } },
    },
    orderBy: { updatedAt: "desc" },
  });
  return Response.json({ quotes });
}

// POST /api/app/quotes — save a quote from the app wizard (Free-plan gated).
export async function POST(req) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const gate = await assertQuoteAllowed(user.id);
  if (!gate.ok) {
    return Response.json({ error: gate.reason, code: "PLAN_LIMIT" }, { status: 403 });
  }
  let b = {};
  try {
    b = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const items = cleanItems(b.items);
  if (!items.length) {
    return Response.json({ error: "Add at least one line item." }, { status: 400 });
  }
  const customer = await findOrCreateCustomer(user.id, b);
  const data = {
    userId: user.id,
    customerId: customer?.id ?? null,
    number: await nextNumber(user.id, "quote"),
    status: "draft",
    items,
    taxRate: Math.max(0, parseFloat(b.taxRate) || 0),
    discount: Math.max(0, parseFloat(b.discount) || 0),
    markupPct: Math.max(0, parseFloat(b.markupPct) || 0),
    source: b.source && typeof b.source === "object" ? b.source : undefined,
    notes: String(b.notes ?? "").slice(0, 5000) || null,
    validDays: Math.max(1, Math.min(365, parseInt(b.validDays) || 30)),
    quoteDate: b.quoteDate ? new Date(b.quoteDate + "T12:00:00") : new Date(),
    biz: b.biz
      ? {
          name: String(b.biz.name ?? "").slice(0, 200),
          email: String(b.biz.email ?? "").slice(0, 200),
          phone: String(b.biz.phone ?? "").slice(0, 50),
        }
      : undefined,
  };
  try {
    const quote = await prisma.quote.create({ data });
    return Response.json({ quote, plan: gate.plan }, { status: 201 });
  } catch (e) {
    if (e?.code === "P2002") {
      // number collision — retry once with a fresh number
      data.number = await nextNumber(user.id, "quote");
      const quote = await prisma.quote.create({ data });
      return Response.json({ quote, plan: gate.plan }, { status: 201 });
    }
    throw e;
  }
}
