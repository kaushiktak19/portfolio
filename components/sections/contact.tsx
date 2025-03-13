import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, X } from "lucide-react"

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
    name: "X",
    url: "https://x.com/Kaushikt19",
    icon: X,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-10 md:py-14">
      <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-50/50 via-white to-white transition-all duration-300 hover:shadow-lg dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Connect with me on social media or send me an email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button className="group/card overflow-hidden border-none bg-gradient-to-br from-blue-50/30 to-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:from-slate-800/30 dark:to-slate-900" key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5 transition-all duration-300 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400"/>
                  </a>
                </Button>
              ))}
            </div>
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">Prefer email? Feel free to reach out directly:</p>
              <Button className="group/card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"  asChild>
                <a href="mailto:kaushiktak19@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  kaushiktak19@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

