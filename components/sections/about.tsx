import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Brain, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-14">
      <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-50/50 via-white to-white transition-all duration-300 hover:shadow-lg dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
        <CardHeader>
          <CardTitle>What I can do{` ...`}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-1">
          <div className="space-y-3">
            <div className="transition-transform duration-300 hover:translate-x-2 hover:shadow-md hover:bg-blue-50/50 dark:hover:bg-slate-800/50 rounded-lg p-2">
              <div className="flex items-start gap-4">
                <Code2 className="mt-1 h-7 w-7 text-primary/80" />
                <p className="flex-grow text-m text-muted-foreground">
                  I can develop web applications, including frontend and backend, deploy them to the cloud, and set up CI/CD pipelines. What else? Well, I can learn and adapt to new technologies. How do I know that? Well, that's the job, isn't it? So, yeah.
                </p>
              </div>
            </div>
            <div className="transition-transform duration-300 hover:translate-x-2 hover:shadow-md hover:bg-blue-50/50 dark:hover:bg-slate-800/50 rounded-lg p-2">
              <div className="flex items-start gap-4">
                <Brain className="mt-1 h-5 w-5 text-primary/80" />
                <p className="flex-grow text-m text-muted-foreground">
                  I also try my hand at competitive programming because you've got to keep your brain sharp for problem-solving.
                </p>
              </div>
            </div>
            <div className="transition-transform duration-300 hover:translate-x-2 hover:shadow-md hover:bg-blue-50/50 dark:hover:bg-slate-800/50 rounded-lg p-2">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-1 h-5 w-5 text-primary/80" />
                <p className="flex-grow text-m text-muted-foreground">
                  Oh, and one more thing, lately, I've been experimenting with integrating powerful AI models and their APIs into web apps to create some cool generative AI experiences.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

