"use client"

import { CheckCircle } from "lucide-react"

export default function WhyOpenSource() {
  const benefits = [
    "Community-driven development with transparency",
    "Students gain real-world open-source experience",
    "Anyone can contribute and improve the tools",
    "Security through collaborative code review",
    "No vendor lock-in—full control and ownership",
  ]

  return (
    <section className="w-full py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Why Open Source?</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Open-source software is the foundation of modern technology. We believe education tools should be
                transparent, accessible, and community-driven. By open-sourcing our work, we enable educators worldwide
                to benefit from our tools while contributing back to improve them.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
