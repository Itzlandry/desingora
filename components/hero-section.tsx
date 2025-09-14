import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Building2, Zap, Droplets } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Modélisation 3D Incluse
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Votre Partenaire BTP de{" "}
                <span className="text-primary">Confiance</span> au Cameroun
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                Spécialistes en finitions, forages, infrastructures et
                construction de maisons. Chaque projet commence par une
                modélisation 3D pour visualiser votre vision.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">Construction</p>
                  <p className="text-sm text-muted-foreground">
                    Maisons clé en main
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card">
                <Droplets className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">Forage</p>
                  <p className="text-sm text-muted-foreground">
                    Puits d'eau potable
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">Infrastructure</p>
                  <p className="text-sm text-muted-foreground">
                    Rigoles & poteaux
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Demander un Devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Nos Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">
                  Projets Réalisés
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">
                  Années d'Expérience
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">
                  Clients Satisfaits
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/modern-construction-site-with-3d-modeling.jpg"
                alt="Chantier de construction moderne avec modélisation 3D"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Modélisation 3D</p>
                  <p className="text-sm text-muted-foreground">
                    Visualisez avant de construire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
