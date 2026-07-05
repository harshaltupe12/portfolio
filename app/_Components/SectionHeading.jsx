import React from "react";

/**
 * Editorial numbered section heading — ref CLAUDE.md (NN / Label + display title).
 * @param {string} number  e.g. "01"
 * @param {string} label   eyebrow word e.g. "What I do"
 * @param {string} title   plain heading text
 * @param {string} [accent] optional trailing word rendered in serif-italic rust
 * @param {string} [href]  optional "view all" link
 * @param {string} [hrefLabel]
 */
function SectionHeading({ number, label, title, accent, href, hrefLabel }) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
      <div>
        <p className="eyebrow mb-3">
          {number} / {label}
        </p>
        <h2
          className="text-ink font-sans m-0"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            fontWeight: 600,
          }}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <span className="font-serif italic text-rust" style={{ fontWeight: 400 }}>
                {accent}
              </span>
            </>
          ) : null}
        </h2>
      </div>
      {href ? (
        <a
          href={href}
          className="eyebrow text-soft transition-colors duration-150 ease-out hover:text-rust"
          style={{ paddingBottom: 4 }}
        >
          {hrefLabel || "View all"} ↗
        </a>
      ) : null}
    </div>
  );
}

export default SectionHeading;
