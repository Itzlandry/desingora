export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  image: string;
  category: "finitions" | "forage" | "infrastructure" | "construction";
  includes3DModeling: boolean;
}

export interface Example {
  id: string;
  title: string;
  description: string;
  category: "finitions" | "forage" | "infrastructure" | "construction";
  images: string[];
  videos?: string[];
  location: string;
  completionDate: string;
  serviceUsed: string;
}

export interface ContactInfo {
  company: string;
  address: string;
  phones: string[];
  email: string;
  whatsapp: string[];
}
