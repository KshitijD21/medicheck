import { HeroSection } from "@/components/sections/hero-section";
import { Testimonials } from "@/components/sections/testimonials";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { globalLocations, majorClients, testimonials } from "@/lib/constants";
import { Building, Globe, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Global Presence - 30+ Centers Across 5 Countries | Medi-Check",
  description:
    "Medi-Check's extensive network spans 30+ OHC centers across India with international presence in Mauritius, Sudan, Zambia, Kenya, and Uganda. Trusted by 500+ clients.",
  keywords:
    "global presence, OHC centers India, international healthcare, Mauritius Sudan Zambia Kenya Uganda, pan India coverage",
};

export default function PresencePage() {
  return (
    <>
      <HeroSection
        title="Our Global Footprint"
        description="With 30+ OHC centers across India and presence in 5 countries, we bring world-class occupational healthcare closer to you, wherever you are."
        ctaText="Find Nearest Center"
        ctaLink="/contact"
        backgroundGradient={true}
      />

      {/* Global Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Expanding Healthcare Access Globally
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              From bustling metropolitan cities to remote industrial locations,
              our healthcare network ensures quality medical services are always
              within reach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white border-0">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm opacity-90">OHC Centers in India</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white border-0">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-sm opacity-90">Countries Worldwide</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#1976D2] to-[#1565C0] text-white border-0">
              <CardContent className="p-6">
                <Building className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Corporate Clients</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white border-0">
              <CardContent className="p-6">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-sm opacity-90">Employees Served</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* International Presence */}
      <section className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              International Operations
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Expanding beyond India, we bring our expertise to developing
              healthcare infrastructure in emerging markets across Africa and
              the Indian Ocean
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalLocations
              .filter((location) => location.zone === "International")[0]
              ?.cities.map((country) => (
                <Card
                  key={country}
                  className="bg-white border-[#E2E8F0] hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7CB342] transition-colors duration-300">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#1E293B]">
                      {country}
                    </CardTitle>
                    <CardDescription className="text-[#64748B]">
                      Healthcare Services & Support
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-[#64748B] text-sm">
                      Providing occupational health solutions and medical
                      support services to multinational corporations and local
                      industries.
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* India Coverage */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Pan-India Network
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Strategically located centers across all major zones ensuring
              comprehensive healthcare coverage nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalLocations
              .filter((location) => location.zone !== "International")
              .map((location) => (
                <Card
                  key={location.zone}
                  className="bg-white border-[#E2E8F0] hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-[#1976D2] flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {location.zone}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {location.cities.map((city) => (
                        <div key={city} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#7CB342] rounded-full"></div>
                          <span className="text-[#64748B] text-sm">{city}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              From Fortune 500 companies to government organizations, we proudly
              serve diverse industries with specialized healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Group clients by category */}
            <Card className="bg-white border-[#E2E8F0]">
              <CardHeader>
                <CardTitle className="text-[#1976D2] flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Technology & Telecom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {majorClients
                    .filter((client) =>
                      ["Technology", "Telecommunications"].includes(
                        client.category
                      )
                    )
                    .map((client) => (
                      <div
                        key={client.name}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-[#7CB342] rounded-full"></div>
                        <span className="text-[#64748B]">{client.name}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E2E8F0]">
              <CardHeader>
                <CardTitle className="text-[#1976D2] flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Manufacturing & Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {majorClients
                    .filter((client) =>
                      [
                        "Engineering & Construction",
                        "Consumer Goods",
                        "FMCG",
                      ].includes(client.category)
                    )
                    .map((client) => (
                      <div
                        key={client.name}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-[#7CB342] rounded-full"></div>
                        <span className="text-[#64748B]">{client.name}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E2E8F0]">
              <CardHeader>
                <CardTitle className="text-[#1976D2] flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Government & PSUs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {majorClients
                    .filter((client) =>
                      [
                        "Government",
                        "Aviation",
                        "Healthcare",
                        "Energy",
                      ].includes(client.category)
                    )
                    .map((client) => (
                      <div
                        key={client.name}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-[#7CB342] rounded-full"></div>
                        <span className="text-[#64748B]">{client.name}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <Testimonials
        testimonials={testimonials}
        title="What Our Global Clients Say"
        subtitle="Client Success Stories"
      />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Expand Your Healthcare Reach?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you need local or international healthcare support, our
            global network is ready to serve your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#7CB342] hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Discuss Your Requirements
            </a>
            <a
              href={`tel:+919321021566`}
              className="bg-white text-[#1976D2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
