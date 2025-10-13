import { navItems } from "@/lib/constants";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1976D2]">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Medi-Check</h3>
                <p className="text-sm text-gray-300">Health Services</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-sm">
              Leading occupational health services provider since 1997. Managing
              30+ OHC centers nationally with global presence across 5
              countries.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              {/* <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" /> */}
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <nav className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Occupational Health Centre
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Maritime Health Services
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Corporate Wellness
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Ambulance Services
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                First Aid Training
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Health on Wheels
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#7CB342] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  R-831, Rabale,
                  <br />
                  Navi Mumbai, Maharashtra 400708
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#7CB342]" />
                <p className="text-sm text-gray-300">+91 9321021566</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#7CB342]" />
                <div className="text-sm text-gray-300">
                  <p>info@medicheckworld.com</p>
                  <p>sales@medicheckworld.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© 2024 Medi-Check Health Services. All rights reserved.</p>
            </div>
            {/* <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div> */}
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            Founded by Dr. Pradeep Mahajan in 1997 | 27+ Years of Healthcare
            Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
