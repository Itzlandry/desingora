import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Clock,
  DollarSign,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import type { Service } from "@/lib/types";
import * as vars from "@/lib/vars";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par votre service "${service.title}". Pouvez-vous me donner plus d'informations et un devis ?`
  );
  const whatsappUrl = `https://wa.me/${vars.phones[0].replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux services
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{service.icon}</span>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {vars.categoryLabels[service.category]}
                  </Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold text-balance">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground text-pretty">
                {service.description}
              </p>
            </div>

            {/* Service Image */}
            <div className="w-full h-64 lg:h-96 rounded-xl overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Description Détaillée</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Ce qui est Inclus</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Modeling Section */}
            {service.includes3DModeling && (
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Modélisation 3D Incluse
                  </CardTitle>
                  <CardDescription>
                    Visualisez votre projet avant sa réalisation grâce à notre
                    service de modélisation 3D
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Modèle 3D détaillé de votre projet
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Visualisation réaliste des matériaux et finitions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Modifications possibles avant le début des travaux
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Présentation client professionnelle
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
