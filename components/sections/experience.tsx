import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  return (
    <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-50/50 via-white to-white transition-all duration-300 hover:shadow-lg dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l border-blue-200/50 pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-x-[5px] before:rounded-full before:bg-blue-200 before:transition-all before:duration-300 group-hover:before:bg-blue-300 dark:border-blue-800/50 dark:before:bg-blue-800 dark:group-hover:before:bg-blue-700">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <h3 className="font-medium leading-snug transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Fullstack Developer Intern
                </h3>
                <p className="text-sm text-muted-foreground">Matlync</p>
              </div>
              <div className="space-y-1 text-right text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Jul 2024 - Sep 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Remote</span>
                </div>
              </div>
            </div>
            <ul className="list-inside space-y-2 text-sm text-muted-foreground">
              <li className="relative list-none pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-blue-200 before:transition-all before:duration-300 group-hover:before:bg-blue-300 dark:before:bg-blue-800 dark:group-hover:before:bg-blue-700">
                Contributed to Onflo, a B2B SaaS desktop platform using Electron and React, implementing new invoice
                generation features
              </li>
              <li className="relative list-none pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-blue-200 before:transition-all before:duration-300 group-hover:before:bg-blue-300 dark:before:bg-blue-800 dark:group-hover:before:bg-blue-700">
                Revamped UI and added backup functionality with PouchDB to Firebase Firestore sync
              </li>
              <li className="relative list-none pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-blue-200 before:transition-all before:duration-300 group-hover:before:bg-blue-300 dark:before:bg-blue-800 dark:group-hover:before:bg-blue-700">
                Optimized backend services with Node.js and Express.js, improving API performance
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Electron", "React", "Node.js", "Express.js", "PouchDB", "Firebase"].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

