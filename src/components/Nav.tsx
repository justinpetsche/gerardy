"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bark/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="text-base font-medium tracking-[0.2em] uppercase text-sand hover:text-sand/80 transition-colors"
        >
          Gerardy
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-sand-dim hover:text-sand"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/early-access"
            className="border border-sand-dim/20 px-5 py-2 text-xs tracking-[0.15em] uppercase text-sand hover:bg-sand/5 transition-colors"
          >
            Early Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
