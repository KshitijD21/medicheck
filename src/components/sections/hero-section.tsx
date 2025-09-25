"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundGradient?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundGradient = true
}: HeroSectionProps) {
  return (
    <section className={`relative py-20 px-4 ${backgroundGradient ? 'bg-gradient-to-br from-[#F0F9FF] to-[#F8FAFB]' : 'bg-[#F8FAFB]'}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#1976D2] font-semibold mb-4 text-lg"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#64748B] mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#7CB342] hover:bg-[#689F38] text-white px-8 py-3 text-lg"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white px-8 py-3 text-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7CB342] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1976D2] rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
}