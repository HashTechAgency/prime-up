import nodemailer from "nodemailer";

const TO = process.env.ESTIMATE_TO || "llcprimeup@gmail.com";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const clean = (v: unknown, max = 200) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("estimate: GMAIL_USER / GMAIL_APP_PASSWORD not set");
    return Response.json({ error: "Mail is not configured" }, { status: 500 });
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(data.website)) return Response.json({ ok: true });

  const name = clean(data.name);
  const email = clean(data.email);
  const phone = clean(data.phone, 40);
  const type = clean(data.type, 80);

  if (!name || !phone || !type || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please fill in all fields" }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Project", type],
  ];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Prime Up Website" <${GMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: `New estimate request: ${type} — ${name}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>New estimate request</h2><table cellpadding="6">${rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escape(v)}</td></tr>`)
        .join("")}</table>`,
    });
  } catch (err) {
    console.error("estimate: send failed", err);
    return Response.json({ error: "Could not send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
