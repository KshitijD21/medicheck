"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Service } from "@/types";
import { motion } from "framer-motion";
import {
  Building,
  GraduationCap,
  Heart,
  MapPin,
  Ship,
  Stethoscope,
  Truck,
} from "lucide-react";

const serviceIcons = {
  ohc: Stethoscope,
  maritime: Ship,
  wellness: Heart,
  ambulance: Truck,
  training: GraduationCap,
  mobile: MapPin,
  institutional: Building,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon =
    serviceIcons[service.id as keyof typeof serviceIcons] || Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border-[#E2E8F0] group">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 p-3 bg-[#F0F9FF] rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[#1976D2] transition-colors duration-300">
            <Icon className="h-8 w-8 text-[#1976D2] group-hover:text-white transition-colors duration-300" />
          </div>
          <CardTitle className="text-xl font-bold text-[#1E293B] group-hover:text-[#1976D2] transition-colors duration-300">
            {service.title}
          </CardTitle>
          <CardDescription className="text-[#64748B] text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-2 text-sm text-[#64748B]"
              >
                <div className="w-1.5 h-1.5 bg-[#7CB342] rounded-full mt-2 flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {/* <Button
            asChild
            variant="outline"
            className="w-full border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white transition-colors duration-300"
          >
            <Link href="/services">Learn More</Link>
          </Button> */}
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

export function ServicesGrid({ services, title, subtitle }: ServicesGridProps) {
  return (
    <section className="py-16 px-4 bg-[#F8FAFB]">
      <div className="container mx-auto max-w-7xl">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {subtitle && (
              <p className="text-[#1976D2] font-semibold mb-4 text-lg">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
                {title}
              </h2>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
