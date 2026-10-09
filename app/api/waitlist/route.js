import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const b = await req.json();

    // Honeypot — bots fill this, humans don't see it
    if (b.website) return NextResponse.json({ ok: true });

    const email = String(b.email || "").trim().toLowerCase();
    const source = String(b.source || "").trim().slice(0, 50) || null;
    const trade = String(b.trade || "").trim().slice(0, 50) || null;

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // Dedupe — one row per email; refresh source if they sign up again
    await prisma.waitlistSignup.upsert({
      where: { email },
      update: { source: source || undefined, trade: trade || undefined },
      create: { email, source, trade },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("waitlist signup failed", e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
