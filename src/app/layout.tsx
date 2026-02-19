import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
// import { I18nextProvider } from "react-i18next";
// import i18n from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3D Animation131521 - AI Powered 3D Animation",
  description: "AI দিয়ে ছবি/টেক্সট থেকে 3D অ্যানিমেশন তৈরি করুন",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
          {/* <I18nextProvider i18n={i18n}> */}
            <header className="bg-background/80 backdrop-blur-md border-b border-blue-900/50 sticky top-0 z-50 py-4">
              <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">3D Animation131521</div>
                <nav className="space-x-6">
                  <a href="/" className="hover:text-primary">হোম</a>
                  <a href="/features" className="hover:text-primary">ফিচারস</a>
                  <a href="/pricing" className="hover:text-primary">প্রাইসিং</a>
                  <a href="/dashboard" className="hover:text-primary">ড্যাশবোর্ড</a>
                </nav>
              </div>
            </header>

            <main className="flex-grow">{children}</main>

            <footer className="bg-background/90 border-t border-blue-900/50 py-6 text-center text-gray-400">
              © {new Date().getFullYear()} 3D Animation131521. সর্বস্বত্ব সংরক্ষিত।
            </footer>
          {/* </I18nextProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}