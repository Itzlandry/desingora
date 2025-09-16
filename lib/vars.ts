export const company = process.env.NEXT_PUBLIC_COMPANY!;
export const address = process.env.NEXT_PUBLIC_ADDRESS!;
export const email = process.env.NEXT_PUBLIC_EMAIL!;
export const url = process.env.NEXT_PUBLIC_URL!;

// export const phones = Object.keys(process.env)
//   .filter((key) => key.startsWith("NEXT_PUBLIC_PHONE_"))
//   .sort()
//   .map((key) => process.env[key] || "");

export const phones = [
  process.env.NEXT_PUBLIC_PHONE_1!,
  process.env.NEXT_PUBLIC_PHONE_2!,
];

import categories from "@/data/categories.json";

export const categoryColors = categories.categoryColors;
export const categoryDescriptions = categories.categoryDescriptions;
export const categoryLabels = categories.categoryLabels;
