"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedProject from "@/components/featured-project"
import HowItWorks from "@/components/how-it-works"
import WhyOpenSource from "@/components/why-open-source"
import Team from "@/components/team"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <Hero />
      <About />
      <FeaturedProject />
      <HowItWorks />
      <WhyOpenSource />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
