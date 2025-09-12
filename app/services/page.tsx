import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesGrid } from "@/components/services-grid"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="secondary" className="w-fit mx-auto">
                Nos Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Des Solutions Complètes pour Tous Vos Projets BTP
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                De la conception 3D à la réalisation finale, nous maîtrisons toutes les étapes de vos projets de
                construction, finitions, forages et infrastructures au Cameroun.
              </p>
            </div>
          </div>
        </section>

        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
