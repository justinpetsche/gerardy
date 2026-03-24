"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/early-access", label: "Early Access" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bark/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="text-base font-medium tracking-[0.2em] uppercase text-sand hover:text-sand/80 transition-colors"
          onClick={() => setOpen(false)}
        >
          Gerardy
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                link.href === "/early-access"
                  ? "border border-sand-dim/20 px-5 py-2 text-sand hover:bg-sand/5"
                  : pathname === link.href
                  ? "text-gold"
                  : "text-sand-dim hover:text-sand"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-sand-dim p-1"
          aria-label="Menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-sand-dim/10 bg-bark/95 backdrop-blur-sm px-6 py-6 space-y-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-sm tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-sand-muted hover:text-sand"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
