import { NextResponse } from "next/server";
import { contact_us } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, location, budget, message } =
      body ?? {};

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await contact_us(name, email, phone, service, location, budget, message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
