"use client"

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">About Astemari</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-lg">Student-Led</h3>
              <p className="text-muted-foreground">
                Built by students, for students and educators. We understand the challenges of modern education.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl">🔓</span>
              </div>
              <h3 className="font-semibold text-lg">Open Source</h3>
              <p className="text-muted-foreground">
                Transparent development. Everyone can contribute, learn, and improve our tools together.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg">Modern Tech</h3>
              <p className="text-muted-foreground">
                Built with cutting-edge technology to create fast, intuitive, and beautiful education tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
