import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExamplesGrid } from "@/components/examples-grid"
import { Badge } from "@/components/ui/badge"

export default function ExamplesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="secondary" className="w-fit mx-auto">
                Nos Réalisations
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Des Projets qui Témoignent de Notre Expertise
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Découvrez nos réalisations à travers le Cameroun. Chaque projet reflète notre engagement envers la
                qualité et l'innovation, de la modélisation 3D à la livraison finale.
              </p>
            </div>
          </div>
        </section>

        <ExamplesGrid />
      </main>
      <Footer />
    </div>
  )
}
