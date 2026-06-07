import React from "react";
import Link from "next/link";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshal-tupe/" },
  { label: "GitHub", href: "https://github.com/harshaltupe12" },
  { label: "Instagram", href: "https://www.instagram.com/harshal.tupe_/" },
  { label: "Email", href: "mailto:harshaltupe12@gmail.com" },
];

function Footer() {
  return (
    <footer className="bg-cream" style={{ borderTop: "1px solid var(--ed-hair)" }}>
      <div className="container-ed" style={{ paddingTop: 80, paddingBottom: 48 }}>
        {/* CTA */}
        <h2
          className="text-ink font-sans m-0"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 600, maxWidth: 900 }}
        >
          Let's build{" "}
          <span className="font-serif italic text-rust" style={{ fontWeight: 400 }}>
            something
          </span>
          .
        </h2>

        <Link
          href="/contact"
          className="inline-flex items-center text-ink transition-colors duration-150 ease-out hover:text-rust"
          style={{ marginTop: 24, fontSize: 18, borderBottom: "1px solid var(--ed-hair-2)", paddingBottom: 4 }}
        >
          Get in touch&nbsp;→
        </Link>

        {/* Links row */}
        <div className="flex flex-wrap gap-x-7 gap-y-2" style={{ marginTop: 56 }}>
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="eyebrow text-soft transition-colors duration-150 ease-out hover:text-rust"
              style={{ padding: "6px 0" }}
            >
              {l.label} ↗
            </Link>
          ))}
        </div>

        <hr className="hair-rule" style={{ marginTop: 32, marginBottom: 24 }} />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow m-0">© 2026 Harshal Tupe</p>
          <p className="eyebrow m-0">Built in Pune · React · Next.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
