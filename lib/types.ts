export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  icon: string
  image: string
  category: "finitions" | "forage" | "infrastructure" | "construction"
  price?: string
  duration?: string
  includes3DModeling: boolean
}

export interface Example {
  id: string
  title: string
  description: string
  category: "finitions" | "forage" | "infrastructure" | "construction"
  images: string[]
  videos?: string[]
  location: string
  completionDate: string
  client?: string
  serviceUsed: string
  specifications: {
    surface?: string
    materials?: string[]
    duration?: string
    budget?: string
  }
}

export interface ContactInfo {
  company: string
  address: string
  phones: string[]
  email: string
  whatsapp: string[]
}
