import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farcaster frame",
  description: "Test farcaster frame",

  openGraph: {
    title: "Everlink",
    description: "A brief description of your website or app.",
    url: "https://your-website.com", // replace with your site URL
    siteName: "Everlink",
    images: [
      {
        url: "https://i.ibb.co/qMCNtRYJ/calling-card-1.png", // replace with your image URL
        width: 1200,
        height: 630,
        alt: "Image description",
      },
    ],
    type: "website", // you can also use 'article' for articles or blog posts
  },

  // Twitter metadata (optional, if you want to customize for Twitter)
  twitter: {
    title: 'Devigital Systems',
    images: [
        {
            url: 'https://i.ibb.co/qMCNtRYJ/calling-card-1.png',
            width: 1200,
            height: 630,
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
