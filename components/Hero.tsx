"use client";

import { useState } from "react";

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedName(name.trim().split(" ")[0]); // keep first name for success msg
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-28 lg:pt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 w-fit rounded-full px-4 py-1.5 text-sm"
            style={{
              background: "rgba(16,196,160,0.10)",
              border: "1px solid rgba(16,196,160,0.25)",
              color: "#10C4A0",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#10C4A0] animate-pulse" />
            Now in beta · Norway
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F5F5F0",
            }}
          >
            Finish every
            <br />
            month{" "}
            <span style={{ color: "#10C4A0" }}>ahead.</span>
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(245,245,240,0.6)",
              maxWidth: "480px",
            }}
          >
            FINIO finds the money you&apos;re losing every month and tells you exactly what to do with it. Your personal AI finance advisor — free.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2">
            {["🇳🇴 Norwegian banks", "🔒 Bank-level security", "✨ AI-powered"].map((pill) => (
              <span
                key={pill}
                className="rounded-full px-3 py-1 text-xs"
                style={{
                  background: "rgba(245,245,240,0.06)",
                  border: "1px solid rgba(245,245,240,0.12)",
                  color: "rgba(245,245,240,0.75)",
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Email form */}
          <div
            id="waitlist"
            style={{ scrollMarginTop: "80px" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[480px]">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your first name"
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 px-4 outline-none rounded-xl text-sm"
                  style={{
                    height: "52px",
                    background: "rgba(245,245,240,0.06)",
                    border: "1px solid rgba(245,245,240,0.15)",
                    color: "#F5F5F0",
                  }}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 px-4 outline-none rounded-xl text-sm"
                  style={{
                    height: "52px",
                    background: "rgba(245,245,240,0.06)",
                    border: "1px solid rgba(245,245,240,0.15)",
                    color: "#F5F5F0",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full rounded-xl text-sm whitespace-nowrap transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
                style={{
                  height: "52px",
                  background: "#10C4A0",
                  color: "#0A2535",
                  fontWeight: 600,
                }}
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Joining...
                  </>
                ) : (
                  "Get early access →"
                )}
              </button>
            </form>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-sm mt-3" style={{ color: "#10C4A0" }}>
                {submittedName
                  ? `You're on the list, ${submittedName}! We'll be in touch soon.`
                  : "You're on the list! We'll be in touch."}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm mt-3" style={{ color: "#ff6b6b" }}>
                {errorMsg}
              </p>
            )}
          </div>

          {/* Meta text */}
          <p className="text-xs" style={{ color: "rgba(245,245,240,0.45)" }}>
            Free to join · Launching in Norway 2026
          </p>
        </div>

        {/* Right column — Phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative overflow-hidden"
            style={{
              width: "240px",
              height: "480px",
              background: "#081e2c",
              borderRadius: "2.5rem",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(16,196,160,0.08)",
            }}
          >
            <div className="p-5 flex flex-col gap-3 h-full">
              {/* Greeting */}
              <p className="text-xs mt-2" style={{ color: "rgba(245,245,240,0.7)" }}>
                Good morning, Tor 👋⚡
              </p>

              {/* Balance card */}
              <div className="rounded-xl p-4" style={{ background: "#10C4A0" }}>
                <p className="text-xs font-medium" style={{ color: "#0A2535", opacity: 0.7 }}>
                  Left this month
                </p>
                <p className="text-2xl font-bold mt-0.5" style={{ color: "#0A2535" }}>
                  kr 4,280
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#0A2535", opacity: 0.6 }}>
                  of kr 14,000 budget
                </p>
              </div>

              {/* AI insight card */}
              <div
                className="rounded-xl p-3"
                style={{
                  background: "rgba(16,196,160,0.10)",
                  border: "1px solid rgba(16,196,160,0.20)",
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "#F5F5F0" }}>
                  💡 <strong style={{ color: "#10C4A0" }}>FINIO found kr 890/mo in savings.</strong> You have 4 unused subscriptions and a loan rate 1.2% above market.
                </p>
              </div>

              {/* Spending categories */}
              <div className="flex flex-col gap-2 mt-1">
                {[
                  { label: "Food", pct: 68, color: "#10C4A0" },
                  { label: "Transport", pct: 42, color: "#10C4A0" },
                  { label: "Shopping", pct: 91, color: "#ff6b6b" },
                  { label: "Subscriptions", pct: 55, color: "#10C4A0" },
                ].map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs" style={{ color: "rgba(245,245,240,0.6)" }}>
                        {label}
                      </span>
                      <span className="text-xs" style={{ color: "rgba(245,245,240,0.5)" }}>
                        {pct}%
                      </span>
                    </div>
                    <div
                      className="w-full rounded-full"
                      style={{ height: "4px", background: "rgba(245,245,240,0.08)" }}
                    >
                      <div
                        className="rounded-full"
                        style={{ width: `${pct}%`, height: "4px", background: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
