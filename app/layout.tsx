import type { Metadata } from "next";
import "./globals.css";
import { fraunces } from "@/app/ui/fonts";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "Samyamta Sen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.className} primary-bg`}>
        <header className="mb-5">
          <Navbar />
        </header>
        <main className="px-16 pt-16 pb-8">{children}</main>
      </body>
    </html>
  );
}
