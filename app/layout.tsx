import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack DiMarco",
  description: "Jack DiMarco's personal website",
  openGraph: {
    title: "Jack DiMarco",
    description: "Jack DiMarco's personal website",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Jack DiMarco",
    description: "Jack DiMarco's personal website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSerif.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex justify-center px-6">
            <div className="w-full max-w-2xl">
              <div className="flex flex-col min-h-screen py-20 space-y-16 md:space-y-20">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
