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
        {/* Logo — icon box + wordmark, no subtitle */}
        <div className="flex items-center gap-2.5">
          {/* Icon box */}
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: "30px",
              height: "30px",
              background: "rgba(30,216,176,0.13)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="240" y="200" width="94" height="624" rx="47" fill="#1ED8B0"/>
              <rect x="240" y="200" width="440" height="94" rx="47" fill="#1ED8B0"/>
              <rect x="240" y="465" width="340" height="94" rx="47" fill="#1ED8B0"/>
              <circle cx="772" cy="512" r="88" fill="#1ED8B0"/>
              <circle cx="772" cy="512" r="44" fill="#0A2535"/>
            </svg>
          </div>
          {/* Wordmark */}
          <span
            style={{
              fontWeight: 800,
              fontSize: "20px",
              color: "#1ED8B0",
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            FINIO
          </span>
        </div>

        {/* Nav links + CTA */}
        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className="hidden md:block text-sm transition-colors"
            style={{ color: "rgba(245,245,240,0.6)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#F5F5F0")}
            onMouseOut={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.6)")}
          >
            How it works
          </a>
          <a
            href="#features"
            className="hidden md:block text-sm transition-colors"
            style={{ color: "rgba(245,245,240,0.6)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#F5F5F0")}
            onMouseOut={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.6)")}
          >
            Features
          </a>
          <a
            href="#waitlist"
            className="rounded-full px-5 py-2 text-sm transition-opacity hover:opacity-90"
            style={{
              background: "#1ED8B0",
              color: "#0A2535",
              fontWeight: 500,
            }}
          >
            Get early access
          </a>
        </div>
      </div>
    </nav>
  );
}
