import { ContactForm } from "@/components/sections/contact-form";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Healthcare Quote | Medi-Check Health Services",
  description:
    "Contact Medi-Check Health Services for occupational health solutions. Call +91 9321021566 or email info@medicheckworld.com. Located in Navi Mumbai, Maharashtra.",
  keywords:
    "contact medi-check, healthcare quote, occupational health consultation, medical services inquiry",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get in Touch with Our Healthcare Experts"
        description="Ready to enhance your workplace health and safety? Our team is here to provide customized occupational health solutions for your organization."
        ctaText="Call Now"
        ctaLink={`tel:${contactInfo.phone}`}
        backgroundGradient={true}
      />

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
                  Contact Information
                </h2>
                <p className="text-[#64748B] text-lg mb-8">
                  Reach out to us for any inquiries about our occupational
                  health services. We&apos;re here to help you create a safer,
                  healthier workplace.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-[#E2E8F0] hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
                          Phone
                        </h3>
                        <p className="text-[#64748B] mb-2">
                          Call us for immediate assistance
                        </p>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-[#1976D2] font-semibold hover:underline text-lg"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#E2E8F0] hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
                          Email
                        </h3>
                        <p className="text-[#64748B] mb-2">
                          Send us your requirements
                        </p>
                        <div className="space-y-1">
                          <div>
                            <span className="text-sm text-[#64748B]">
                              Business Inquiries:{" "}
                            </span>
                            <a
                              href={`mailto:${contactInfo.businessEmail}`}
                              className="text-[#1976D2] font-semibold hover:underline"
                            >
                              {contactInfo.businessEmail}
                            </a>
                          </div>
                          <div>
                            <span className="text-sm text-[#64748B]">
                              Sales Inquiries:{" "}
                            </span>
                            <a
                              href={`mailto:${contactInfo.salesEmail}`}
                              className="text-[#1976D2] font-semibold hover:underline"
                            >
                              {contactInfo.salesEmail}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#E2E8F0] hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
                          Office Address
                        </h3>
                        <p className="text-[#64748B] mb-2">
                          Visit our headquarters
                        </p>
                        <p className="text-[#1E293B] font-medium mb-2">
                          {contactInfo.address}
                        </p>
                        <a
                          href={contactInfo.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#1976D2] font-semibold hover:underline"
                        >
                          View on Google Maps
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#E2E8F0] hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7CB342] rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
                          Business Hours
                        </h3>
                        <p className="text-[#64748B] mb-2">
                          We&apos;re here when you need us
                        </p>
                        <div className="space-y-1 text-[#1E293B]">
                          <p>
                            <span className="font-medium">
                              Monday - Friday:
                            </span>{" "}
                            9:00 AM - 6:00 PM
                          </p>
                          <p>
                            <span className="font-medium">Saturday:</span> 9:00
                            AM - 2:00 PM
                          </p>
                          <p>
                            <span className="font-medium">Sunday:</span> Closed
                          </p>
                          <p className="text-[#7CB342] font-semibold">
                            Emergency services: 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm
                title="Send Us a Message"
                description="Fill out the form below and our healthcare experts will get back to you within 24 hours with a customized solution for your needs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#F8FAFB]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#64748B]">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-[#E2E8F0]">
              <CardHeader>
                <CardTitle className="text-[#1E293B]">
                  How quickly can you set up an OHC at our facility?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#64748B]">
                  Typically, we can establish a fully operational OHC within 2-4
                  weeks, depending on your specific requirements and facility
                  readiness. This includes equipment setup, staff deployment,
                  and compliance documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E2E8F0]">
              <CardHeader>
                <CardTitle className="text-[#1E293B]">
                  Do you provide services outside major cities?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#64748B]">
                  Yes, we have a strong presence across India with 30+ centers
                  and mobile health units. We serve remote locations through our
                  &quot;Health on Wheels&quot; program and can establish
                  temporary OHCs for project-based requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E2E8F0]">
              <CardHeader>
                <CardTitle className="text-[#1E293B]">
                  What certifications do your medical professionals have?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#64748B]">
                  All our medical professionals are qualified doctors with
                  relevant specializations. Our team includes DISH-approved
                  occupational health specialists.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E2E8F0]">
              <CardHeader>
                <CardTitle className="text-[#1E293B]">
                  Can you customize services for specific industries?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#64748B]">
                  Absolutely! We have specialized programs for various
                  industries including maritime (DG Shipping approved),
                  manufacturing, IT, construction, and more. Each program is
                  tailored to address industry-specific health risks and
                  compliance requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Medical Emergency?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our ambulance services and emergency medical team are available 24/7
            across all our locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-[#DC2626] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Call Emergency Hotline
            </a>
            <a
              href={`mailto:${contactInfo.businessEmail}?subject=Medical Emergency`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#DC2626] transition-colors duration-300 inline-block"
            >
              Email for Emergency
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
