import { NextResponse } from "next/server";
import { z } from "zod";

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

  // NOTE: this currently just logs the submission. Wire in an email
  // provider (e.g. Resend, Postmark) here before going to production —
  // see README.md for the two-line integration.
  console.log("New contact form submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
