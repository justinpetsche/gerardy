import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "How It Works — Gerardy",
  description:
    "From SD card to shared link in minutes. See how Gerardy makes trail cam management effortless.",
};

const sdSteps = [
  {
    number: "01",
    heading: "Pull your SD card. Open Gerardy.",
    body: "Navigate to a camera or create a new one. Name it whatever makes sense — South Food Plot, Creek Crossing, Blind 3.",
  },
  {
    number: "02",
    heading: "Drag your photos in.",
    body: "Select the folder and drop it. 50 photos or 15,000 — they upload in the background. Connection drops? Picks up where it left off. Sorted by camera and date automatically.",
  },
  {
    number: "03",
    heading: "Browse your library.",
    body: "All cameras in one sidebar. Tap a name, see every photo and video in a clean grid. Fast thumbnails. Tap any photo for full-screen with all the details.",
  },
  {
    number: "04",
    heading: "Share what matters.",
    body: "Tap share. Get a link. Full resolution, camera name, timestamp, weather. Text it, drop it in the group chat, post it anywhere. No compression. No lost context.",
  },
  {
    number: "05",
    heading: "Build albums.",
    body: "Pull your best into collections. Each album gets its own link — a gallery your group can browse on any device.",
  },
];

const cellSteps = [
  {
    number: "01",
    heading: "Save from your camera's app.",
    body: "Moultrie, Tactacam, Spartan — save photos to your phone like you normally would.",
  },
  {
    number: "02",
    heading: "Upload to Gerardy.",
    body: "Open the app. Tap your camera. Tap upload. Select from your gallery. Done.",
  },
  {
    number: "03",
    heading: "Everything in one place.",
    body: "Cellular and SD card photos side by side. One library. Same clean sharing links.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero image */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-end">
        <Img
          src="/images/IMG_0795.JPG"
          alt="Northern lake with fall colors"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/40 to-bark/20" />
        <div className="relative px-6 pb-12 lg:px-8 w-full">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6">
              How It Works
            </p>
            <h1 className="text-4xl font-light leading-snug tracking-tight text-sand sm:text-6xl max-w-2xl">
              SD card to shared link.
              <br />
              Minutes.
            </h1>
          </div>
        </div>
      </section>

      {/* SD Card flow */}
      <section className="px-6 pt-16 pb-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            SD Card Cameras
          </p>
        </div>
      </section>

      {sdSteps.map((step) => (
        <section key={step.number} className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex gap-8 sm:gap-12 items-start max-w-2xl">
              <span className="flex-shrink-0 text-3xl font-light text-gold/25 sm:text-4xl mt-1">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-light tracking-tight text-sand sm:text-2xl">
                  {step.heading}
                </h3>
                <p className="mt-4 text-sm leading-7 text-sand-muted">
                  {step.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Photo break — badlands sunset panorama */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <Img
          src="/images/IMG_0543.jpg"
          alt="Panoramic sunset over badlands"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-transparent to-bark/40" />
      </section>

      {/* Cellular flow */}
      <section className="px-6 pt-28 pb-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Cellular Cameras
          </p>
          <p className="text-sm text-sand-dim">
            Already getting photos on your phone? Even simpler.
          </p>
        </div>
      </section>

      {cellSteps.map((step) => (
        <section key={step.number} className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex gap-8 sm:gap-12 items-start max-w-2xl">
              <span className="flex-shrink-0 text-3xl font-light text-gold/25 sm:text-4xl mt-1">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-light tracking-tight text-sand sm:text-2xl">
                  {step.heading}
                </h3>
                <p className="mt-4 text-sm leading-7 text-sand-muted">
                  {step.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Teaser + CTA */}
      <section className="px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />

          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6">
            And Then
          </p>
          <h2 className="text-2xl font-light tracking-tight text-sand sm:text-3xl">
            Once your photos are in, AI takes over.
          </h2>
          <p className="mt-6 text-sm leading-7 text-sand-muted max-w-md mx-auto">
            Species tagging. Smart filtering. Activity patterns. Your trail cam
            data starts working for you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-muted transition-colors"
            >
              See the roadmap &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Photo break — food plot */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <Img
          src="/images/IMG_0833.JPG"
          alt="Green food plot lined with trees"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-transparent to-bark/40" />
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />
          <h2 className="text-3xl font-light tracking-tight text-sand sm:text-4xl">
            Ready to try it?
          </h2>
          <div className="mt-10">
            <Link
              href="/early-access"
              className="inline-block w-full sm:w-auto bg-gold/90 px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase text-bark hover:bg-gold transition-colors text-center"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
