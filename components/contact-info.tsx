import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react"
import contactData from "@/data/contact.json"

export function ContactInfo() {
  const whatsappUrl = `https://wa.me/${contactData.whatsapp[0].replace("+", "")}`
  const whatsappUrl2 = `https://wa.me/${contactData.whatsapp[1].replace("+", "")}`

  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle>Nos Coordonnées</CardTitle>
          <CardDescription>Plusieurs moyens de nous contacter selon votre préférence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Adresse</p>
              <p className="text-muted-foreground text-sm">{contactData.address}</p>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold">Téléphones</p>
              {contactData.phones.map((phone, index) => (
                <div key={index} className="flex items-center gap-2">
                  <a href={`tel:${phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {phone}
                  </a>
                  <Badge variant="outline" className="text-xs">
                    Équipe {index + 1}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Email</p>
              <a
                href={`mailto:${contactData.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {contactData.email}
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <MessageCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="space-y-3">
              <p className="font-semibold">WhatsApp</p>
              <div className="space-y-2">
                <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {contactData.whatsapp[0]} - Équipe 1
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {contactData.whatsapp[1]} - Équipe 2
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Horaires d'Ouverture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Lundi - Vendredi</span>
            <span className="font-medium">7h00 - 18h00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Samedi</span>
            <span className="font-medium">8h00 - 16h00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Dimanche</span>
            <span className="font-medium">Urgences uniquement</span>
          </div>
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Urgences 24h/7j</strong> - Contactez-nous sur WhatsApp pour les urgences
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Pourquoi Nous Choisir ?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm">Modélisation 3D gratuite avec chaque projet</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm">Devis gratuit et sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm">Équipe expérimentée et certifiée</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm">Matériaux de qualité garantis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm">Suivi de projet personnalisé</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm">Garantie sur tous nos travaux</span>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="bg-destructive/5 border-destructive/20">
        <CardHeader>
          <CardTitle className="text-destructive">Contact d'Urgence</CardTitle>
          <CardDescription>Pour les urgences BTP (fuites, effondrements, etc.)</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="destructive" className="w-full">
            <a href={`tel:${contactData.phones[0]}`}>
              <Phone className="mr-2 h-4 w-4" />
              Appeler Maintenant - {contactData.phones[0]}
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
