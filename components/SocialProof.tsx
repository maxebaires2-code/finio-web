"use client";

const avatars = [
  { initials: "MK", bg: "#2d6a4f" },
  { initials: "AS", bg: "#1d4e89" },
  { initials: "TH", bg: "#6a3d9a" },
  { initials: "LB", bg: "#b5451b" },
  { initials: "+496", bg: "rgba(30,216,176,0.2)", border: "1px solid rgba(30,216,176,0.4)", color: "#1ED8B0" },
];

export default function SocialProof() {
  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between"
          style={{
            border: "1px solid rgba(30,216,176,0.20)",
            background: "rgba(30,216,176,0.04)",
          }}
        >
          {/* Left */}
          <div className="flex flex-col gap-3 max-w-md">
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.02em",
                color: "#F5F5F0",
                lineHeight: 1.2,
              }}
            >
              500+ people waiting to take control of their money.
            </h2>
            <p style={{ fontWeight: 300, fontSize: "0.9rem", color: "rgba(245,245,240,0.55)" }}>
              Launching in Norway first · Sweden &amp; Denmark coming soon
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 items-start md:items-end">
            {/* Avatar row */}
            <div className="flex items-center">
              {avatars.map((a, i) => (
                <div
                  key={a.initials}
                  className="rounded-full flex items-center justify-center font-semibold"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: a.bg,
                    border: a.border ?? "2px solid #0A2535",
                    color: a.color ?? "#F5F5F0",
                    marginLeft: i === 0 ? "0" : "-8px",
                    fontSize: a.initials.startsWith("+") ? "0.6rem" : "0.7rem",
                    zIndex: avatars.length - i,
                    position: "relative",
                  }}
                >
                  {a.initials}
                </div>
              ))}
            </div>

            {/* CTA button */}
            <button
              onClick={scrollToForm}
              className="rounded-full px-7 py-3 text-sm transition-opacity hover:opacity-90"
              style={{
                background: "#1ED8B0",
                color: "#0A2535",
                fontWeight: 600,
              }}
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
