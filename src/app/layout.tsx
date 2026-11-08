import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravinduwanasinghe0524.github.io"),
  title: "Ravindu Wanasinghe | Full Stack Developer & Prompt Engineer",
  description:
    "Ravindu Wanasinghe builds full stack applications, designs prompts for language models, and explores AI and machine learning.",
  openGraph: {
    title: "Ravindu Wanasinghe | Full Stack Developer & Prompt Engineer",
    description:
      "Full stack development, prompt engineering, and practical AI and machine learning projects.",
    type: "website",
    images: [{ url: "/2.jpg", width: 1200, height: 1200, alt: "Ravindu Wanasinghe" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
