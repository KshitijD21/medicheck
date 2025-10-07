"use client";

import { Service } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
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
      "group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 ease-out";

    switch (index) {
      case 0: // OHC - Large featured card
        return `${baseClasses} col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px] md:min-h-[420px] lg:min-h-[500px]`;
      case 1: // Maritime - Tall card
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2 min-h-[280px] lg:min-h-[500px]`;
      case 2: // Wellness - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[280px] lg:min-h-[240px]`;
      case 3: // Ambulance - Wide card
        return `${baseClasses} col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 min-h-[280px] lg:min-h-[240px]`;
      case 4: // Training - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[280px] lg:min-h-[240px]`;
      case 5: // Mobile Health - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[280px] lg:min-h-[240px]`;
      case 6: // Institutional - Standard
        return `${baseClasses} col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 min-h-[280px] lg:min-h-[240px]`;
      default:
        return `${baseClasses} col-span-1 row-span-1 min-h-[280px]`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={getGridClasses()}
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
      role="article"
      tabIndex={0}
      aria-label={`${service.title} - ${service.description}`}
      aria-expanded={isMobileExpanded}
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.image || "/service/1st service.png"}
          alt={`${service.title} - Professional healthcare services`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={index < 3}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Enhanced Black Gradient Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 transition-all duration-700 group-hover:from-black/98 group-hover:via-black/70 group-hover:to-black/40" />
        {/* Additional Solid Black Overlay for Professional Look */}
        <div className="absolute inset-0 bg-black/20 transition-all duration-700 group-hover:bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8">
        {/* Category Badge - Always at top */}
        <div className="flex justify-start">
          <span
            className="inline-block px-3 py-1.5 text-xs font-semibold text-white rounded-full transition-all duration-300 group-hover:scale-105 shadow-lg backdrop-blur-sm"
            style={{ backgroundColor: "#7CB342" }}
          >
            {service.category}
          </span>
        </div>

        {/* Bottom Content Container - Always at bottom */}
        <div className="flex flex-col justify-end">
          {/* Title and Description - Always visible at bottom */}
          <div
            className={`space-y-2 sm:space-y-3 transition-all duration-700 ease-out ${
              isMobileExpanded || "lg:group-hover:-translate-y-4"
            }`}
          >
            {/* Title with Better Typography */}
            <h3
              className={`font-bold text-white leading-tight drop-shadow-lg ${
                index === 0
                  ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" // Featured card
                  : index === 1
                  ? "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" // Tall cards
                  : "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" // Standard cards
              }`}
            >
              {service.title}
            </h3>

            {/* Description with Better Contrast */}
            <p
              className={`text-white drop-shadow-md ${
                index === 0
                  ? "text-sm sm:text-base lg:text-lg opacity-95"
                  : "text-xs sm:text-sm lg:text-base opacity-90"
              }`}
            >
              {service.description}
            </p>
          </div>

          {/* Features List - Appears at bottom on hover, pushing title up */}
          <div
            className={`transform transition-all duration-700 ease-out space-y-2 sm:space-y-3 ${
              isMobileExpanded
                ? "translate-y-0 opacity-100 mt-4"
                : "translate-y-6 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:mt-4"
            }`}
          >
            <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
              {service.features
                .slice(0, index === 0 ? 5 : index === 1 ? 5 : 4)
                .map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-xs sm:text-sm text-white/90 drop-shadow"
                  >
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#7CB342] mt-0.5 flex-shrink-0 drop-shadow" />
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>

            {/* Enhanced CTA Button */}
            <button
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-lg backdrop-blur-md transition-all duration-300 border border-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Handle navigation or modal opening
              }}
              aria-label={`Learn more about ${service.title}`}
            >
              <span className="text-sm font-semibold">Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      style={{ backgroundColor: "#F8FAFB" }}
      aria-labelledby="services-title"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Enhanced Header Section */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            {subtitle && (
              <p
                className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl"
                style={{ color: "#1976D2" }}
              >
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                id="services-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 max-w-4xl mx-auto leading-tight"
                style={{ color: "#1E293B" }}
              >
                {title}
              </h2>
            )}
          </motion.div>
        )}

        {/* Enhanced Bento Grid with Better Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-max">
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
