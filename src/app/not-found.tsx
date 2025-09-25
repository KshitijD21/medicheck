import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#1976D2] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Page Not Found</h2>
          <p className="text-[#64748B] mb-8">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, renamed, or doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#1976D2] hover:bg-[#1565C0] text-white">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
        
        <div className="mt-8 p-4 bg-white rounded-lg border border-[#E2E8F0]">
          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">Need Help?</h3>
          <p className="text-[#64748B] text-sm mb-4">
            If you're looking for our healthcare services or need assistance, 
            feel free to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 text-sm">
            <Link href="/contact" className="text-[#1976D2] hover:underline">
              Contact Us
            </Link>
            <span className="hidden sm:inline text-[#64748B]">|</span>
            <Link href="/services" className="text-[#1976D2] hover:underline">
              Our Services
            </Link>
            <span className="hidden sm:inline text-[#64748B]">|</span>
            <a href="tel:+919321021566" className="text-[#7CB342] hover:underline">
              Call +91 9321021566
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}