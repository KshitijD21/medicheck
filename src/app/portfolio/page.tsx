import { HeroSection } from "@/components/sections/hero-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioItems } from "@/lib/constants";
import { Award, Globe, Heart, Shield, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Healthcare Achievements & Case Studies | Medi-Check",
  description:
    "Explore Medi-Check's portfolio of healthcare achievements: 50+ blood donation camps, government partnerships, industrial safety programs, and international expansion.",
  keywords:
    "healthcare portfolio, case studies, blood donation camps, government partnerships, industrial safety, healthcare achievements",
};

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        title="Our Portfolio of Healthcare Excellence"
        description="Discover our journey of impact through successful healthcare initiatives, government partnerships, and innovative solutions that have transformed occupational health across industries."
        ctaText="Partner With Us"
        ctaLink="/contact"
        backgroundGradient={true}
      />

      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Measuring Our Impact
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Numbers that reflect our commitment to improving workplace health
              and safety across industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white border-0">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-sm opacity-90">
                  Blood Donors through 50+ Camps
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white border-0">
              <CardContent className="p-6">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-sm opacity-90">
                  Employees Health Screenings
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white border-0">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">Zero</div>
                <div className="text-sm opacity-90">
                  Accident Initiatives in 200+ Companies
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white border-0">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">
                  International Projects Completed
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white border-0">
              <CardContent className="p-6">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">
                  Industry Awards & Recognitions
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white border-0">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">
                  Client Satisfaction Rate
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Showcase of Excellence
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Highlighting our most impactful projects and initiatives that
              demonstrate our commitment to healthcare excellence and social
              responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <Card
                key={item.title}
                className="bg-white border-[#E2E8F0] hover:shadow-lg transition-all duration-300 h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-[#F0F9FF] text-[#1976D2] px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    {item.category === "Social Initiative" && (
                      <Heart className="h-6 w-6 text-[#7CB342]" />
                    )}
                    {item.category === "Government Partnership" && (
                      <Shield className="h-6 w-6 text-[#1976D2]" />
                    )}
                    {item.category === "Corporate Wellness" && (
                      <Users className="h-6 w-6 text-[#7CB342]" />
                    )}
                    {item.category === "Global Operations" && (
                      <Globe className="h-6 w-6 text-[#1976D2]" />
                    )}
                  </div>
                  <CardTitle className="text-xl text-[#1E293B] mb-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-[#64748B] text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {item.achievements && (
                    <div>
                      <h4 className="font-semibold text-[#1E293B] mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-[#64748B] text-sm">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry
              bodies, government organizations, and professional associations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#F8FAFB] border-[#E2E8F0] text-center p-6">
              <Award className="h-12 w-12 text-[#1976D2] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Excellence in Healthcare
              </h3>
              <p className="text-[#64748B] text-sm">
                National Healthcare Excellence Award 2023
              </p>
            </Card>

            <Card className="bg-[#F8FAFB] border-[#E2E8F0] text-center p-6">
              <Shield className="h-12 w-12 text-[#7CB342] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Best OHC Provider
              </h3>
              <p className="text-[#64748B] text-sm">
                Industry Safety & Health Award 2022
              </p>
            </Card>

            <Card className="bg-[#F8FAFB] border-[#E2E8F0] text-center p-6">
              <Heart className="h-12 w-12 text-[#1976D2] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Social Impact
              </h3>
              <p className="text-[#64748B] text-sm">
                Corporate Social Responsibility Excellence 2023
              </p>
            </Card>

            <Card className="bg-[#F8FAFB] border-[#E2E8F0] text-center p-6">
              <Globe className="h-12 w-12 text-[#7CB342] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                International Recognition
              </h3>
              <p className="text-[#64748B] text-sm">
                Global Healthcare Innovation Award 2022
              </p>
            </Card>

            <Card className="bg-[#F8FAFB] border-[#E2E8F0] text-center p-6">
              <Users className="h-12 w-12 text-[#1976D2] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Employee Wellness
              </h3>
              <p className="text-[#64748B] text-sm">
                Best Workplace Health Program 2023
              </p>
            </Card>

            <Card className="bg-[#F8FAFB] border-[#E2E8F0] text-center p-6">
              <TrendingUp className="h-12 w-12 text-[#7CB342] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Quality Certification
              </h3>
              <p className="text-[#64748B] text-sm">
                ISO 9001:2015 Quality Management System
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Success Stories by Industry
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Tailored healthcare solutions that have delivered measurable
              results across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-[#E2E8F0] text-center p-6">
              <div className="text-2xl font-bold text-[#1976D2] mb-2">
                Manufacturing
              </div>
              <div className="text-sm text-[#64748B] mb-4">200+ Companies</div>
              <ul className="text-left space-y-1 text-sm text-[#64748B]">
                <li>• 40% reduction in workplace injuries</li>
                <li>• 95% health screening compliance</li>
                <li>• 24/7 medical support coverage</li>
              </ul>
            </Card>

            <Card className="bg-white border-[#E2E8F0] text-center p-6">
              <div className="text-2xl font-bold text-[#7CB342] mb-2">
                IT & Services
              </div>
              <div className="text-sm text-[#64748B] mb-4">150+ Companies</div>
              <ul className="text-left space-y-1 text-sm text-[#64748B]">
                <li>• Comprehensive wellness programs</li>
                <li>• Mental health support initiatives</li>
                <li>• Ergonomic assessments</li>
              </ul>
            </Card>

            <Card className="bg-white border-[#E2E8F0] text-center p-6">
              <div className="text-2xl font-bold text-[#1976D2] mb-2">
                Maritime
              </div>
              <div className="text-sm text-[#64748B] mb-4">100+ Vessels</div>
              <ul className="text-left space-y-1 text-sm text-[#64748B]">
                <li>• DG Shipping certified services</li>
                <li>• Seafarer medical examinations</li>
                <li>• Ship medical surveys</li>
              </ul>
            </Card>

            <Card className="bg-white border-[#E2E8F0] text-center p-6">
              <div className="text-2xl font-bold text-[#7CB342] mb-2">
                Government
              </div>
              <div className="text-sm text-[#64748B] mb-4">50+ Departments</div>
              <ul className="text-left space-y-1 text-sm text-[#64748B]">
                <li>• Police health programs</li>
                <li>• Airport medical services</li>
                <li>• PSU health initiatives</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the ranks of successful organizations who have transformed
            their workplace health with our expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#7CB342] hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Start Your Journey
            </a>
            <a
              href={`tel:+919321021566`}
              className="bg-white text-[#1976D2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Speak to Our Experts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
