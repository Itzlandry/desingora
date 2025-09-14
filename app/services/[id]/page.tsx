import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServiceDetail } from "@/components/service-detail";
import servicesData from "@/data/services.json";

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return servicesData.services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({
  params: params_,
}: ServicePageProps) {
  const params = await params_;
  const service = servicesData.services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServiceDetail service={service as any} />
      </main>
      <Footer />
    </div>
  );
}
