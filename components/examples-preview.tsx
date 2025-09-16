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
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import examplesData from "@/data/examples.json";
import { categoryColors, categoryLabels } from "@/lib/vars";

export function ExamplesPreview() {
  // Show first 3 examples
  const featuredExamples = examplesData.examples.slice(0, 3);

  const getCategoryLabel = (category: string) => {
    return categoryLabels[category as keyof typeof categoryLabels] || category;
  };

  const getCategoryColor = (category: string) => {
    return (
      categoryColors[category as keyof typeof categoryColors] ||
      "bg-gray-100 text-gray-800"
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Nos Réalisations
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Des Projets qui Font Notre Fierté
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes à travers le
            Cameroun
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredExamples.map((example) => (
            <Card
              key={example.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={example.images[0] || "/placeholder.svg"}
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge
                  className={`absolute top-4 left-4 ${getCategoryColor(
                    example.category
                  )}`}
                >
                  {getCategoryLabel(example.category)}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{example.title}</CardTitle>
                <CardDescription className="text-base">
                  {example.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {example.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(example.completionDate).toLocaleDateString(
                      "fr-FR",
                      {
                        year: "numeric",
                        month: "long",
                      }
                    )}
                  </div>
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

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/exemples">
              Voir Toutes Nos Réalisations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
