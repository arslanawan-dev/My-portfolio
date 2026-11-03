import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || !b.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(b.email)) || String(b.message || "").length < 10)
    return NextResponse.json({ error: "Please check your details." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ error: "Contact service is not configured yet." }, { status: 503 });
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [to], reply_to: b.email, subject: `Project enquiry from ${b.name}`,
      text: `Name: ${b.name}\nEmail: ${b.email}\nProject type: ${b.type}\nBudget: ${b.budget}\n\n${b.message}`,
    }),
  });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Sending failed. Try again later." }, { status: 502 });
}
