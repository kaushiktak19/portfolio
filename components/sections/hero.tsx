import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-6">
      <div className="group flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <h1 className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent transition-colors duration-300 hover:from-blue-600 hover:to-blue-400 dark:hover:from-blue-400 dark:hover:to-blue-600 sm:text-left sm:text-4xl md:text-5xl">
          Kaushik Tak
        </h1>
      </div>
      <div className="overflow-hidden px-4 sm:px-0">
        <p className="text-center text-base font-medium tracking-wide text-muted-foreground sm:text-lg">
          <span className="inline-block animate-slide-up whitespace-nowrap">Fullstack Developer</span>
          <span className="mx-2 inline-block animate-slide-up [--slide-delay:100ms] text-muted-foreground/40">|</span>
          <span className="inline-block animate-slide-up [--slide-delay:200ms] whitespace-nowrap">Problem Solver</span>
          <span className="mx-2 inline-block animate-slide-up [--slide-delay:300ms] text-muted-foreground/40">|</span>
          <span className="inline-block animate-slide-up [--slide-delay:400ms] whitespace-nowrap">Programmer</span>
        </p>
      </div>
      <Button
        variant="outline"
        className="group relative overflow-hidden rounded-full bg-background px-4 py-3 transition-all duration-300 hover:scale-105 hover:shadow-md"
        asChild
      >
        <a
          href="https://drive.google.com/file/d/1QUV-FzKDPyc5Vbl2GHCkrEW-caKceUem/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-blue-800/20" />
          <Download className="mr-1 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          <span className="relative">Resume</span>
        </a>
      </Button>
    </div>
  )
}

