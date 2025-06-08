import type { Metadata } from "next";
import "./globals.css";
import { fraunces } from "@/app/ui/font";
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
        <main className="md:px-0 px-4 pt-16 pb-4">{children}</main>
      </body>
    </html>
  );
}
