"use client";
import React from "react";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../_Components/SectionHeading";

const labelStyle = {
  fontFamily: "var(--mono)",
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--ed-muted-2)",
};

const SOCIALS = [
  { Icon: Phone, label: "+91 93709 46170", href: "tel:+919370946170" },
  { Icon: Mail, label: "harshaltupe12@gmail.com", href: "mailto:harshaltupe12@gmail.com" },
  { Icon: Linkedin, label: "linkedin.com/in/harshal-tupe", href: "https://www.linkedin.com/in/harshal-tupe/" },
  { Icon: Github, label: "github.com/harshaltupe12", href: "https://github.com/harshaltupe12" },
  { Icon: Instagram, label: "instagram.com/harshal.tupe_", href: "https://www.instagram.com/harshal.tupe_/" },
];

function Contact() {
  return (
    <section className="bg-cream" id="contact">
      <div className="container-ed section-y">
        <SectionHeading number="06" label="Contact" title="Let's" accent="talk" />

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-start">
          {/* Form */}
          <div>
            <p className="text-soft m-0" style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 520, marginBottom: 28 }}>
              Have a query, an idea, or a role that fits my skill set? Drop a line.
              I'm happy to talk.
            </p>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="78663257-eaa2-4b38-a16b-d038fd43a807" />

              <div style={{ marginBottom: 20 }}>
                <label htmlFor="c-name" style={labelStyle}>Your name</label>
                <input id="c-name" type="text" name="Name" autoComplete="name" required placeholder="John Doe" className="ed-input" />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label htmlFor="c-email" style={labelStyle}>Your email</label>
                <input id="c-email" type="email" name="Email" autoComplete="email" required placeholder="john@example.com" className="ed-input" />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label htmlFor="c-msg" style={labelStyle}>Message</label>
                <textarea id="c-msg" name="Message" required rows={4} placeholder="Tell me about it…" className="ed-input" style={{ resize: "vertical" }} />
              </div>

              <button
                type="submit"
                className="press inline-flex items-center justify-center bg-rust font-medium hover:scale-[1.02]"
                style={{ color: "var(--ed-bg)", padding: "14px 22px", fontSize: 15, width: "100%" }}
              >
                Send message&nbsp;→
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="md:border-l" style={{ borderColor: "var(--ed-hair)" }}>
            <div className="md:pl-12">
              <p className="eyebrow" style={{ marginBottom: 20 }}>Elsewhere</p>
              <div className="flex flex-col" style={{ gap: 4 }}>
                {SOCIALS.map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-soft transition-colors duration-150 ease-out hover:text-rust"
                    style={{ padding: "10px 0", fontSize: 15 }}
                  >
                    <Icon size={18} strokeWidth={1.5} className="shrink-0" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
