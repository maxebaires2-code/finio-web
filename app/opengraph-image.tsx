import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FINIO — Finish every month ahead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0A2535",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Top left: wordmark */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "64px",
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            FINIO
          </span>
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#10C4A0",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            AI FINANCE
          </span>
        </div>

        {/* Center: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "88px",
              color: "#ffffff",
              letterSpacing: "-3px",
              lineHeight: 1.05,
            }}
          >
            Finish every month{" "}
            <span style={{ color: "#10C4A0" }}>ahead.</span>
          </span>
        </div>

        {/* Bottom: tagline */}
        <span
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "22px",
            color: "rgba(245,245,240,0.45)",
            letterSpacing: "0.5px",
          }}
        >
          AI-powered personal finance for Norway · getfinio.com
        </span>
      </div>
    ),
    size
  );
}
