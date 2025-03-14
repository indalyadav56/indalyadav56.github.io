import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indal Kumar | Software Engineer",
  description: "Indal Kumar is a software engineer with 5+ years of experience in building web applications using React, Next.js, Python, and more.",
  keywords: ["Indal Kumar", "Software Engineer", "Web Developer", "React", "Next.js", "Python", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <TooltipProvider>
              <NavBar />
              <div className="flex-grow">{children}</div>
              <Footer />
            </TooltipProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
