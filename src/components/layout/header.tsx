"use client";

import { Button } from "@/components/ui/button";
import { COMPANY, navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar */}
      <div className="bg-[#1976D2] text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+91 9321021566</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>info@medicheckworld.com</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <span className="text-xs">
                Serving Healthcare Excellence Since 1997
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt={`${COMPANY.NAME} Logo`}
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#1976D2]">
                {COMPANY.NAME}
              </h1>
              <p className="text-xs text-[#64748B]">{COMPANY.NAME_TAG}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#1976D2]",
                  pathname === item.href
                    ? "text-[#1976D2] border-b-2 border-[#1976D2] pb-1"
                    : "text-[#1E293B]"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden md:inline-flex bg-[#7CB342] hover:bg-[#689F38] text-white"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#1E293B]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1E293B]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-[#1976D2]"
                      : "text-[#1E293B] hover:text-[#1976D2]"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-[#7CB342] hover:bg-[#689F38] text-white w-full"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
