import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { ExamplesPreview } from "@/components/examples-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesPreview />
        <ExamplesPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
