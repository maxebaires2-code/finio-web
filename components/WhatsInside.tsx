const items = [
  {
    emoji: "⚡",
    title: "Auto-generated budget",
    description:
      "Built from your last 3 months of spending. No manual setup, no spreadsheets.",
  },
  {
    emoji: "🐜",
    title: "Ant spending detector",
    description:
      "Catches small recurring charges that silently drain your account every month.",
  },
  {
    emoji: "📊",
    title: "Weekly spending insights",
    description:
      "Category breakdowns and over/under budget status — delivered every week automatically.",
  },
  {
    emoji: "🔄",
    title: "Multi-bank support",
    description:
      "Connect DNB, Nordea, SpareBank, Sbanken and more. All accounts in one place.",
  },
  {
    emoji: "💬",
    title: "AI Advisor",
    description:
      "Ask about your finances in plain language. Get answers based on your actual numbers, not generic advice.",
  },
  {
    emoji: "📈",
    title: "Savings tracker",
    description:
      "See exactly how much FINIO has saved you since day one. Every kr counts.",
  },
];

export default function WhatsInside() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section tag */}
        <p
          className="text-center mb-4 tracking-widest text-xs uppercase"
          style={{ color: "#1ED8B0", fontWeight: 500 }}
        >
          What&apos;s inside
        </p>

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
          Everything you need,{" "}
          <span style={{ color: "#1ED8B0" }}>nothing you don&apos;t.</span>
        </h2>

        {/* 2-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(245,245,240,0.03)",
            border: "1px solid rgba(245,245,240,0.08)",
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 px-7 py-6"
              style={{
                borderBottom:
                  /* hide bottom border on last row (items 5 & 6) */
                  i < items.length - 2 || (items.length % 2 !== 0 && i === items.length - 1)
                    ? "1px solid rgba(245,245,240,0.07)"
                    : undefined,
                /* right border on left-column items */
                borderRight:
                  i % 2 === 0 ? "1px solid rgba(245,245,240,0.07)" : undefined,
              }}
            >
              {/* Emoji */}
              <div
                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg mt-0.5"
                style={{ background: "rgba(30,216,176,0.10)" }}
              >
                {item.emoji}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 style={{ fontWeight: 600, fontSize: "0.95rem", color: "#F5F5F0" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "rgba(245,245,240,0.55)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
