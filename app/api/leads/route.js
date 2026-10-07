import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

const TRADES = ["concrete", "siding", "hvac"];

export async function POST(req) {
  try {
    const b = await req.json();

    // Honeypot — bots fill this, humans don't see it
    if (b.website) return NextResponse.json({ ok: true });

    const name = String(b.name || "").trim();
    const phone = String(b.phone || "").trim();
    const email = String(b.email || "").trim();
    const trade = String(b.trade || "").trim();
    const city = String(b.city || "").trim();
    const cityLabel = String(b.cityLabel || "").trim();
    const details = String(b.details || "").trim().slice(0, 2000);
    const contactTime = String(b.contactTime || "").trim();
    const consent = b.consent === true;

    if (name.length < 2) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    if (phone.replace(/\D/g, "").length < 10) return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    if (!TRADES.includes(trade)) return NextResponse.json({ error: "Invalid trade." }, { status: 400 });
    if (!city || !cityLabel) return NextResponse.json({ error: "Invalid location." }, { status: 400 });
    if (!consent) return NextResponse.json({ error: "Please consent to being contacted about your project." }, { status: 400 });

    const lead = await prisma.lead.create({
      data: {
        name, phone, email: email || null, trade, city, cityLabel,
        details: details || null, contactTime: contactTime || null,
        consentAt: new Date(), status: "new",
      },
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (e) {
    console.error("lead create failed", e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
