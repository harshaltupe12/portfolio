"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", id: "about", href: "/#about" },
  { label: "Experience", id: "experience", href: "/#experience" },
  { label: "Skills", id: "skills", href: "/#skills" },
  { label: "Education", id: "education", href: "/#education" },
  { label: "Projects", id: "projects", href: "/#projects" },
  { label: "Contact", id: "contact", href: "/#contact" },
];

const RESUME =
  "https://drive.google.com/file/d/1619GUOv6KQ0syMXMfWNjCa256k0-fQab/view?usp=sharing";

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // respect reduced-motion: keep opacity, drop movement
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(m.matches);
    set();
    m.addEventListener("change", set);
    return () => m.removeEventListener("change", set);
  }, []);

  // lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // scroll-spy: highlight the nav item for the section in view
  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!els.length) return; // not on the home page
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  const isActive = (id) => activeId === id;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] bg-cream"
        style={{
          borderBottom: `1px solid ${scrolled ? "var(--ed-hair)" : "transparent"}`,
          backdropFilter: scrolled ? "blur(4px)" : "none",
          transition:
            "border-color 200ms var(--ease-out), backdrop-filter 200ms var(--ease-out)",
        }}
      >
        <div className="container-ed flex items-center justify-between" style={{ height: 64 }}>
          {/* Name + role */}
          <Link href="/" className="flex items-baseline gap-2 no-underline">
            <span className="text-ink font-medium tracking-[-0.01em]" style={{ fontSize: 16 }}>
              Harshal Tupe
            </span>
            <span className="eyebrow hidden sm:inline" style={{ fontSize: 10 }}>
              Web Developer
            </span>
          </Link>

          {/* Desktop links — animated underline */}
          <nav className="hidden lg:flex items-center gap-6">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="navlink" data-active={isActive(l.id)}>
                {l.label}
                <span className="navlink-underline" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="press hidden lg:inline-flex items-center text-[14px] font-medium text-ink border border-hair-2 px-[14px] py-2 hover:border-rust hover:text-rust"
          >
            Resume&nbsp;→
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="press lg:hidden flex items-center justify-center text-ink"
            style={{ width: 44, height: 44, marginRight: -10 }}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        className="lg:hidden fixed inset-0 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        style={{
          backgroundColor: "var(--ed-bg)",
          zIndex: 200,
          opacity: open ? 1 : 0,
          transform: open || reduced ? "translateY(0)" : "translateY(-12px)",
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
          // Open: panel paints, then links cascade in (top to bottom).
          // Close: reverse — links cascade out (bottom to top), THEN the panel
          // holds opaque (140ms delay) and fades, hiding after everything settles.
          transition: open
            ? "opacity 280ms var(--ease-out), transform 280ms var(--ease-out), visibility 0ms"
            : "opacity 220ms var(--ease-out) 140ms, transform 220ms var(--ease-out) 140ms, visibility 0ms 360ms",
        }}
      >
        {/* Overlay top bar — mirrors header, with close */}
        <div className="container-ed w-full flex items-center justify-between shrink-0" style={{ height: 64 }}>
          <Link href="/" onClick={() => setOpen(false)} className="no-underline">
            <span className="text-ink font-medium tracking-[-0.01em]" style={{ fontSize: 16 }}>
              Harshal Tupe
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="press flex items-center justify-center text-ink"
            style={{ width: 44, height: 44, marginRight: -10 }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Links — staggered entrance after the background paints */}
        <nav className="container-ed w-full flex flex-col" style={{ paddingTop: 8, paddingBottom: 24 }}>
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                padding: "20px 0",
                borderBottom: "1px solid var(--ed-hair)",
                color: isActive(l.id) ? "var(--ed-accent)" : "var(--ed-fg)",
                opacity: open ? 1 : 0,
                transform: open || reduced ? "none" : "translateY(8px)",
                transition: open
                  ? "opacity 300ms var(--ease-out), transform 300ms var(--ease-out)"
                  : "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)",
                // open: top→bottom stagger. close: reverse, bottom→top.
                transitionDelay: open ? `${90 + i * 45}ms` : `${(LINKS.length - i) * 35}ms`,
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
            className="text-rust"
            style={{
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              padding: "20px 0",
              opacity: open ? 1 : 0,
              transform: open || reduced ? "none" : "translateY(8px)",
              transition: open
                ? "opacity 300ms var(--ease-out), transform 300ms var(--ease-out)"
                : "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)",
              transitionDelay: open ? `${90 + LINKS.length * 45}ms` : "0ms",
            }}
          >
            Resume&nbsp;→
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
