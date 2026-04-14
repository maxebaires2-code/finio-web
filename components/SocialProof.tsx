"use client";

export default function SocialProof() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between"
          style={{
            border: "1px solid rgba(16,196,160,0.20)",
            background: "rgba(16,196,160,0.04)",
          }}
        >
          {/* Left */}
          <div className="flex flex-col gap-3 max-w-md">
            <h2
              style={{
                fontFamily: "var(--font-jakarta)",
              fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.02em",
                color: "#F5F5F0",
                lineHeight: 1.2,
              }}
            >
              Be among the first to take control of your money.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans)",
                fontWeight: 300, fontSize: "0.9rem", color: "rgba(245,245,240,0.55)" }}>
              Launching in Norway · Sweden &amp; Denmark coming soon
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center md:items-end">
            <button
              onClick={scrollToWaitlist}
              className="rounded-full px-7 py-3 text-sm transition-opacity hover:opacity-90"
              style={{
                background: "#10C4A0",
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
