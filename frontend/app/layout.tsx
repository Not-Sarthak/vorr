import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vorr",
  description: "Mine $ORE With Your Website Visitors",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}