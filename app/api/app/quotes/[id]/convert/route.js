import { prisma } from "../../../../../../lib/prisma";
import {
  requireAppUser,
  assertInvoiceAllowed,
  getUserPlan,
  getOrCreateProfile,
  nextNumber,
  totalsOf,
} from "../../../../../../lib/app-api";

// POST /api/app/quotes/[id]/convert — turn an approved (or sent) quote into an invoice, once.
// 403 PLAN_REQUIRED on Free plans. 409 ALREADY_INVOICED if converted before.
export async function POST(_req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const plan = await getUserPlan(user.id);
  const allowed = assertInvoiceAllowed(plan);
  if (!allowed.ok) {
    return Response.json({ error: allowed.reason, code: "PLAN_REQUIRED" }, { status: 403 });
  }
  const quote = await prisma.quote.findFirst({
    where: { id: params.id, userId: user.id },
    include: { invoice: { select: { id: true } } },
  });
  if (!quote) return Response.json({ error: "Not found." }, { status: 404 });
  if (quote.invoice) {
    return Response.json(
      { error: "This quote was already converted.", code: "ALREADY_INVOICED", invoiceId: quote.invoice.id },
      { status: 409 }
    );
  }
  if (!["approved", "sent"].includes(quote.status)) {
    return Response.json(
      { error: "Only approved (or sent) quotes can be converted.", code: "BAD_STATUS" },
      { status: 400 }
    );
  }
  const { subtotal, total } = totalsOf(quote.items, {
    markupPct: quote.markupPct || 0,
    discount: quote.discount || 0,
    taxRate: quote.taxRate || 0,
  });
  const profile = await getOrCreateProfile(user.id);
  const terms = [7, 14, 30].includes(profile.paymentTerms) ? profile.paymentTerms : 14;
  const issueDate = new Date();
  const dueDate = new Date(issueDate);
  dueDate.setDate(dueDate.getDate() + terms);
  const invoice = await prisma.invoice.create({
    data: {
      userId: user.id,
      quoteId: quote.id,
      clientId: quote.customerId,
      number: await nextNumber(user.id, "invoice"),
      items: quote.items,
      subtotal,
      discount: quote.discount || 0,
      markupPct: quote.markupPct || 0,
      taxRate: quote.taxRate || 0,
      total,
      issueDate,
      dueDate,
      status: "unpaid",
      notes: `Payment due within ${terms} days. Thank you for your business.`,
    },
  });
  return Response.json({ invoice }, { status: 201 });
}
