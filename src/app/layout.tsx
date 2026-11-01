import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravinduwanasinghe0524.github.io"),
  title: "Ravindu Wanasinghe | Full Stack & AI Developer",
  description:
    "Ravindu Wanasinghe builds full stack applications, AI and prompt engineering tools, and digital forensics projects.",
  openGraph: {
    title: "Ravindu Wanasinghe | Full Stack & AI Developer",
    description:
      "Full stack applications, AI and prompt engineering tools, and digital forensics projects.",
    type: "website",
    images: [{ url: "/2.jpg", width: 1200, height: 1200, alt: "Ravindu Wanasinghe" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
