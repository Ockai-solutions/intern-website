import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "oCKai | Intelligente Automatisierung",
  description:
    "Individuelle AI Agents und intelligente Automatisierungen für Marketing, Sales und M&A.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased `}
    >
      <body className="min-h-full flex flex-col m-6 md:m-0">
        <Navbar1
          logo={{
            url: "/",
            src: "ockai-logo-c-inverted.png",
            alt: "logo",
            title: "oCKai",
          }}
          menu={[
            { title: "Home", url: "/" },
            { title: "Leistungen", url: "/leistungen" },
            { title: "Über uns", url: "/ueber-uns" },
            { title: "Kontakt", url: "/kontakt" },
          ]}
          cta={{
            button: { title: "Anwendungsfall besprechen", url: "/kontakt" }
          }}
        /><hr/>
        {children}
        <Footer2
          logo={{
            url: "/",
            src: "ockai-logo-c-inverted.png",
            title: "ockai.de",
            alt: "logo",
          }}
          description="Intelligente Automatisierung für Marketing, Sales & M&A. Passende Partner finden. Zum Abschluss bringen. Automatisiert in Ihrem System."
          sections={[
            {
              title: "",
              links: [],
            },
            {
              title: "",
              links: [],
            },
            {
              title: "Seiten",
              links: [
                { name: "Home", href: "/" },
                { name: "Leistungen", href: "/leistungen" },
                { name: "Über uns", href: "/ueber-uns" },
                { name: "Kontakt", href: "/kontakt" },
              ],
            },
          ]}
          copyright="© 2026 ockai.de. All rights reserved."
          legalLinks={[
            { name: "Impressum", href: "/impressum" },
            { name: "Datenschutz", href: "/datenschutz" },
          ]}
        />
      </body>
    </html>
  );
}
