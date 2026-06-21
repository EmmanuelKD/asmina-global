import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, phone, country, inquiryType, product, quantity, message } = body;

  if (!name || !email || !country || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <h2 style="color:#1B4332;">New Enquiry — Asmina Global</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:8px;background:#f9f9f9;font-weight:600;width:160px;">Full Name</td><td style="padding:8px;">${name}</td></tr>
      <tr><td style="padding:8px;background:#f0f0f0;font-weight:600;">Company</td><td style="padding:8px;">${company || "—"}</td></tr>
      <tr><td style="padding:8px;background:#f9f9f9;font-weight:600;">Email</td><td style="padding:8px;">${email}</td></tr>
      <tr><td style="padding:8px;background:#f0f0f0;font-weight:600;">Phone</td><td style="padding:8px;">${phone || "—"}</td></tr>
      <tr><td style="padding:8px;background:#f9f9f9;font-weight:600;">Country</td><td style="padding:8px;">${country}</td></tr>
      <tr><td style="padding:8px;background:#f0f0f0;font-weight:600;">Inquiry Type</td><td style="padding:8px;">${inquiryType || "—"}</td></tr>
      <tr><td style="padding:8px;background:#f9f9f9;font-weight:600;">Product</td><td style="padding:8px;">${product || "—"}</td></tr>
      <tr><td style="padding:8px;background:#f0f0f0;font-weight:600;">Quantity</td><td style="padding:8px;">${quantity || "—"}</td></tr>
      <tr><td style="padding:8px;background:#f9f9f9;font-weight:600;vertical-align:top;">Message</td><td style="padding:8px;">${message.replace(/\n/g, "<br/>")}</td></tr>
    </table>
  `;

  await transporter.sendMail({
    from: `"Asmina Global Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    replyTo: email,
    subject: `New Enquiry from ${name}${company ? ` (${company})` : ""} — ${inquiryType || "General"}`,
    html,
  });

  return NextResponse.json({ success: true });
}
