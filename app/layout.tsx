import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vrushali Rajesh Sarwan — Senior Facilitator & Corporate L&D Leader",
  description:
    "Portfolio of Vrushali Rajesh Sarwan — Senior Facilitator, Corporate L&D Delivery Leader, K-12 STEM Product Owner, and IISER Pune Alum.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Vrushali Rajesh Sarwan — Senior Facilitator & Corporate L&D Leader",
    description: "Corporate Learning Delivery, Business Analytics Facilitation & EdTech Product Leadership.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Roboto+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
