import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HideComponent from "@/components/HideComponent";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "MsyGPT",
  description: "ChatGPT clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans h-full`}>
        <div className="flex items-start">
          <div className="fixed top-0 left-0 w-56 h-screen p-4">
            <Navbar />
          </div>
          <main className="h-full p-4 w-full lg:ml-44">{children}</main>
          <HideComponent />
        </div>
      </body>
    </html>
  );
}
