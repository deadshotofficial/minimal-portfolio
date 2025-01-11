import { Github, Mail, Linkedin, Twitter, Calendar, Building2, GraduationCap, Code2, Instagram, Briefcase } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"

export default function Portfolio() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col min-h-screen">
            <header className="flex items-center h-16 md:h-20">
              <nav className="flex-1 flex items-center justify-end gap-4 sm:gap-6">
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#about"
                >
                  About
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#experience"
                >
                  Experience
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#skills"
                >
                  Skills
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#contact"
                >
                  Contact
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="https://exynos.vercel.app"
                >
                  Discord-Bot
                </Link>
                <ThemeToggle />
              </nav>
            </header>
            <main className="flex-1">
              <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 md:py-20">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
                  <Image
                    alt="Profile picture"
                    className="object-cover"
                    fill
                    src="https://media.discordapp.net/attachments/1201570570765086780/1327591481837355068/deadshot-pfp.jpg?ex=67839f6a&is=67824dea&hm=a761fcd47ea6337e25927a9b4a3bf9ecf170caf53bf2e6fe268dd60d8847e786&=&format=webp&width=741&height=741"
                    priority
                  />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    DeadShot 👋
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    MERN Stack Developer 👨‍💻
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/deadshotofficial">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://linkedin.com/">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://twitter.com/deadshot3r">
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://twitter.com/deadshotgraphics">
                        <Instagram className="w-5 h-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>

              <section id="about" className="py-12 md:py-20">
                <div className="max-w-[700px] mx-auto space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <Code2 className="w-6 h-6" />
                    About Me
                  </h2>
                  <p className="text-muted-foreground">
                    Hi! I'm DeadShot, an 18yo learner. I'm an upcoming MERN (or maybe full)
                    stack developer with a passion for building beautiful,
                    functional, and user-friendly websites and applications. Currently learning Node.js, Next.js,
                    React, TypeScript and Kotlin. 🚀
                  </p>
                </div>
              </section>

              <section id="experience" className="py-12 md:py-20">
                <div className="max-w-[700px] mx-auto space-y-8">
                  <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <Briefcase className="w-6 h-6" />
                    Work Experience
                  </h2>
                  <div className="space-y-6">
                    <Card className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">
                            Learning MERN/Full Stack Developer
                          </h3>
                          <p className="text-muted-foreground flex items-center gap-2 mt-1">
                            <Building2 className="w-4 h-4" />
                            Self Learning and R&D Phase.
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          2020 - Present
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                        <li>
                          Trying to learn new things and implement them while studying in college.
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </section>

              <section id="education" className="py-12 md:py-20">
                <div className="max-w-[700px] mx-auto space-y-8">
                  <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <GraduationCap className="w-6 h-6" />
                    Education
                  </h2>
                  <Card className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">
                          BTech in Computer Science &
                          Engineering
                        </h3>
                        <p className="text-muted-foreground flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4" />
                          An Engineering College in Delhi NCR.
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        2024 - 2028
                      </p>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Currently pursuing a degree in Computer Science with a
                      focus on software development and computer systems.
                    </p>
                  </Card>
                </div>
              </section>

              <section id="skills" className="py-12 md:py-20">
                <div className="max-w-[700px] mx-auto space-y-8">
                  <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <Code2 className="w-6 h-6" />
                    Skills
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2">Frontend 🎨</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>React & Next.js</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>C/C++</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2">Backend 🔧</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2">Tools 🛠️</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Ubuntu</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </section>

              <section id="contact" className="py-12 md:py-20">
                <div className="max-w-[700px] mx-auto space-y-4 text-center">
                  <h2 className="text-2xl font-bold tracking-tighter">
                    Get in Touch ✉️
                  </h2>
                  <p className="text-muted-foreground">
                    I'm always open to new opportunities and collaborations.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button asChild>
                      <Link href="mailto:deadshot3r@pm.me">
                        Contact Me
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/resume.pdf">View Resume</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </main>
            <footer className="flex items-center justify-center h-16 md:h-20 border-t">
              <p className="text-sm text-muted-foreground text-center">
                © 2025 DeadShot. All rights reserved. 💻
              </p>
            </footer>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}