"use client"

const contributors = [
  { name: "Edom Mulugeta", role: "Project Manager", initials: "EM" },
  { name: "Ekhlas Abdumelik", role: "UI/UX Designer", initials: "EA" },
  { name: "Ermiyas Ayele", role: "Backend Engineer", initials: "EA" },
  { name: "Bethel Solomon", role: "Lead Developer", initials: "BS" },
  { name: "Enkutatash Eshetu", role: "DevOps Engineer", initials: "EE" },
  { name: "Emnet Teshome", role: "Full Stack Dev", initials: "ET" },
]

export default function Team() {
  return (
    <section id="community" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contributors.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {member.initials}
                </div>
                <h4 className="font-semibold text-sm text-foreground truncate">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-border/50">
            <p className="text-muted-foreground mb-4">Want to join our team?</p>
            <a
              href="https://github.com/astemari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              Contribute on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
