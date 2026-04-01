import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mogentik | Marketing that Thinks for Itself",
  description: "Six autonomous AI agents handle your SEO, social media, content, competitor intelligence and growth strategy — running 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
