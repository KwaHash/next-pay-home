import type { Metadata } from "next";
import NavBar from "@/components/organisms/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayHome",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
