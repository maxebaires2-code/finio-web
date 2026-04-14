const steps = [
  {
    number: "01",
    emoji: "🔗",
    title: "Connect",
    description:
      "Link your Norwegian bank account securely via BankID. Read-only, encrypted, PSD2-compliant.",
  },
  {
    number: "02",
    emoji: "⚡",
    title: "Sync",
    description:
      "FINIO automatically categorizes your transactions and builds your budget. No manual entry ever.",
  },
  {
    number: "03",
    emoji: "💡",
    title: "Discover",
    description:
      "Your AI Advisor surfaces savings opportunities, flags waste, and helps you finish every month ahead.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
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
          Up and running in{" "}
          <span style={{ color: "#1ED8B0" }}>3 minutes.</span>
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dashed connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
            style={{
              borderTop: "1px dashed rgba(30,216,176,0.25)",
              zIndex: 0,
              left: "calc(16.67% + 32px)",
              right: "calc(16.67% + 32px)",
            }}
          />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center gap-4">
              {/* Numbered circle */}
              <div
                className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
                style={{
                  border: "2px solid rgba(30,216,176,0.5)",
                  background: "#0A2535",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#1ED8B0",
                    fontFamily: "var(--font-dm-sans)",
                    opacity: 0.7,
                    letterSpacing: "0.1em",
                  }}
                >
                  {step.number}
                </span>
                <span className="text-2xl">{step.emoji}</span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#F5F5F0",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(245,245,240,0.6)",
                  maxWidth: "260px",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
