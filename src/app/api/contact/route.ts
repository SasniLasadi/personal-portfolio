import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(10, "Message should be at least 10 characters").max(5000),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid submission.";
    return NextResponse.json({ error: message }, { status: 422 });
  }

  const { name, email, subject, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "sasnilasadi@gmail.com",
      replyTo: email,
      subject: `New message: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}