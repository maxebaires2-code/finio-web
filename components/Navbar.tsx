"use client";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(10, 37, 53, 0.80)",
        borderBottom: "1px solid rgba(245,245,240,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo — icon box + wordmark */}
        <div className="flex items-center gap-2.5">
          {/* Icon box */}
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: "30px",
              height: "30px",
              background: "rgba(16,196,160,0.13)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="240" y="200" width="94" height="624" rx="47" fill="#10C4A0"/>
              <rect x="240" y="200" width="440" height="94" rx="47" fill="#10C4A0"/>
              <rect x="240" y="465" width="340" height="94" rx="47" fill="#10C4A0"/>
              <circle cx="772" cy="512" r="88" fill="#10C4A0"/>
              <circle cx="772" cy="512" r="44" fill="#0A2535"/>
            </svg>
          </div>
          {/* Wordmark */}
          <span
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 800,
              fontSize: "22px",
              color: "#10C4A0",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            FINIO
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm md:text-base transition-colors bg-transparent border-0 cursor-pointer p-0"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(245,245,240,0.7)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#F5F5F0")}
            onMouseOut={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.7)")}
          >
            How it works
          </button>
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm md:text-base transition-colors bg-transparent border-0 cursor-pointer p-0"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(245,245,240,0.7)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#F5F5F0")}
            onMouseOut={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.7)")}
          >
            Features
          </button>
        </div>
      </div>
    </nav>
  );
}
