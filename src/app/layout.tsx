import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://warrant.example"),
  title: {
    default: "Warrant | Compliance you can warrant.",
    template: "%s | Warrant",
  },
  description:
    "Warrant is a compliance-risk monitoring platform for real estate developers. It tracks every regulatory deadline, filing, and fund-handling rule on a project, and flags anything about to breach before it becomes a penalty.",
  keywords: [
    "real estate compliance",
    "escrow monitoring",
    "regulatory deadlines",
    "audit trail",
    "developer compliance",
  ],
  openGraph: {
    title: "Warrant | Compliance you can warrant.",
    description:
      "Track every regulatory deadline, filing, and fund-handling rule on an active project. Get alerted before a breach becomes a penalty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
