// app/layout.tsx
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AppLoader } from "@/components/ui/Loading/loader";

export const metadata: Metadata = {
  title: "Portfólio | Catarina Guimarães",
  description: "Portfólio pessoal de Catarina Guimarães",
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
      <body className={`${nunito.className} min-h-screen bg-cover bg-center bg-no-repeat`}> 
          <AppLoader>
            {children}
          </AppLoader>
      </body>
    </html>
  );
}