"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface LogoItem {
  src: string;
  alt: string;
  name: string;
}

const logos: LogoItem[] = [
  {
    src: "/brand/Deepak_3_Line_Logo_E.jpg",
    alt: "Deepak 3 Line Logo",
    name: "Deepak",
  },
  { src: "/brand/Dow.svg", alt: "Dow Company Logo", name: "Dow" },
  {
    src: "/brand/Four_Points_Logo_neu.png",
    alt: "Four Points Logo",
    name: "Four Points",
  },
  {
    src: "/brand/glenmark.png",
    alt: "Glenmark Pharmaceuticals Logo",
    name: "Glenmark",
  },
  { src: "/brand/Godrej.png", alt: "Godrej Group Logo", name: "Godrej" },
  { src: "/brand/henkel.jpg", alt: "Henkel Logo", name: "Henkel" },
  { src: "/brand/Huawei.wine.png", alt: "Huawei Logo", name: "Huawei" },
  { src: "/brand/L&T.png", alt: "Larsen & Toubro Logo", name: "L&T" },
  { src: "/brand/LZ-Logo.webp", alt: "LZ Company Logo", name: "LZ" },
  { src: "/brand/nokia.png", alt: "Nokia Logo", name: "Nokia" },
  { src: "/brand/Pepsi_2023.svg.png", alt: "Pepsi Logo", name: "Pepsi" },
  { src: "/brand/viyash.webp", alt: "Viyash Logo", name: "Viyash" },
  { src: "/brand/Vodafone.png", alt: "Vodafone Logo", name: "Vodafone" },
  { src: "/brand/vvf.svg", alt: "VVF Logo", name: "VVF" },
];

// Split logos into two rows
const row1Logos = logos.slice(0, 7);
const row2Logos = logos.slice(7);

interface LogoCarouselRowProps {
  logos: LogoItem[];
  direction: "left" | "right";
  speed?: number;
  className?: string;
}

const LogoCarouselRow: React.FC<LogoCarouselRowProps> = ({
  logos,
  direction,
  speed = 30,
  className = "",
}) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <motion.div
        className="flex items-center gap-8 md:gap-12 lg:gap-16"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "300%",
          animationPlayState: "running",
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <LogoItem key={`${logo.name}-${index}`} logo={logo} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

interface LogoItemProps {
  logo: LogoItem;
  index: number;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo, index }) => {
  const [imageError, setImageError] = React.useState(false);

  // Determine if logo needs white background based on file extension
  const needsWhiteBackground =
    logo.src.includes(".svg") ||
    logo.src.includes(".png") ||
    logo.src.includes(".webp");

  return (
    <div className="flex-shrink-0 group">
      <div
        className={`
          relative w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-18 xl:w-36 xl:h-20
          rounded-lg overflow-hidden shadow-sm transition-all duration-300
          ${needsWhiteBackground ? "bg-white" : "bg-transparent"}
        `}
      >
        {!imageError ? (
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain p-2"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px"
            onError={() => setImageError(true)}
            priority={index < 10} // Prioritize first 10 images
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-xs">
            {logo.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default function LogoCarousel() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl text-[#1976D2]">
            Trusted by Leading Corporations
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 max-w-4xl mx-auto leading-tight text-[#1E293B]">
            Industry Leaders Choose Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            We&apos;re proud to partner with industry leaders across various
            sectors, delivering exceptional healthcare solutions worldwide.
          </p>
        </div>

        {/* Logo Carousel Rows */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Row 1 - Left to Right */}
          <LogoCarouselRow
            logos={row1Logos}
            direction="left"
            speed={25}
            className="mask-fade"
          />

          {/* Row 2 - Right to Left */}
          <LogoCarouselRow
            logos={row2Logos}
            direction="right"
            speed={28}
            className="mask-fade"
          />
        </div>

        {/* Accessibility Note */}
        <div className="sr-only">
          <p>
            Company logos displayed in an animated carousel. Hover to pause
            animation.
          </p>
        </div>
      </div>

      {/* Custom CSS for fade mask effect */}
      <style jsx global>{`
        .mask-fade {
          mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        /* Pause animation on hover for accessibility */
        .mask-fade:hover .motion-div {
          animation-play-state: paused;
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .mask-fade * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
