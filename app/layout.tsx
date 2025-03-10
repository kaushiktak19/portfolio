import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { Socials } from "@/components/socials"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kaushik Tak",
  description: "My professional portfolio showcasing my work and experience"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
      <link rel="icon" href="./favicon.ico" sizes="any" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <header className="container flex items-center justify-between py-4">
              <Socials />
              <ThemeToggle />
            </header>
            <main className="flex-1">{children}</main>
            <Navigation />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

