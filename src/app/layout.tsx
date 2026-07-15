import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravindu Wanasinghe • Full Stack Developer",
  description:
    "Ravindu Wanasinghe – Information Systems student at Sabaragamuwa University, passionate about Software Architecture, Web Technologies & Digital Forensics.",
  metadataBase: new URL("https://ravinduwanasinghe0524.github.io"),
  openGraph: {
    title: "Ravindu Wanasinghe • Full Stack Developer",
    description:
      "Full Stack Developer | TypeScript & Next.js | Information Systems Student at Sabaragamuwa University",
    type: "website",
    url: "https://ravinduwanasinghe0524.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
