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
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import servicesData from "@/data/services.json";
import { categoryDescriptions, categoryLabels } from "@/lib/vars";

export function ServicesGrid() {
  const servicesByCategory = servicesData.services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof servicesData.services>);

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
                {
                  categoryDescriptions[
                    category as keyof typeof categoryDescriptions
                  ]
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
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
          </div>
        ))}
      </div>
    </section>
  );
}
