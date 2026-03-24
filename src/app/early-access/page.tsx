import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Early Access — Gerardy",
  description:
    "Be the first to try Gerardy. Sign up for early access to the simplest trail cam management platform.",
};

export default function EarlyAccessPage() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center px-6 pt-24 pb-12 lg:px-8">
        <SignupForm />
      </section>
    </main>
  );
}
