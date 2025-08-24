
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { AppLoader } from "@/components/ui/Loading/loader";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Portfólio | Catarina Guimarães",
  description: "Portfólio pessoal de Catarina Guimarães",
  openGraph: {
    title: "Portfólio | Catarina Guimarães",
    description: "Confira meus projetos e experiências",
    url: "https://catarinaguimaraes.netlify.app/",
    siteName: "Portfólio Catarina",
    images: [
      {
        url: "https://catarinaguimaraes.netlify.app/avatar.png", 
        width: 1200,
        height: 630,
        alt: "Catarina Guimarães",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${nunito.className} min-h-screen bg-cover bg-center bg-no-repeat scrollbar`}
        style={{
          backgroundImage: "url('/background-hero.svg')",
        }}
      >
         <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AppLoader>
              <Header />
              {children}
              <Footer />
            </AppLoader>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
