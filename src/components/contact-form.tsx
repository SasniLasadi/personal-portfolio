"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subject" name="subject" type="text" required />
      <div>
        <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-soft">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-2xl border border-ink/15 bg-surface px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "loading"} size="lg">
          {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : null}
          {status === "loading" ? "Sending" : "Send message"}
        </Button>

        {status === "success" && (
          <span className="flex items-center gap-1.5 font-body text-sm text-ink-soft">
            <CheckCircle2 size={16} className="text-accent" /> Message sent — thanks!
          </span>
        )}
        {status === "error" && (
          <span className="flex items-center gap-1.5 font-body text-sm text-red-600">
            <AlertCircle size={16} /> {errorMsg}
          </span>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-soft">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-full border border-ink/15 bg-surface px-4 py-2.5 font-body text-sm text-ink outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
