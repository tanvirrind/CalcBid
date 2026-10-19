import { prisma } from "../../../../lib/prisma";
import { requireAppUser, overdue } from "../../../../lib/app-api";

// GET /api/app/invoices — list + Outstanding/Paid summary.
export async function GET() {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const invoices = await prisma.invoice.findMany({
    where: { userId: user.id },
    include: {
      client: { select: { id: true, name: true } },
      quote: { select: { id: true, number: true } },
    },
    orderBy: { createdAt: "desc" },
  });
  const paid = invoices
    .filter((i) => i.status === "paid")
    .reduce((s, i) => s + Number(i.total || 0), 0);
  const outstanding = invoices
    .filter((i) => i.status !== "paid")
    .reduce((s, i) => s + Number(i.total || 0), 0);
  const withOverdue = invoices.map((i) => ({ ...i, overdue: overdue(i) }));
  return Response.json({
    invoices: withOverdue,
    summary: {
      outstanding: Math.round(outstanding * 100) / 100,
      paid: Math.round(paid * 100) / 100,
    },
  });
}
