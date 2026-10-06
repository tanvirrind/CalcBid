import { prisma } from "../../../lib/prisma";
import { requireUser, genQuoteNumber } from "../../../lib/api-auth";

const cleanItems = (items) =>
  (Array.isArray(items) ? items : [])
    .filter((it) => it && (it.desc || it.price))
    .map((it) => ({
      desc: String(it.desc ?? "").slice(0, 500),
      qty: Math.max(0, parseFloat(it.qty) || 0),
      price: Math.max(0, parseFloat(it.price) || 0),
    }));

async function findOrCreateCustomer(userId, client) {
  const name = String(client?.name ?? "").trim();
  if (!name) return null;
  const email = String(client?.email ?? "").trim().toLowerCase() || null;
  const existing = email
    ? await prisma.customer.findFirst({ where: { userId, email } })
    : await prisma.customer.findFirst({ where: { userId, name } });
  if (existing) return existing;
  return prisma.customer.create({
    data: {
      userId,
      name: name.slice(0, 200),
      email,
      phone: String(client?.phone ?? "").slice(0, 50) || null,
      address: String(client?.address ?? "").slice(0, 500) || null,
    },
  });
}

// GET /api/quotes — list the signed-in user's quotes, newest first.
export async function GET() {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const quotes = await prisma.quote.findMany({
    where: { userId: user.id },
    include: { customer: { select: { id: true, name: true } } },
    orderBy: { updatedAt: "desc" },
  });
  return Response.json({ quotes });
}

// POST /api/quotes — save a quote from the quote builder.
export async function POST(req) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const items = cleanItems(body.items);
  if (!items.length) {
    return Response.json({ error: "Add at least one line item." }, { status: 400 });
  }

  const customer = await findOrCreateCustomer(user.id, body.client);

  const data = {
    userId: user.id,
    customerId: customer?.id ?? null,
    number: String(body.number ?? "").slice(0, 50) || genQuoteNumber(),
    status: "draft",
    items,
    taxRate: Math.max(0, parseFloat(body.tax) || 0),
    discount: Math.max(0, parseFloat(body.discount) || 0),
    notes: String(body.notes ?? "").slice(0, 5000) || null,
    validDays: Math.max(1, Math.min(365, parseInt(body.validDays) || 30)),
    quoteDate: body.date ? new Date(body.date + "T12:00:00") : new Date(),
    biz: body.biz
      ? {
          name: String(body.biz.name ?? "").slice(0, 200),
          email: String(body.biz.email ?? "").slice(0, 200),
          phone: String(body.biz.phone ?? "").slice(0, 50),
        }
      : undefined,
  };

  // Retry on quote-number collision (unique per user).
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const quote = await prisma.quote.create({ data });
      return Response.json({ quote }, { status: 201 });
    } catch (e) {
      if (e?.code === "P2002") {
        data.number = genQuoteNumber();
        continue;
      }
      throw e;
    }
  }
  return Response.json({ error: "Couldn't save — try again." }, { status: 500 });
}
