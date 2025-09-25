import { HeroSection } from "@/components/sections/hero-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { groupCompanies } from "@/lib/constants";
import { Building, Calendar, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Group Companies - Comprehensive Healthcare Ecosystem | Medi-Check",
  description:
    "Discover Medi-Check's group companies: Dr. Mahajan Hospitals, Siddhant Marine, StemRx, Maya Diagnostics, and Family Welfare Health Service Trust.",
  keywords:
    "group companies, Dr. Mahajan Hospitals, Siddhant Marine, StemRx, Maya Diagnostics, healthcare ecosystem",
};

export default function GroupCompaniesPage() {
  return (
    <>
      <HeroSection
        title="Our Healthcare Ecosystem"
        description="A comprehensive network of specialized healthcare companies working together to provide complete medical solutions across diverse healthcare verticals."
        ctaText="Explore Our Network"
        ctaLink="#companies"
        backgroundGradient={true}
      />

      {/* Group Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Integrated Healthcare Solutions
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Our group companies represent a holistic approach to healthcare,
              combining traditional medical services with cutting-edge
              technology and specialized care across multiple domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#F8FAFB] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                Hospital Services
              </h3>
              <p className="text-[#64748B]">
                Multi-specialty hospitals with advanced medical facilities
              </p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFB] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                Diagnostic Services
              </h3>
              <p className="text-[#64748B]">
                State-of-the-art diagnostic and imaging capabilities
              </p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFB] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                Social Welfare
              </h3>
              <p className="text-[#64748B]">
                Community health programs and charitable initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies */}
      <section id="companies" className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Our Group Companies
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Each company in our group specializes in specific healthcare
              domains, ensuring comprehensive coverage and expertise
            </p>
          </div>

          <div className="space-y-8">
            {groupCompanies.map((company) => (
              <Card
                key={company.name}
                className="bg-white border-[#E2E8F0] hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                  <div className="lg:col-span-2">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-[#1976D2] mb-2">
                        {company.name}
                      </CardTitle>
                      {company.established && (
                        <div className="flex items-center text-[#7CB342] font-semibold">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Established {company.established}</span>
                        </div>
                      )}
                      <CardDescription className="text-[#64748B] text-base leading-relaxed">
                        {company.description}
                      </CardDescription>
                    </CardHeader>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-[#1E293B] mb-3">
                      Key Services:
                    </h4>
                    <ul className="space-y-2">
                      {company.services.map((service, serviceIndex) => (
                        <li
                          key={serviceIndex}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-[#7CB342] mt-0.5 flex-shrink-0" />
                          <span className="text-[#64748B] text-sm">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Synergies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Collaborative Healthcare Excellence
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Our group companies work in synergy to provide seamless,
              comprehensive healthcare solutions that address every aspect of
              medical care and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Integrated Care Model
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Seamless coordination across all healthcare touchpoints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Unified patient records across all facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Coordinated treatment protocols</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Comprehensive health monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#7CB342]" />
                    <span>Preventive care programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Innovation & Research
                </CardTitle>
                <CardDescription className="text-green-100">
                  Advancing healthcare through technology and research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Stem cell therapy and regenerative medicine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Advanced diagnostic technologies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Telemedicine and digital health</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>Clinical research partnerships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Healthcare Ecosystem
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our integrated group companies can provide
            comprehensive healthcare solutions for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#7CB342] hover:bg-[#689F38] text-white"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1976D2]"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
