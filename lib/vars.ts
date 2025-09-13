export const company = process.env.NEXT_PUBLIC_COMPANY!;
export const address = process.env.NEXT_PUBLIC_ADDRESS!;
export const email = process.env.NEXT_PUBLIC_EMAIL!;

export const phones = Object.keys(process.env)
  .filter((key) => key.startsWith("NEXT_PUBLIC_PHONE_"))
  .sort()
  .map((key) => process.env[key] || "");
