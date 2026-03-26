import Link from "next/link";
import Img from "@/components/Img";

export default function Home() {
  return (
    <main>
      {/* Hero — sunset road */}
      <section className="relative flex min-h-screen items-center justify-center px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Img
            src="/images/IMG_3996.jpg"
            alt="Sunset over open country"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-bark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/30 to-bark/50" />
        </div>

        <div className="max-w-3xl text-center px-2">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6 sm:mb-8">
            Coming Soon
          </p>

          <h1 className="text-4xl font-light leading-[1.15] tracking-tight text-sand sm:text-7xl">
            Your trail cameras.
            <br />
            One&nbsp;place.
          </h1>

          <p className="mx-auto mt-8 sm:mt-10 max-w-lg text-base sm:text-lg leading-relaxed text-sand-muted">
            Upload from any camera. AI finds what matters.
            Share with your group in one tap.
          </p>

          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/early-access"
              className="inline-block w-full sm:w-auto bg-gold/90 px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase text-bark hover:bg-gold transition-colors text-center"
            >
              Get Early Access
            </Link>
            <Link
              href="/features"
              className="inline-block w-full sm:w-auto border border-sand/30 px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase text-sand hover:bg-sand/10 transition-colors text-center"
            >
              See Features
            </Link>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-16">
            <div>
              <div className="mb-6 h-px w-12 bg-gold/40" />
              <h3 className="text-2xl font-light text-sand mb-4 leading-snug">
                Any camera. One library.
              </h3>
              <p className="text-sm leading-7 text-sand-dim">
                Moultrie, Tactacam, Stealth Cam, Bushnell — all of it in one
                place. SD card or cellular. Sorted automatically.
              </p>
            </div>

            <div>
              <div className="mb-6 h-px w-12 bg-gold/40" />
              <h3 className="text-2xl font-light text-sand mb-4 leading-snug">
                AI finds the bucks.
              </h3>
              <p className="text-sm leading-7 text-sand-dim">
                Every photo scanned. Bucks, does, turkeys, predators —
                tagged and ready to filter. Stop scrolling through blanks.
              </p>
            </div>

            <div>
              <div className="mb-6 h-px w-12 bg-gold/40" />
              <h3 className="text-2xl font-light text-sand mb-4 leading-snug">
                Share with one tap.
              </h3>
              <p className="text-sm leading-7 text-sand-dim">
                Clean shareable links. Full resolution with camera name,
                time, and weather. Not a compressed group text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break — night buck */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Img
          src="/images/MBL_0105.JPG"
          alt="Trail camera capture of a whitetail buck at night"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-transparent to-bark/40" />
      </section>

      {/* The problem */}
      <section className="px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light leading-snug tracking-tight text-sand sm:text-5xl">
            You spend more time managing trail cam content than using it.
          </h2>

          <p className="mt-10 text-base leading-8 text-sand-muted max-w-xl mx-auto">
            Three camera apps. Two SD cards. A phone gallery full of
            screenshots. Gerardy replaces all of it.
          </p>

          <div className="mt-10">
            <Link
              href="/how-it-works"
              className="text-sm font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-muted transition-colors"
            >
              See how it works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Photo break — hunter silhouette at sunset */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Img
          src="/images/IMG_0349.jpg"
          alt="Hunter silhouette at sunset"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-transparent to-bark/40" />
      </section>

      {/* On the horizon */}
      <section className="px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />

          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6">
              On the Horizon
            </p>
            <h2 className="text-3xl font-light tracking-tight text-sand sm:text-4xl">
              Sharing is just the beginning.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-12 max-w-3xl mx-auto">
            <div>
              <h3 className="text-base font-medium text-sand mb-2">
                AI Species Detection
              </h3>
              <p className="text-sm leading-7 text-sand-dim">
                Every photo tagged automatically. Bucks, does, turkeys,
                predators — filterable in seconds.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-sand mb-2">
                Smart Filtering
              </h3>
              <p className="text-sm leading-7 text-sand-dim">
                Filter by species, camera, date, time of day. Find any photo
                in your library instantly.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-sand mb-2">
                Activity Analytics
              </h3>
              <p className="text-sm leading-7 text-sand-dim">
                Time-of-day movement patterns and weekly trends for every
                camera on your property.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-sand mb-2">
                Property Mapping
              </h3>
              <p className="text-sm leading-7 text-sand-dim">
                Pin cameras on a map. See activity by location. Know where
                the movement is at a glance.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/features"
              className="text-sm font-medium tracking-[0.15em] uppercase text-gold hover:text-gold-muted transition-colors"
            >
              Full roadmap &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Photo break — green hills */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Img
          src="/images/IMG_2521.jpg"
          alt="Rolling green hills and open sky"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-transparent to-bark/40" />
      </section>

      {/* Compatibility — with aerial photo */}
      <section className="relative px-6 py-20 sm:py-32 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Img
            src="/images/IMG_0798.JPG"
            alt="Aerial view of wilderness from floatplane"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-bark/75" />
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-sand sm:text-4xl">
            Works with every camera you own.
          </h2>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {[
              "Moultrie",
              "Tactacam",
              "Stealth Cam",
              "Bushnell",
              "Reconyx",
              "Browning",
              "Spartan",
              "Spypoint",
            ].map((brand) => (
              <span
                key={brand}
                className="text-base tracking-[0.1em] uppercase text-sand/50 font-light"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="h-px w-full bg-sand-dim/10 mb-12 sm:mb-20" />

          <h2 className="text-3xl font-light leading-snug tracking-tight text-sand sm:text-5xl">
            Stop managing chaos.
            {" "}
            Start sharing what matters.
          </h2>
          <div className="mt-12">
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
