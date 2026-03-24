import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerardy — Trail Cam Photos, Simplified",
  description:
    "Upload your trail cam photos, let AI find the bucks, and share with your hunting group in one tap. Works with any camera.",
  openGraph: {
    title: "Gerardy — Trail Cam Photos, Simplified",
    description:
      "Upload. AI sorts. Share with one tap. Works with any trail camera.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bark text-sand antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
