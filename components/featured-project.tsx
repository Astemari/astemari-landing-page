"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, FileText } from "lucide-react"

export default function FeaturedProject() {
  const features = [
    { icon: Users, label: "Class Management", description: "Organize and manage student groups" },
    { icon: Clock, label: "Attendance Tracking", description: "Monitor student attendance seamlessly" },
    { icon: FileText, label: "Assignments", description: "Create, distribute, and grade assignments" },
    { icon: BookOpen, label: "Reports & Exports", description: "Generate comprehensive performance reports" },
  ]

  return (
    <section id="project" className="w-full py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Project</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2 text-primary">Teacher&apos;s Portal</h3>
                <p className="text-muted-foreground text-lg">
                  An open-source education management system designed to simplify classroom operations.
                </p>
              </div>

              <p className="text-foreground leading-relaxed">
                Teacher&apos;s Portal provides educators with a comprehensive suite of tools to manage their classes
                efficiently. From student authentication to detailed performance tracking, everything you need is in one
                place.
              </p>

              <div className="pt-4">
                <a href="https://github.com/astemari/teachers-portal" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                    View on GitHub
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-md"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{feature.label}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
