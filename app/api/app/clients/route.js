import { prisma } from "../../../../lib/prisma";
import { requireAppUser } from "../../../../lib/app-api";

const clean = (v, n) => (v === undefined ? undefined : String(v).slice(0, n) || null);

// GET /api/app/clients — list the user's clients, newest first.
export async function GET(req) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const q = new URL(req.url).searchParams.get("q")?.trim();
  const clients = await prisma.customer.findMany({
    where: { userId: user.id, ...(q ? { name: { contains: q } } : {}) },
    orderBy: { updatedAt: "desc" },
    include: { _count: { select: { quotes: true, invoices: true } } },
  });
  return Response.json({ clients });
}

// POST /api/app/clients — create a client.
export async function POST(req) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  let b = {};
  try {
    b = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const name = String(b.name ?? "").trim().slice(0, 200);
  if (!name) return Response.json({ error: "Client name is required." }, { status: 400 });
  const client = await prisma.customer.create({
    data: {
      userId: user.id,
      name,
      email: clean(b.email, 200),
      phone: clean(b.phone, 50),
      address: clean(b.address, 500),
      notes: clean(b.notes, 2000),
    },
  });
  return Response.json({ client }, { status: 201 });
}
