import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut,  SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIET college Management Dashboard",
  description: "Next.js College Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <header className="flex justify-end items-end w-screen pr-4 mt-2">
        <div>
        <SignedOut>
        </SignedOut>
        <SignedIn>
          <UserButton showName/>
        </SignedIn>
        </div>
      </header>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}