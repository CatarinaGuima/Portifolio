import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import MotionProvider from "@/providers/MotionProvider";
import { site } from "@/data/site";

// Fontes hospedadas no próprio projeto: sem requisição extra ao Google
const heading = localFont({
  src: "../fonts/BricolageGrotesque-latin-wdth.woff2",
  variable: "--font-heading",
  weight: "200 800",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "75% 100%" }],
});

const body = localFont({
  src: "../fonts/Figtree-latin-wght.woff2",
  variable: "--font-body",
  weight: "300 900",
  display: "swap",
});

const description =
  "Portfólio de Catarina Guimarães, desenvolvedora front-end com React, Next.js e TypeScript. Veja projetos, habilidades e formas de contato.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description,
    url: "/",
    siteName: `Portfólio ${site.firstName}`,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f1f5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${heading.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionProvider>
            <a
              href="#conteudo"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              Pular para o conteúdo
            </a>
            <Header />
            {children}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
