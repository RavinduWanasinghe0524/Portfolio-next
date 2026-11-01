import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravinduwanasinghe0524.github.io"),
  title: "Ravindu Wanasinghe | Full Stack & AI Developer",
  description: "Ravindu Wanasinghe builds full stack applications, AI and prompt engineering tools, and digital forensics projects.",
  openGraph: {
    title: "Ravindu Wanasinghe | Full Stack & AI Developer",
    description: "Full stack applications, AI and prompt engineering tools, and digital forensics projects.",
    type: "website",
    images: [{ url: "/2.jpg", width: 1200, height: 1200, alt: "Ravindu Wanasinghe" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
