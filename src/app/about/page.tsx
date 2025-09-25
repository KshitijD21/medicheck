import { HeroSection } from "@/components/sections/hero-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/lib/constants";
import { Award, CalendarDays, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us - Medi-Check Health Services | Founded by Dr. Pradeep Mahajan",
  description:
    "Learn about Medi-Check Health Services, founded by Dr. Pradeep Mahajan in 1997. Meet our leadership team including Dr. Sushrut Limaye (CEO) and Mrs. Anita Tripathi (COO).",
  keywords:
    "Dr. Pradeep Mahajan, occupational health leadership, medical expertise, healthcare management, Medi-Check team",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Medi-Check Health Services"
        description="Founded by Dr. Pradeep Mahajan in 1997, we have grown to become India's leading occupational health services provider with 27+ years of healthcare excellence."
        ctaText="Meet Our Team"
        ctaLink="#team"
        backgroundGradient={true}
      />

      {/* Company History */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
                Our Journey Since 1997
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center">
                    <CalendarDays className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      1997 - Foundation
                    </h3>
                    <p className="text-[#64748B]">
                      Dr. Pradeep Mahajan founded Medi-Check Health Services
                      with a vision to revolutionize occupational healthcare in
                      India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      2000s - Recognition
                    </h3>
                    <p className="text-[#64748B]">
                      Achieved DISH and NABL approvals, establishing ourselves
                      as a trusted healthcare provider with government
                      empanelments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      2010s - Expansion
                    </h3>
                    <p className="text-[#64748B]">
                      Expanded to 30+ OHC centers across India and established
                      international presence in 5 countries across Africa and
                      Mauritius.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      Present - Leadership
                    </h3>
                    <p className="text-[#64748B]">
                      Today, we serve 500+ corporate clients with comprehensive
                      occupational health solutions and continue to set industry
                      standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F0F9FF] to-[#F8FAFB] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6">
                Our Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1976D2]">27+</div>
                  <div className="text-sm text-[#64748B]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7CB342]">30+</div>
                  <div className="text-sm text-[#64748B]">OHC Centers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1976D2]">500+</div>
                  <div className="text-sm text-[#64748B]">
                    Corporate Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7CB342]">5</div>
                  <div className="text-sm text-[#64748B]">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Meet the experienced professionals leading Medi-Check's mission to
              deliver world-class occupational healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="bg-white border-[#E2E8F0] hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-[#1976D2] text-white text-2xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-bold text-[#1E293B]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-[#1976D2] font-semibold">
                    {member.position}
                  </CardDescription>
                  <div className="text-sm text-[#7CB342] font-medium">
                    {member.credentials}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-[#F0F9FF] text-[#1976D2] px-3 py-1 rounded-full text-sm font-medium">
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              The principles that guide our commitment to excellence in
              occupational healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#F8FAFB] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Excellence
              </h3>
              <p className="text-[#64748B] text-sm">
                Committed to delivering the highest standards of healthcare
                services
              </p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFB] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Integrity
              </h3>
              <p className="text-[#64748B] text-sm">
                Maintaining trust through honest and ethical business practices
              </p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFB] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Innovation
              </h3>
              <p className="text-[#64748B] text-sm">
                Continuously evolving with latest medical technologies and
                practices
              </p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFB] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#7CB342] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                Accessibility
              </h3>
              <p className="text-[#64748B] text-sm">
                Making quality healthcare accessible across industries and
                geographies
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
