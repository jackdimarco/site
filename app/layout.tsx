import type { Metadata } from "next";
import { JetBrains_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${jetbrainsMono.variable} ${chakraPetch.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex justify-center px-6">
            <div className="w-full max-w-2xl">
              <div className="flex flex-col min-h-screen pt-20 pb-8 space-y-16 md:space-y-20">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
