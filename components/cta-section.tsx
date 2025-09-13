import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import * as vars from "@/lib/vars";

export function CTASection() {
  const whatsappUrl = `https://wa.me/${vars.phones[0].replace("+", "")}`;

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <CardContent className="relative p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  Prêt à Démarrer Votre Projet ?
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Contactez-nous dès aujourd'hui pour un devis gratuit et une
                  consultation personnalisée. Nous vous accompagnons de la
                  modélisation 3D à la livraison finale.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Devis Gratuit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Appelez-nous</p>
                      <p className="text-sm text-muted-foreground">
                        {vars.phones[0]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Écrivez-nous</p>
                      <p className="text-sm text-muted-foreground">
                        {vars.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">
                        Réponse rapide garantie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
