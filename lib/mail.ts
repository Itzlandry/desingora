import "server-only";
import nodemailer from "nodemailer";

export const user = process.env.MAILER_USER!;
export const pass = process.env.MAILER_PASS!;

export const devEmail = process.env.NEXT_PUBLIC_EMAIL!;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user,
    pass,
  },
  from: user,
  tls: {
    rejectUnauthorized: false,
  },
});

export async function contact_us(
  name: string,
  email: string | null | undefined,
  phone: string,
  service: string,
  location: string | null | undefined,
  budget: string | null | undefined,
  description: string
) {
  return await transporter.sendMail({
    from: user,
    to: devEmail,
    subject: "Demande de Devis",
    text: `
Demande de devis

Nom : ${name}
Email : ${email || "Non spécifié"}
Téléphone : ${phone || "Non spécifié"}
Service : ${service}
Localisation : ${location || "Non spécifiée"}
Budget : ${budget || "Non spécifié"}

Description du projet :
${description}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <h2 style="color: #1976d2;">Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email || "Non spécifié"}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non spécifié"}</p>
        <p><strong>Service :</strong> ${service}</p>
        <p><strong>Localisation :</strong> ${location || "Non spécifiée"}</p>
        <p><strong>Budget :</strong> ${budget || "Non spécifié"}</p>
        <hr style="margin: 20px 0;">
        <p><strong>Description du projet :</strong></p>
        <p style="margin-left: 16px;">${description}</p>
      </div>
    `,
  });
}
