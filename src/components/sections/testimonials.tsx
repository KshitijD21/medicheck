"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full bg-white border-[#E2E8F0] hover:shadow-lg transition-all duration-300 relative">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-[#7CB342] mb-4" />
          <blockquote className="text-[#64748B] mb-6 italic leading-relaxed">
            "{testimonial.content}"
          </blockquote>
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback className="bg-[#1976D2] text-white">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-[#1E293B]">{testimonial.name}</div>
              <div className="text-sm text-[#64748B]">
                {testimonial.position}, {testimonial.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function Testimonials({ testimonials, title, subtitle }: TestimonialsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
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
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.name}-${testimonial.company}`} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}