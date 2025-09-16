"use client";

import { useState } from "react";
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
  MapPin,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  Play,
  Phone,
  Mail,
} from "lucide-react";
import type { Example } from "@/lib/types";
import * as vars from "@/lib/vars";
import servicesData from "@/data/services.json";

interface ExampleDetailProps {
  example: Example;
}

export function ExampleDetail({ example }: ExampleDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const service = servicesData.services.find(
    (s) => s.id === example.serviceUsed
  );

  const whatsappMessage = encodeURIComponent(
    `Bonjour, j'ai vu votre réalisation "${example.title}" et je suis intéressé(e) par un projet similaire. Pouvez-vous me donner plus d'informations ?`
  );
  const whatsappUrl = `https://wa.me/${vars.phones[0].replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  const getCategoryColor = (category: string) => {
    return (
      vars.categoryColors[category as keyof typeof vars.categoryColors] ||
      "bg-gray-100 text-gray-800"
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % example.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + example.images.length) % example.images.length
    );
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/exemples">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux réalisations
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <Badge className={getCategoryColor(example.category)}>
                {vars.categoryLabels[example.category]}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-balance">
                {example.title}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                {example.description}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden">
                <img
                  src={example.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${example.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {example.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Image Thumbnails */}
              {example.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {example.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Videos */}
            {example.videos && example.videos.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Vidéos du Projet</h2>
                <div className="grid gap-4">
                  {example.videos.map((video, index) => (
                    <div
                      key={index}
                      className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden bg-muted"
                    >
                      <video
                        controls
                        className="w-full h-full object-cover"
                        src={video}
                      />
                      <p className="absolute top-4 left-4 text-white bg-black/50 px-2 py-1 rounded text-sm">
                        Vidéo {index + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Détails du Projet</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Informations Générales</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Localisation:
                      </span>
                      <span className="font-medium">{example.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Achevé en:
                      </span>
                      <span className="font-medium">
                        {new Date(example.completionDate).toLocaleDateString(
                          "fr-FR",
                          {
                            year: "numeric",
                            month: "long",
                          }
                        )}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Used */}
            {service && (
              <Card>
                <CardHeader>
                  <CardTitle>Service Utilisé</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <p className="font-semibold">{service.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent"
                  >
                    <Link href={`/services/${service.id}`}>
                      Voir ce Service
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Contact Card */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Projet Similaire ?</CardTitle>
                <CardDescription>
                  Contactez-nous pour discuter de votre projet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Discuter sur WhatsApp
                  </a>
                </Button>

                <Separator />

                <div className="space-y-3 text-sm">
                  {vars.phones.map((phone, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{phone}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{vars.email}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  asChild
                  className="w-full bg-transparent"
                >
                  <Link href="/contact">Demander un Devis</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Other Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Autres Réalisations</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  asChild
                  className="w-full bg-transparent"
                >
                  <Link href="/exemples">Voir Toutes Nos Réalisations</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
