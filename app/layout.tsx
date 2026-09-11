import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

const siteUrl = "https://www.servyexpressagencia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Servy Express Agencia — Transporte privado y paquetes turísticos desde Sincelejo",
  description:
    "Agencia de viajes en Sincelejo, Sucre. Transporte privado puerta a puerta y paquetes turísticos todo incluido a Cartagena, Santa Marta y Medellín.",
  keywords: [
    "transporte privado Sincelejo",
    "agencia de viajes Sincelejo",
    "paquetes turísticos Cartagena",
    "transporte Sincelejo Cartagena",
    "paquetes Santa Marta",
    "tours Medellín Guatapé",
  ],
  openGraph: {
    title: "Servy Express Agencia — Transporte privado y paquetes turísticos",
    description:
      "Transporte privado puerta a puerta y paquetes turísticos todo incluido desde Sincelejo, Sucre.",
    url: siteUrl,
    siteName: "Servy Express Agencia",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Servy Express Agencia",
  description:
    "Transporte privado puerta a puerta y paquetes turísticos todo incluido desde Sincelejo, Sucre, hacia Cartagena, Santa Marta y Medellín.",
  areaServed: ["Cartagena", "Santa Marta", "Medellín", "Sincelejo"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sincelejo",
    addressRegion: "Sucre",
    addressCountry: "CO",
  },
  telephone: "+573127087404",
  email: "contabilidadservicorozal@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
