import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "FINIO — Finish every month ahead",
  description:
    "FINIO connects to your bank and actively finds savings — not just tracks spending. Your personal AI finance advisor, free for Norway.",
  metadataBase: new URL("https://www.getfinio.com"),
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "FINIO — Finish every month ahead",
    description:
      "FINIO connects to your bank and actively finds savings — not just tracks spending.",
    url: "https://www.getfinio.com",
    siteName: "FINIO",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${syne.variable} ${dmSans.variable}`}>
      <body style={{ background: "#0A2535", color: "#F5F5F0" }}>
        {children}
      </body>
    </html>
  );
}
