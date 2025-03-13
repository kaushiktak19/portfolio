import { Github, Linkedin, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kaushikt19",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kaushik-tak-435388244/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:kaushiktak19@gmail.com",
    icon: Mail,
  },
  {
    name: "X",
    url: "https://x.com/Kaushikt19",
    icon: X,
  },
]

export function Socials() {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <Button className="group/card overflow-hidden border-none bg-gradient-to-br from-blue-50/30 to-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:from-slate-800/30 dark:to-slate-900" key={link.name} variant="outline" size="icon" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
          <link.icon className="h-5 w-5 transition-all duration-300 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400"/>
          </a>
        </Button>
      ))}
    </div>
  )
}

