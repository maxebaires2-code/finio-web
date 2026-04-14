const features = [
  {
    emoji: "🔗",
    title: "Links to your bank in 60 seconds",
    description:
      "Read-only access via PSD2 open banking. FINIO can see your transactions — it can never move money. Works with all major Norwegian banks.",
  },
  {
    emoji: "🤖",
    title: "Ask anything, get real answers",
    description:
      "Ask 'where did my money go this month?' or 'can I afford a holiday?' FINIO answers based on your actual numbers — not generic advice.",
  },
  {
    emoji: "🎯",
    title: "Finds savings you didn't know existed",
    description:
      "Unused subscriptions. A mortgage rate 0.4% above market. Insurance you're overpaying. FINIO spots them and tells you exactly what to do.",
  },
  {
    emoji: "🔒",
    title: "Your data stays yours",
    description:
      "Read-only bank access, data encrypted and hosted in the EU. No ads. No selling your data. Ever. FINIO makes money when it saves you money — not before.",
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
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.02em",
            color: "#F5F5F0",
          }}
        >
          Everything your bank app should do —{" "}
          <span style={{ color: "#1ED8B0" }}>but doesn&apos;t.</span>
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
                style={{ background: "rgba(30,216,176,0.12)" }}
              >
                {f.emoji}
              </div>

              {/* Title */}
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#F5F5F0" }}>
                {f.title}
              </h3>

              {/* Description */}
              <p
                style={{
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
