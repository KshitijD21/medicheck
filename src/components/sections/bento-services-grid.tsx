"use client";

import { Service } from "@/types";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

interface BentoServiceCardProps {
  service: Service;
  index: number;
}

const BentoServiceCard: React.FC<BentoServiceCardProps> = ({
  service,
  index,
}) => {
  const [isMobileExpanded, setIsMobileExpanded] = React.useState(false);
  // Define specific grid spans for each card based on index
  const getGridClasses = () => {
    const baseClasses =
      "group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 ease-out";

    switch (index) {
      case 0: // OHC - Large featured card
        return `${baseClasses} col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px] md:min-h-[500px]`;
      case 1: // Maritime - Tall card
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2 min-h-[320px] lg:min-h-[500px]`;
      case 2: // Wellness - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[320px] lg:min-h-[240px]`;
      case 3: // Ambulance - Wide card
        return `${baseClasses} col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 min-h-[320px] lg:min-h-[240px]`;
      case 4: // Training - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[320px] lg:min-h-[240px]`;
      case 5: // Mobile Health - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[320px] lg:min-h-[240px]`;
      case 6: // Institutional - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[320px] lg:min-h-[240px]`;
      default:
        return `${baseClasses} col-span-1 row-span-1 min-h-[320px]`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={getGridClasses()}
      role="button"
      tabIndex={0}
      onClick={() => {
        // On mobile, toggle expanded state for touch interaction
        if (window.innerWidth < 1024) {
          setIsMobileExpanded(!isMobileExpanded);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (window.innerWidth < 1024) {
            setIsMobileExpanded(!isMobileExpanded);
          }
        }
      }}
      aria-label={`${service.title} - ${service.description}`}
      aria-expanded={isMobileExpanded}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.image || "/service/1st service.png"}
          alt={`${service.title} - Professional healthcare services`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={index < 3}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Enhanced Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 transition-all duration-700 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/30" />
        {/* Additional Black Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/30 transition-all duration-700 group-hover:bg-black/40" />
      </div>{" "}
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-4 md:p-6">
        {/* Category Badge */}
        <div className="flex justify-start">
          <span
            className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full transition-all duration-300 group-hover:scale-105"
            style={{ backgroundColor: "#7CB342" }}
          >
            {service.category}
          </span>
        </div>{" "}
        {/* Bottom Content */}
        <div className="space-y-4">
          {/* Title */}
          <h3
            className={`font-bold text-white leading-tight ${
              index === 0
                ? "text-3xl md:text-4xl lg:text-5xl" // Featured card
                : index === 1
                ? "text-2xl md:text-3xl lg:text-4xl" // Tall cards
                : "text-xl md:text-2xl lg:text-3xl" // Standard cards
            }`}
          >
            {service.title}
          </h3>

          {/* Description - Always visible but subtle */}
          <p
            className={`text-gray-200 opacity-90 ${
              index === 0 ? "text-base lg:text-lg" : "text-sm lg:text-base"
            }`}
          >
            {service.description}
          </p>

          {/* Features List - Hidden by default, slides up on hover or mobile tap */}
          <div
            className={`transform transition-all duration-700 ease-out space-y-3 md:space-y-4 ${
              isMobileExpanded
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
            }`}
          >
            <ul className="space-y-2 mb-4">
              {service.features
                .slice(0, index === 0 ? 5 : index === 1 ? 5 : 4)
                .map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-xs md:text-sm text-gray-200"
                  >
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-[#7CB342] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>

            {/* CTA Button - Appears on hover */}
            {/* <button
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={(e) => {
                e.preventDefault();
                // Handle navigation or modal opening
              }}
              aria-label={`Learn more about ${service.title}`}
            >
              <span className="text-sm font-medium">Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface BentoServicesGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const BentoServicesGrid: React.FC<BentoServicesGridProps> = ({
  services,
  title,
  subtitle,
  className = "",
}) => {
  console.log("BentoServicesGrid - Services:", services);
  console.log("BentoServicesGrid - Services length:", services?.length);

  if (!services || services.length === 0) {
    return <div className="p-8 text-center">No services data available</div>;
  }

  return (
    <section
      className={`py-16 px-4 ${className}`}
      style={{ backgroundColor: "#F8FAFB" }}
      aria-labelledby="services-title"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {subtitle && (
              <p
                className="font-semibold mb-4 text-lg"
                style={{ color: "#1976D2" }}
              >
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                id="services-title"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#1E293B" }}
              >
                {title}
              </h2>
            )}
          </motion.div>
        )}

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {services.map((service, index) => (
            <BentoServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoServicesGrid;
