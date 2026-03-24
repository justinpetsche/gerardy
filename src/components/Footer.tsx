import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="h-px w-full bg-sand-dim/10 mb-12" />

        <div className="flex flex-col sm:flex-row items-start justify-between gap-10">
          <div>
            <Link
              href="/"
              className="text-sm font-medium tracking-[0.2em] uppercase text-sand hover:text-sand/80 transition-colors"
            >
              Gerardy
            </Link>
            <p className="mt-3 text-xs leading-5 text-sand-dim max-w-xs">
              Trail cam photos and videos — organized and shared
              beautifully. Works with any camera.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs tracking-[0.1em] uppercase text-sand-dim mb-3">
                Product
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/features" className="text-sm text-sand-muted hover:text-sand transition-colors">
                  Features
                </Link>
                <Link href="/how-it-works" className="text-sm text-sand-muted hover:text-sand transition-colors">
                  How It Works
                </Link>
                <Link href="/early-access" className="text-sm text-sand-muted hover:text-sand transition-colors">
                  Early Access
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.1em] uppercase text-sand-dim mb-3">
                Works With
              </p>
              <div className="flex flex-col gap-2 text-sm text-sand-dim">
                <span>Moultrie</span>
                <span>Tactacam</span>
                <span>Stealth Cam</span>
                <span>Bushnell</span>
                <span>+ Any Camera</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-sand-dim/40">
          &copy; {new Date().getFullYear()} Gerardy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
