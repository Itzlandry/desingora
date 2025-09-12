import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Badge variant="secondary" className="w-fit mx-auto">
                Contact
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Parlons de Votre Projet</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Contactez-nous dès aujourd'hui pour un devis gratuit et une consultation personnalisée. Notre équipe
                vous accompagne de la conception 3D à la réalisation finale.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
