import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Clock, DollarSign } from "lucide-react"
import servicesData from "@/data/services.json"

export function ServicesGrid() {
  const servicesByCategory = servicesData.services.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = []
      }
      acc[service.category].push(service)
      return acc
    },
    {} as Record<string, typeof servicesData.services>,
  )

  const categoryLabels = {
    finitions: "Finitions",
    forage: "Forage",
    infrastructure: "Infrastructure",
    construction: "Construction",
  }

  const categoryDescriptions = {
    finitions: "Embellissement et protection de vos constructions",
    forage: "Solutions d'approvisionnement en eau",
    infrastructure: "Aménagements urbains et ruraux",
    construction: "Construction complète de bâtiments",
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h2>
              <p className="text-muted-foreground">
                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
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
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Features Preview */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Inclus :</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-primary text-xs">+{service.features.length - 3} autres...</li>
                          )}
                        </ul>
                      </div>

                      {/* Price and Duration */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {service.price && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-muted-foreground">Prix</p>
                              <p className="font-semibold">{service.price}</p>
                            </div>
                          </div>
                        )}
                        {service.duration && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-muted-foreground">Durée</p>
                              <p className="font-semibold">{service.duration}</p>
                            </div>
                          </div>
                        )}
                      </div>

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
          </div>
        ))}
      </div>
    </section>
  )
}
