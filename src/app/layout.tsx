import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import { dark } from '@clerk/themes'
import { ptBR } from '@clerk/localizations'
import { Analytics } from '@vercel/analytics/next';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeVault",
  description: "CodeVault é um editor de código online onde os usuários podem criar, compartilhar e explorar códigos, além de interagir com a comunidade.",
  keywords: ["editor de código", "compartilhamento de código", "código online", "programação", "galeria de códigos", "CodeVault"],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "CodeVault",
    description: "Explore, compartilhe e crie códigos com outros desenvolvedores na CodeVault, um editor de código online com uma galeria de códigos feita por usuários.",
    url: "https://www.codevault.com.br",  // Atualize com a URL do seu site
    images: [
      {
        url: "/public/og-image.png", // URL de uma imagem de pré-visualização
        width: 1200,
        height: 630,
        alt: "CodeVault - Editor de Código Online",
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
    <ClerkProvider localization={ptBR} appearance={{ baseTheme: dark }}>
      <html lang="pt-br">
        <head>
          
        <link rel="icon" type="image/png" sizes="32x32" href="/fav.png" />

        {/* Meta Tags de SEO */}
          <meta name="description" content="CodeVault é um editor de código online onde os usuários podem criar, compartilhar e explorar códigos, além de interagir com a comunidade." />
          <meta name="keywords" content="editor de código, compartilhamento de código, código online, programação, galeria de códigos, CodeVault" />
          <meta name="author" content="Michael" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="CodeVault" />
          <meta property="og:description" content="Explore, compartilhe e crie códigos com outros desenvolvedores na CodeVault, um editor de código online com uma galeria de códigos feita por usuários." />
          <meta property="og:url" content="https://www.codevault.com.br" />
          <meta property="og:site_name" content="CodeVault" />
          <meta property="og:image" content="og-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {/* Outros metadados específicos do Twitter, caso necessário */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CodeVault" />
          <meta name="twitter:description" content="Explore, compartilhe e crie códigos com outros desenvolvedores na CodeVault." />
          <meta name="twitter:image" content="og-image.png" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
