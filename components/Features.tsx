const features = [
  {
    emoji: "🎯",
    title: "Finds savings you didn't know existed",
    description:
      "Unused subscriptions, a mortgage rate above market, insurance you're overpaying — FINIO spots them automatically and tells you exactly what to do.",
  },
  {
    emoji: "🏦",
    title: "All your money, one place",
    description:
      "Connect multiple banks and credit cards. Every transaction, every account, automatically categorized and tracked in one clean view.",
  },
  {
    emoji: "🤖",
    title: "Ask anything, get real answers",
    description:
      "Can I afford a holiday? Where did my money go this month? FINIO answers based on your actual numbers — not generic tips.",
  },
  {
    emoji: "🔒",
    title: "Your data stays yours",
    description:
      "Read-only bank access. Data encrypted and hosted in the EU. No ads, no selling your data. FINIO makes money when it saves you money — not before.",
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
            fontFamily: "var(--font-jakarta)",
              fontWeight: 700,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.02em",
            color: "#F5F5F0",
          }}
        >
          Everything your bank app should do —{" "}
          <span style={{ color: "#10C4A0" }}>but doesn&apos;t.</span>
        </h2>

        {/* 2×2 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                style={{ background: "rgba(16,196,160,0.12)" }}
              >
                {f.emoji}
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "var(--font-jakarta)",
              fontWeight: 700, fontSize: "1.1rem", color: "#F5F5F0" }}>
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
