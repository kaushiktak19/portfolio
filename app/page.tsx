import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { EducationSection } from "@/components/sections/education"
import { CodingProfilesSection } from "@/components/sections/coding-profiles"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <div className="container space-y-2 pb-20 pt-2">
      <section id="home" className="animate-fade-in">
        <HeroSection />
      </section>
      <section id="about" className="animate-fade-in-up [--slide-delay:200ms]">
        <AboutSection />
      </section>
      <section id="experience" className="animate-fade-in-up [--slide-delay:300ms]">
        <ExperienceSection />
      </section>
      <section id="projects" className="animate-fade-in-up [--slide-delay:400ms]">
        <ProjectsSection />
      </section>
      <section id="skills" className="animate-fade-in-up [--slide-delay:500ms]">
        <SkillsSection />
      </section>
      <section id="education" className="animate-fade-in-up [--slide-delay:600ms]">
        <EducationSection />
      </section>
      <section id="coding-profiles" className="animate-fade-in-u[--slide-delay:700ms]">
        <CodingProfilesSection />
      </section>
      <section id="coding-profiles" className="animate-fade-in-up [--slide-delay:800ms]">
        <ContactSection />
      </section>
    </div>
  )
}

