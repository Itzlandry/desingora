import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import servicesData from "@/data/services.json";

export function ServicesPreview() {
  // Show first 3 services
  const featuredServices = servicesData.services.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Nos Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Des Solutions Complètes pour Vos Projets BTP
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            De la conception 3D à la réalisation, nous vous accompagnons à
            chaque étape de votre projet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.includes3DModeling && (
                    <Badge variant="outline" className="w-fit">
                      Modélisation 3D incluse
                    </Badge>
                  )}
                  <Button asChild className="w-full">
                    <Link href={`/services/${service.id}`}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              Voir Tous Nos Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
