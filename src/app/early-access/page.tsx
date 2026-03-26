import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "Early Access — Gerardy",
  description:
    "Be the first to try Gerardy. Sign up for early access to the simplest trail cam management platform.",
};

export default function EarlyAccessPage() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-12 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Img
            src="/images/IMG_3296.jpg"
            alt="Country road through green fields"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-bark/80" />
        </div>
        <SignupForm />
      </section>
    </main>
  );
}
