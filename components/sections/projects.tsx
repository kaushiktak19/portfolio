"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

const allProjects = [
  {
    title: "Gitsby",
    description: "Track GitHub commits, view AI-generated summaries, and collaborate with team members",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC", "Langchain", "Gemini"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DocConne",
    description: "Healthcare platform connecting patients and doctors with real-time scheduling",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Github Actions"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "GeoVisi",
    description: "Dynamic US map interface with real-time population density metrics",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Docker", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Gits",
    description: "Track GitHub commits, view AI-generated summaries, and collaborate with team members",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC", "Langchain", "Gemini"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DocConnect",
    description: "Healthcare platform connecting patients and doctors with real-time scheduling",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Github Actions"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "GeoVision",
    description: "Dynamic US map interface with real-time population density metrics",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Docker", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
  },
  // Add more projects here
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3)
  const hasMoreProjects = allProjects.length > 3

  return (
    <section id="projects" className="py-10 md:py-14">
      <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-50/50 via-white to-white transition-all duration-300 hover:shadow-lg dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Some of my recent work</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <Card
                key={index}
                className="group/card overflow-hidden border-none bg-gradient-to-br from-blue-50/30 to-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:from-slate-800/30 dark:to-slate-900"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    fill
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn relative overflow-hidden transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-blue-800/20" />
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn relative overflow-hidden transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-blue-800/20" />
                        <Github className="mr-2 h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {hasMoreProjects && (
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="group relative overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-blue-800/20" />
                <span className="relative flex items-center gap-2">
                  {showAll ? (
                    <>
                      Show Less
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show More
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </span>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

