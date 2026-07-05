"use client";
import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const LINKS = [
  { label: "Email", value: "harshaltupe12@gmail.com", href: "mailto:harshaltupe12@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/harshal-tupe", href: "https://www.linkedin.com/in/harshal-tupe/" },
  { label: "GitHub", value: "github.com/harshaltupe12", href: "https://github.com/harshaltupe12" },
  { label: "Instagram", value: "instagram.com/harshallll.exe", href: "https://www.instagram.com/harshallll.exe" },
];

const qLabel = {
  fontFamily: "var(--mono)",
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--ed-muted-2)",
  display: "block",
  marginBottom: 10,
};

function Contact() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay, ease: EASE },
  });

  return (
    <section className="bg-cream" id="contact">
      <div className="container-ed section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          {/* Left — headline + links */}
          <motion.div {...rise(0)}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>07 / Contact</p>

            <h2
              className="text-ink font-sans m-0"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.08, letterSpacing: "-0.04em", fontWeight: 600, paddingBottom: 6 }}
            >
              Got an{" "}
              <span className="font-serif italic text-rust" style={{ fontWeight: 400 }}>
                interesting problem?
              </span>{" "}
              Let's talk about it.
            </h2>

            <p className="text-soft" style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 460, marginTop: 28 }}>
              I do my best work when the brief is real: growth pressure, a messy
              product surface, or a system that should already be working better
              than it is. Use the form to tell me about it.
            </p>

            {/* Contact links */}
            <div style={{ marginTop: 44, borderBottom: "1px solid var(--ed-hair)" }}>
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] items-center gap-4"
                  style={{ borderTop: "1px solid var(--ed-hair)", padding: "16px 0" }}
                >
                  <span className="eyebrow">{l.label}</span>
                  <span className="flex items-center justify-between gap-2 text-ink transition-colors duration-150 ease-out group-hover:text-rust" style={{ fontSize: 15 }}>
                    <span className="truncate">{l.value}</span>
                    <span className="shrink-0">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right — terminal intake form */}
          <motion.div {...rise(0.1)} style={{ border: "1px solid var(--ed-hair-2)" }}>
            {/* Title bar */}
            <div
              className="flex items-center justify-between"
              style={{ backgroundColor: "var(--ed-bg-2)", borderBottom: "1px solid var(--ed-hair)", padding: "12px 18px" }}
            >
              <span className="eyebrow" style={{ fontSize: 10 }}>
                Harshal Terminal [v1.0]
              </span>
              <span className="eyebrow" style={{ fontSize: 10 }}>
                Structured Intake
              </span>
            </div>

            {/* Body */}
            <form action="https://api.web3forms.com/submit" method="POST" style={{ padding: "24px 20px" }}>
              <input type="hidden" name="access_key" value="78663257-eaa2-4b38-a16b-d038fd43a807" />

              <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ed-muted)", margin: "0 0 22px" }}>
                guest@harshal:~$ <span className="text-rust">init-contact</span>
              </p>

              <div style={{ marginBottom: 22 }}>
                <label htmlFor="c-name" style={qLabel}>[?] What is your name?</label>
                <input id="c-name" type="text" name="Name" autoComplete="name" required placeholder="Your name" className="ed-input" style={{ marginTop: 0 }} />
              </div>

              <div style={{ marginBottom: 22 }}>
                <label htmlFor="c-msg" style={qLabel}>[?] Brief message</label>
                <textarea id="c-msg" name="Message" required rows={8} placeholder="What are you building, fixing, or trying to unlock?" className="ed-input" style={{ marginTop: 0, resize: "vertical", minHeight: 200 }} />
              </div>

              <div style={{ marginBottom: 26 }}>
                <label htmlFor="c-email" style={qLabel}>[?] What is your email?</label>
                <input id="c-email" type="email" name="Email" autoComplete="email" required placeholder="you@example.com" className="ed-input" style={{ marginTop: 0 }} />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ed-muted-2)" }}>
                  Real inbox · real follow-up
                </span>
                <button
                  type="submit"
                  className="press inline-flex items-center gap-2 text-ink font-medium border border-hair-2 hover:border-rust hover:text-rust"
                  style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", padding: "12px 18px" }}
                >
                  Send message →
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Note under the form */}
        <motion.p
          {...rise(0.16)}
          className="text-soft"
          style={{ fontSize: 14, marginTop: 24, marginLeft: "auto", maxWidth: 480 }}
        >
          I read every message. If the problem is real and the context is clear,
          you'll hear back from me.
        </motion.p>
      </div>
    </section>
  );
}

export default Contact;
