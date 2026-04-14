"use client";

export default function Navbar() {
  const scrollToHero = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(10, 37, 53, 0.80)",
        borderBottom: "1px solid rgba(245,245,240,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-wordmark.svg" alt="FINIO" height={40} style={{ height: "40px", width: "auto" }} />

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
          <button
            onClick={scrollToHero}
            className="rounded-full px-5 py-2 text-sm transition-opacity hover:opacity-90"
            style={{
              background: "#1ED8B0",
              color: "#0A2535",
              fontWeight: 500,
            }}
          >
            Get early access
          </button>
        </div>
      </div>
    </nav>
  );
}
