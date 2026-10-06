import { prisma } from "../../../lib/prisma";
import { requireUser } from "../../../lib/api-auth";

// GET /api/customers — list the signed-in user's customers, newest first.
export async function GET() {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const customers = await prisma.customer.findMany({
    where: { userId: user.id },
    include: { _count: { select: { quotes: true } } },
    orderBy: { updatedAt: "desc" },
  });
  return Response.json({ customers });
}

// POST /api/customers — add a customer.
export async function POST(req) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const name = String(body.name ?? "").trim();
  if (!name) return Response.json({ error: "Name is required." }, { status: 400 });
  const email = String(body.email ?? "").trim().toLowerCase() || null;
  if (email) {
    const dup = await prisma.customer.findFirst({ where: { userId: user.id, email } });
    if (dup) return Response.json({ error: "A customer with that email already exists.", customer: dup }, { status: 409 });
  }
  const customer = await prisma.customer.create({
    data: {
      userId: user.id,
      name: name.slice(0, 200),
      email,
      phone: String(body.phone ?? "").slice(0, 50) || null,
      address: String(body.address ?? "").slice(0, 500) || null,
    },
  });
  return Response.json({ customer }, { status: 201 });
}
