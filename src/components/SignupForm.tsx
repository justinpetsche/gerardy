"use client";

import { useState, FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cameras, setCameras] = useState("");
  const [frustration, setFrustration] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const { error } = await getSupabase().from("early_access").insert([
        {
          email: email.trim().toLowerCase(),
          name: name.trim() || null,
          camera_brands: cameras.trim() || null,
          pain_point: frustration.trim() || null,
        },
      ]);

      if (error) {
        if (error.code === "23505") {
          setErrorMessage("You're already on the list.");
          setStatus("error");
        } else {
          throw error;
        }
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-md text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6">
          You&apos;re In
        </p>
        <h1 className="text-4xl font-light tracking-tight text-sand sm:text-5xl">
          We&apos;ll be in touch.
        </h1>
        <p className="mt-6 text-sm text-sand-muted">
          You&apos;ll hear from us when Gerardy is ready. Thanks for signing up.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-12">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6">
          Early Access
        </p>
        <h1 className="text-4xl font-light tracking-tight text-sand sm:text-5xl">
          Be first in the field.
        </h1>
        <p className="mt-6 text-sm text-sand-muted">
          We&apos;re building Gerardy now. Drop your info and we&apos;ll let
          you know when it&apos;s ready.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs tracking-[0.1em] uppercase text-sand-dim mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full border border-sand-dim/15 bg-bark-light px-4 py-3 text-sm text-sand placeholder-sand-dim/40 focus:border-gold/30 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs tracking-[0.1em] uppercase text-sand-dim mb-2">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border border-sand-dim/15 bg-bark-light px-4 py-3 text-sm text-sand placeholder-sand-dim/40 focus:border-gold/30 focus:outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="cameras" className="block text-xs tracking-[0.1em] uppercase text-sand-dim mb-2">
            What cameras do you run?
          </label>
          <input
            id="cameras"
            type="text"
            value={cameras}
            onChange={(e) => setCameras(e.target.value)}
            className="block w-full border border-sand-dim/15 bg-bark-light px-4 py-3 text-sm text-sand placeholder-sand-dim/40 focus:border-gold/30 focus:outline-none transition-colors"
            placeholder="e.g., Tactacam Reveal, Moultrie, Stealth Cam"
          />
        </div>

        <div>
          <label htmlFor="frustration" className="block text-xs tracking-[0.1em] uppercase text-sand-dim mb-2">
            Biggest trail cam frustration?
          </label>
          <textarea
            id="frustration"
            value={frustration}
            onChange={(e) => setFrustration(e.target.value)}
            rows={3}
            className="block w-full border border-sand-dim/15 bg-bark-light px-4 py-3 text-sm text-sand placeholder-sand-dim/40 focus:border-gold/30 focus:outline-none transition-colors resize-none"
            placeholder="e.g., I spend hours scrolling through blank photos..."
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400/80">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gold/90 py-4 text-sm font-medium tracking-[0.15em] uppercase text-bark hover:bg-gold transition-colors disabled:opacity-40"
        >
          {status === "loading" ? "..." : "Join the Waitlist"}
        </button>

        <p className="text-center text-xs text-sand-dim">
          No spam. One email when we launch.
        </p>
      </form>
    </div>
  );
}
