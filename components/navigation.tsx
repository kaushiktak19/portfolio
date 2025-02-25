"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, Code, Mail, Braces } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Work", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Skills", href: "#skills", icon: Braces },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-t">
      <div className="container flex items-center justify-around h-16">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 text-xs transition-colors hover:text-foreground/80",
              activeSection === item.href.slice(1) ? "text-foreground" : "text-muted-foreground",
            )}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector(item.href)?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

