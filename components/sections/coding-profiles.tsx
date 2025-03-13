"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Code2 } from "lucide-react"

const profiles = [
  {
    platform: "LeetCode",
    username: "@kaushikt19",
    url: "https://leetcode.com/u/kaushikt19/",
    icon: "/leetcode.png", // Adjust path based on where you place your images
  },
  {
    platform: "CodeForces",
    username: "@kaushikTak",
    url: "https://codeforces.com/profile/kaushikTak",
    icon: "/codeforces.png",
  },
  {
    platform: "CodeChef",
    username: "@kaushiktak19",
    url: "https://www.codechef.com/users/kaushiktak19",
    icon: "/codechef.png",
  },
]

export function CodingProfilesSection() {
  return (
    <section id="coding-profiles" className="py-10 md:py-14">
      <Card className="group overflow-hidden border-none bg-gradient-to-br from-blue-50/50 via-white to-white transition-all duration-300 hover:shadow-lg dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
        <CardHeader>
          <CardTitle>Coding Profiles</CardTitle>
          <CardDescription>Check out my activity on coding platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {profiles.map((profile) => (
              <Card
                key={profile.platform}
                className="group/card overflow-hidden border-none bg-gradient-to-br from-blue-50/30 to-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:from-slate-800/30 dark:to-slate-900"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={profile.icon}
                      alt={`${profile.platform} logo`}
                      className="mb-4 h-8 w-8 object-contain transition-all duration-300 group-hover/card:scale-110"
                    />
                    <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400">
                      {profile.platform}
                    </h3>
                    <Button
                      variant="outline"
                      className="group/btn relative overflow-hidden transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                      asChild
                    >
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 dark:from-blue-900/20 dark:to-blue-800/20" />
                        <span className="relative">View Profile</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}