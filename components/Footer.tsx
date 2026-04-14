"use client";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid rgba(245,245,240,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-wordmark.svg" alt="FINIO" style={{ height: "28px", width: "auto" }} />

        {/* Links */}
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors"
              style={{ color: "rgba(245,245,240,0.45)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.75)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.45)")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm" style={{ color: "rgba(245,245,240,0.35)" }}>
          © 2026 FINIO · Oslo, Norway
        </p>
      </div>
    </footer>
  );
}
