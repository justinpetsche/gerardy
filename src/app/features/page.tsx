import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — Gerardy",
  description:
    "Simple photo and video sharing, AI species detection, smart filtering, activity analytics, and property mapping.",
};

const launchFeatures = [
  {
    label: "Upload",
    heading: "Every camera. One library.",
    body: "Drag and drop from your SD card or upload from your phone. Moultrie, Tactacam, Stealth Cam, Bushnell — all of it lands in one organized library. Bulk upload thousands of files at once. Resumable uploads built for rural connections.",
    image: "/images/IMG_0631.jpg",
    alt: "Video camera overlooking ranch country",
  },
  {
    label: "Organization",
    heading: "Named cameras. Instant access.",
    body: "South Food Plot. Creek Crossing. Blind 3. Name your cameras the way you think about them. Everything sorted by camera and date automatically. One searchable sidebar. Most recent activity first.",
    image: "/images/RCNX0033.JPG",
    alt: "Doe captured on trail camera in hardwoods",
  },
  {
    label: "Sharing",
    heading: "Share it the way it deserves.",
    body: "One tap creates a link — full resolution, camera name, timestamp, weather. Share a single photo, a curated album, or an entire camera feed. No account required to view. No compression. No lost context.",
    image: "/images/IMG_2144.jpg",
    alt: "Hunter with elk harvest at sunset",
  },
  {
    label: "Albums",
    heading: "Curate the best. Share the set.",
    body: "Pull highlights into albums — \"October Bucks,\" \"Season Recap 2026.\" Each album gets its own shareable link with a clean gallery. Show it at deer camp or send it to the buddy who couldn't make it out.",
    image: "/images/IMG_0314.jpg",
    alt: "Barbed wire fence at golden hour overlooking ranch land",
  },
];

const roadmapFeatures = [
  {
    label: "AI Detection",
    heading: "Every photo scanned. Every species tagged.",
    body: "Bucks, does, turkeys, coyotes, hogs, humans — identified automatically. High-confidence detections tagged instantly. Uncertain photos flagged for your review. The AI saves you hours. You stay in control.",
  },
  {
    label: "Smart Filtering",
    heading: "Find any photo. Instantly.",
    body: "\"Every buck from the creek crossing in October, 5–8 AM.\" One click. Stack filters by species, camera, date, time of day, or custom tags. Shareable filter views — send your group a link to exactly what they need to see.",
  },
  {
    label: "Activity Analytics",
    heading: "Know when they're moving.",
    body: "Time-of-day charts. Weekly trend lines. Species breakdowns for every camera. See which hours produce movement and how patterns shift through the season. Stop guessing. Let the data tell you.",
  },
  {
    label: "Trespass Alerts",
    heading: "Know when someone's on your property.",
    body: "Human detection flags activity with the photo, timestamp, and camera location. Whether it's a neighbor or an uninvited visitor, you have the record.",
  },
  {
    label: "Property Mapping",
    heading: "Cameras on the map.",
    body: "Pin every camera on an interactive map. See activity levels by location at a glance. Know which food plot is producing and where the movement is pointing.",
  },
  {
    label: "Weather Integration",
    heading: "Conditions on every photo.",
    body: "Temperature, wind, barometric pressure, moon phase — tagged automatically at time of capture. Correlate deer movement with weather. Hunt the patterns.",
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Header */}
      <section className="px-6 pt-32 pb-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6">
            Features
          </p>
          <h1 className="text-4xl font-light leading-tight tracking-tight text-sand sm:text-6xl max-w-2xl">
            Simple where it matters.
            <br />
            Powerful where it counts.
          </h1>
        </div>
      </section>

      {/* Launching With */}
      <section className="px-6 pt-20 pb-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Launching With
          </p>
          <h2 className="text-2xl font-light tracking-tight text-sand sm:text-3xl">
            The core. Done right.
          </h2>
        </div>
      </section>

      {launchFeatures.map((feature, i) => (
        <section key={feature.label} className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div
              className={`flex flex-col ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Text */}
              <div className="flex-1">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-sand-dim mb-5">
                  {feature.label}
                </p>
                <h3 className="text-2xl font-light leading-snug tracking-tight text-sand sm:text-3xl">
                  {feature.heading}
                </h3>
                <p className="mt-6 text-sm leading-8 text-sand-muted">
                  {feature.body}
                </p>
              </div>

              {/* Image */}
              {feature.image && (
                <div className="flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Photo break — lake */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden my-8">
        <img
          src="/images/IMG_0795.JPG"
          alt="Northern lake with fall colors"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-transparent to-bark/40" />
      </section>

      {/* Building Next */}
      <section className="px-6 pt-20 sm:pt-32 pb-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Building Next
          </p>
          <h2 className="text-2xl font-light tracking-tight text-sand sm:text-3xl">
            Where Gerardy is headed.
          </h2>
        </div>
      </section>

      {roadmapFeatures.map((feature, i) => (
        <section key={feature.label} className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className={`max-w-2xl ${i % 2 === 1 ? "ml-auto" : ""}`}>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-sand-dim mb-5">
                {feature.label}
              </p>
              <h3 className="text-2xl font-light leading-snug tracking-tight text-sand sm:text-3xl">
                {feature.heading}
              </h3>
              <p className="mt-6 text-sm leading-8 text-sand-muted">
                {feature.body}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />
          <h2 className="text-3xl font-light leading-snug tracking-tight text-sand sm:text-4xl">
            Be first to see it come together.
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
