import { BentoServicesGrid } from "@/components/sections/bento-services-grid-v2";
import { services } from "@/lib/constants";

export default function BentoTestPage() {
  console.log("BentoTestPage - Services data:", services);

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">Bento Grid Test</h1>
      <BentoServicesGrid
        services={services}
        title="Our Comprehensive Healthcare Services"
        subtitle="Trusted Healthcare Partner"
      />
    </div>
  );
}
