import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

// Returns { user } when signed in, or a 401 Response otherwise.
export async function requireUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return {
      user: null,
      unauthorized: Response.json({ error: "Sign in required." }, { status: 401 }),
    };
  }
  return { user: session.user, unauthorized: null };
}

export function genQuoteNumber() {
  const d = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `QB-${d}-${Math.floor(100 + Math.random() * 900)}`;
}
