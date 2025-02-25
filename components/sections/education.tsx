import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, School } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    institution: "Madhav Institute of Technology and Science, Gwalior (M.P.)",
    period: "2022-2026",
    grade: "7.77 CGPA",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-10 md:py-14">
      <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-50/50 via-white to-white transition-all duration-300 hover:shadow-lg dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription>My academic background</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative space-y-3 rounded-lg bg-gradient-to-br from-blue-50/30 to-transparent p-4 transition-all duration-300 hover:translate-x-1 dark:from-blue-900/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-medium leading-snug transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <School className="h-4 w-4" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <div className="space-y-1 text-right text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="font-medium text-blue-600 dark:text-blue-400">{edu.grade}</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

