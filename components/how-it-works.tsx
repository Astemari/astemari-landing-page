"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Teachers Create Classes",
      description: "Set up your classes and organize students into groups with custom settings.",
    },
    {
      number: "02",
      title: "Manage Students & Attendance",
      description: "Track attendance easily and maintain detailed student records automatically.",
    },
    {
      number: "03",
      title: "Track Assignments & Performance",
      description: "Create assignments, collect submissions, grade work, and monitor progress.",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-8 text-3xl text-primary/30">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
