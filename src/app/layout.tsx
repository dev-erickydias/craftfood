import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "CraftFood - Culinária Oriental Artesanal",
  description:
    "Restaurante de culinária japonesa com receitas tradicionais e ingredientes frescos selecionados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
