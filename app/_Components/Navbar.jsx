"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const RESUME =
  "https://drive.google.com/file/d/1619GUOv6KQ0syMXMfWNjCa256k0-fQab/view?usp=sharing";

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href) => pathname === href;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] bg-cream transition-all duration-200 ease-out"
      style={{
        borderBottom: `1px solid ${scrolled ? "var(--ed-hair)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(4px)" : "none",
      }}
    >
      <div className="container-ed flex items-center justify-between" style={{ height: 64 }}>
        {/* Name + role */}
        <Link href="/" className="flex items-baseline gap-2 no-underline" onClick={() => setOpen(false)}>
          <span className="text-ink font-medium tracking-[-0.01em]" style={{ fontSize: 16 }}>
            Harshal Tupe
          </span>
          <span className="eyebrow hidden sm:inline" style={{ fontSize: 10 }}>
            Web Developer
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] transition-colors duration-150 ease-out hover:text-rust"
              style={{
                color: isActive(l.href) ? "var(--ed-fg)" : "var(--ed-muted)",
                fontWeight: isActive(l.href) ? 500 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-[14px] font-medium text-ink border border-hair-2 px-[14px] py-2 transition-colors duration-200 ease-out hover:border-rust hover:text-rust"
        >
          Resume&nbsp;→
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center text-ink"
          style={{ width: 44, height: 44, marginRight: -10 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className="md:hidden fixed left-0 right-0 bg-cream flex-col"
        style={{
          top: 64,
          bottom: 0,
          display: open ? "flex" : "none",
          borderTop: "1px solid var(--ed-hair)",
          padding: 24,
          zIndex: 99,
        }}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-ink"
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              padding: "18px 0",
              borderBottom: "1px solid var(--ed-hair)",
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="text-rust mt-4"
          style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", padding: "18px 0" }}
        >
          Resume&nbsp;→
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
