import { BentoServicesGrid } from "@/components/sections/bento-services-grid-v2";
import { HeroSection } from "@/components/sections/hero-section";
import LogoCarousel from "@/components/sections/logo-carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/constants";
import type { Metadata } from "next";

import { Award, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Our Services - Comprehensive Occupational Health Solutions | Medi-Check",
  description:
    "Explore Medi-Check's complete range of occupational health services: OHC centers, maritime health, corporate wellness, ambulance services, training programs & more.",
  keywords:
    "occupational health services, OHC centers, maritime health, corporate wellness, ambulance services, first aid training, health on wheels",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Comprehensive Occupational Health Solutions"
        description="From occupational health centers to maritime medical services, we provide complete healthcare solutions tailored to your industry needs."
        ctaText="Request Service Quote"
        ctaLink="/contact"
        backgroundGradient={true}
      />

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              We combine medical expertise with cutting-edge technology to
              deliver unparalleled occupational health services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Certified Excellence
              </h3>
              <p className="text-[#64748B] text-sm">
                DISH, NABL, and DG Shipping approved services
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                24/7 Availability
              </h3>
              <p className="text-[#64748B] text-sm">
                Round-the-clock emergency medical services
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Expert Team
              </h3>
              <p className="text-[#64748B] text-sm">
                Qualified medical professionals with 25+ years experience
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Nationwide Coverage
              </h3>
              <p className="text-[#64748B] text-sm">
                30+ OHC centers across India with global presence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <BentoServicesGrid
        services={services}
        title="Our Complete Service Portfolio"
        subtitle="Professional Healthcare Solutions"
      />

      {/* Logo Carousel */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <LogoCarousel />
      </section>

      {/* Service Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-12 text-center">
            Service Highlights & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Government Tie-ups
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Trusted by major government organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Maharashtra Police</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Airports Authority of India (AAI)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Employee State Insurance Corporation (ESIC)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Various Public Sector Undertakings (PSUs)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Industry Certifications
                </CardTitle>
                <CardDescription className="text-green-100">
                  Recognized quality standards and approvals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>
                      DISH (Director General of Health Services) Approved
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>NABL (National Accreditation Board) Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>DG Shipping Approved Maritime Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>ISO Quality Management Standards</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Clients */}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enhance Your Workplace Health?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts design a customized occupational health program for
            your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#7CB342] hover:bg-[#689F38] text-white"
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-[#1976D2] hover:bg-white hover:text-[#1976D2]"
            >
              <Link href="/portfolio">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
