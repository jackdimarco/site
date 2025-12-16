import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack DiMarco",
  description: "Senior Software Engineer at Salesforce, building AI agents for Commerce. Based in Atlanta, Georgia.",
  metadataBase: new URL("https://jdimarco.com"),
  themeColor: "#000000",
  openGraph: {
    title: "Jack DiMarco",
    description: "Senior Software Engineer at Salesforce, building AI agents for Commerce. Based in Atlanta, Georgia.",
    url: "https://jackdimarco.dev",
    siteName: "Jack DiMarco",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jack DiMarco",
    description: "Senior Software Engineer at Salesforce, building AI agents for Commerce. Based in Atlanta, Georgia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex justify-center px-6">
            <div className="w-full max-w-2xl">
              <div className="flex flex-col min-h-screen pt-10 pb-8 gap-6">
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
