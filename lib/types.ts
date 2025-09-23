import { categoryLabels } from "./vars";

export type Category = keyof typeof categoryLabels;

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  category: Category;
  includes3DModeling: boolean;
}

export interface Example {
  id: string;
  title: string;
  description: string;
  category: Category;
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
