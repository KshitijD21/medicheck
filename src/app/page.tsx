import { HeroSection } from "@/components/sections/hero-section";
import { StatisticCard } from "@/components/sections/statistics";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { statistics, services, testimonials } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="Pioneered by Dr. Pradeep Mahajan in 1997"
        title="Leading Occupational Health Services Provider"
        description="Dedicated to diagnosis, treatment and prevention of occupational injury and disease. Managing 30+ OHC Centers nationally with global presence across 5 countries."
        ctaText="Get Healthcare Quote"
        ctaLink="/contact"
      />

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Healthcare Excellence in Numbers
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Over two decades of commitment to occupational health and safety
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <StatisticCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E2E8F0]">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-[#7CB342] rounded-full mr-3"></div>
                  <h3 className="text-2xl font-bold text-[#1E293B]">Our Vision</h3>
                </div>
                <p className="text-[#64748B] leading-relaxed">
                  To be a globally recognized leader in occupational healthcare, 
                  setting benchmarks for quality, innovation, and comprehensive 
                  health solutions that protect and enhance the well-being of 
                  workers across all industries.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E2E8F0]">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-[#1976D2] rounded-full mr-3"></div>
                  <h3 className="text-2xl font-bold text-[#1E293B]">Our Mission</h3>
                </div>
                <p className="text-[#64748B] leading-relaxed">
                  To deliver authentic, reliable, and preventive healthcare solutions 
                  through advanced medical technology, expert professionals, and 
                  comprehensive occupational health programs that ensure workplace 
                  safety and employee wellness.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Medi-Check?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-2 flex-shrink-0"></div>
                  <span>DISH & NABL approved healthcare services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-2 flex-shrink-0"></div>
                  <span>DG Shipping approved maritime medical services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Government empanelments with major organizations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-2 flex-shrink-0"></div>
                  <span>24/7 emergency medical services nationwide</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#7CB342] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expert team with 25+ years of experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesGrid
        services={services.slice(0, 6)}
        title="Comprehensive Healthcare Solutions"
        subtitle="Our Core Services"
      />

      {/* Testimonials */}
      <Testimonials
        testimonials={testimonials}
        title="What Our Clients Say"
        subtitle="Client Testimonials"
      />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with India's Leading OHC Provider?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies who trust us with their occupational health needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#7CB342] hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Get Started Today
            </a>
            <a
              href="tel:+919321021566"
              className="bg-white text-[#1976D2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Call +91 9321021566
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
