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
    description: " A platform for tracking GitHub commits, viewing AI-generated summaries, querying code files, transcribing meetings, and enabling team collaboration",
    image: "/gitsby.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC", "Langchain", "Gemini", "ShadCN"],
    liveUrl: "https://gitsby-psi.vercel.app/",
    githubUrl: "https://github.com/kaushiktak19/gitsby",
  },
  {
    title: "linkDrop",
    description: " A secure, private P2P file-sharing system with WebRTC for direct browser-to-browser transfers, ensuring privacy without cloud storage",
    image: "/linkdrop.png",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Redis", "WebRTC", "Socket io", "Docker", "AWS EC2"],
    liveUrl: "https://link-drop.vercel.app/",
    githubUrl: "https://github.com/kaushiktak19/linkDrop",
  },
  {
    title: "DocConnect",
    description: "Healthcare platform for patient-doctor connection, profile management, and seamless scheduling with real-time availability and notifications",
    image: "/docconnect.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AWS EC2", "AWS S3", "Github Actions", "NGINX"],
    liveUrl: "https://d1cmpxnuvpmekj.cloudfront.net/",
    githubUrl: "https://github.com/kaushiktak19/docconnect",
  },
  {
    title: "GeoVision",
    description: "Dynamic US map interface with real-time population density metrics",
    image: "/geovision.png",
    technologies: ["React", "TypeScript", "Docker", "Kubernetes"],
    liveUrl: "https://geolocation-6a036.web.app/",
    githubUrl: "https://github.com/kaushiktak19/geovision",
  },
  {
    title: "Apartment Management System",
    description: "A full-stack system for managing apartments, rooms, and items with CRUD functionality in a nested hierarchy",
    image: "/ams.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveUrl: "https://apartments-frontend.onrender.com/",
    githubUrl: "https://github.com/kaushiktak19/ams",
  },
  {
    title: "Zara Product Info Extractor",
    description: "A Chrome extension that extracts product details (name, price, image) from Zara pages and fetches similar products from H&M for easy comparison",
    image: "/zara-extension.png",
    technologies: ["JavaScript", "Chrome Extension", "HTML/CSS"],
    liveUrl: "https://drive.google.com/file/d/1zjTqiCYqwNZH5x5W5q8-uDmipXhuIx8Z/view",
    githubUrl: "https://github.com/kaushiktak19/extension-zara",
  },
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

