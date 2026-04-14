const features = [
  {
    emoji: "🔗",
    title: "Instant bank sync",
    description:
      "Connect your Norwegian bank in 60 seconds via PSD2 open banking. Secure, read-only. We never see your credentials.",
  },
  {
    emoji: "🤖",
    title: "AI Advisor",
    description:
      "Ask anything about your finances. Get honest, personalized advice based on your actual spending — not generic tips.",
  },
  {
    emoji: "🎯",
    title: "Active savings discovery",
    description:
      "FINIO scans your transactions and proactively surfaces savings: subscriptions to cancel, better loan rates, smarter switching.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.02em",
            color: "#F5F5F0",
          }}
        >
          Everything your bank app should do —{" "}
          <span style={{ color: "#1ED8B0" }}>but doesn&apos;t.</span>
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-7 flex flex-col gap-4 transition-transform hover:-translate-y-1"
              style={{
                background: "rgba(245,245,240,0.04)",
                border: "1px solid rgba(245,245,240,0.10)",
              }}
            >
              {/* Emoji icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "rgba(30,216,176,0.12)" }}
              >
                {f.emoji}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#F5F5F0",
                }}
              >
                {f.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(245,245,240,0.6)",
                }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
