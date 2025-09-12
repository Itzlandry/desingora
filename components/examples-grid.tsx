"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Filter, Play } from "lucide-react"
import examplesData from "@/data/examples.json"

export function ExamplesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { value: "all", label: "Tous les projets" },
    { value: "construction", label: "Construction" },
    { value: "forage", label: "Forage" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "finitions", label: "Finitions" },
  ]

  const filteredExamples =
    selectedCategory === "all"
      ? examplesData.examples
      : examplesData.examples.filter((example) => example.category === selectedCategory)

  const getCategoryLabel = (category: string) => {
    const labels = {
      construction: "Construction",
      forage: "Forage",
      infrastructure: "Infrastructure",
      finitions: "Finitions",
    }
    return labels[category as keyof typeof labels] || category
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      construction: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      forage: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      infrastructure: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      finitions: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          <Filter className="h-5 w-5 text-muted-foreground mr-2" />
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExamples.map((example) => (
            <Card key={example.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={example.images[0] || "/placeholder.svg"}
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(example.category)}`}>
                  {getCategoryLabel(example.category)}
                </Badge>
                {example.videos && example.videos.length > 0 && (
                  <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{example.title}</CardTitle>
                <CardDescription className="text-base">{example.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Location and Date */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {example.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(example.completionDate).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-2">
                    {example.specifications.surface && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Surface: </span>
                        <span className="font-medium">{example.specifications.surface}</span>
                      </div>
                    )}
                    {example.specifications.duration && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Durée: </span>
                        <span className="font-medium">{example.specifications.duration}</span>
                      </div>
                    )}
                    {example.specifications.budget && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Budget: </span>
                        <span className="font-semibold text-primary">{example.specifications.budget}</span>
                      </div>
                    )}
                  </div>

                  {/* Client */}
                  {example.client && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Client: </span>
                      <span className="font-medium">{example.client}</span>
                    </div>
                  )}

                  <Button asChild className="w-full">
                    <Link href={`/exemples/${example.id}`}>
                      Voir le Projet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredExamples.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun projet trouvé pour cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  )
}
