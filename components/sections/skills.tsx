"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  "Programming Languages": [
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "Go",
    "Python",
    "Java"
  ],
  "Frontend": [
    "React.js",
    "Next.js",
    "Electron.js",
    "ShadCN",
    "Tailwind CSS",
    "MUI"
  ],
  "Backend": [
    "Node.js",
    "Express.js",
    "Socket.io",
    "WebRTC",
    "tRPC",
    "RESTful APIs",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "MySQL",
    "Firebase",
    "Prisma",
    "Langchain",
    "Gemini API",
  ],
  "DevOps & Tools": [
    "Docker",
    "Kubernetes",
    "AWS",
    "GitHub Actions",
    "Git",
    "GitHub",
  ]
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-10 md:py-14">
      <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-50/50 via-white to-white transition-all duration-300 hover:shadow-lg dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>Technologies and tools I work with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3 rounded-lg transition-all duration-300 hover:translate-x-1">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}