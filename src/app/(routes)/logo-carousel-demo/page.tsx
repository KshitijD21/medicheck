import LogoCarousel from "@/components/sections/logo-carousel";

export default function LogoCarouselTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Logo Carousel Demo
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Infinite scrolling logo carousel with smooth animations and
            responsive design
          </p>
        </div>
      </div>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Additional Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Features Demonstrated
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Infinite Scroll
              </h3>
              <p className="text-gray-600 text-sm">
                Seamless looping animation with no visible gaps or jumps
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Opposite Directions
              </h3>
              <p className="text-gray-600 text-sm">
                Two rows scrolling in different directions for visual interest
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hover Effects
              </h3>
              <p className="text-gray-600 text-sm">
                Interactive scaling and overlay effects on logo hover
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Responsive Design
              </h3>
              <p className="text-gray-600 text-sm">
                Adaptive sizing across all screen sizes and devices
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accessibility
              </h3>
              <p className="text-gray-600 text-sm">
                Keyboard navigation, focus states, and reduced motion support
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                White Backgrounds
              </h3>
              <p className="text-gray-600 text-sm">
                Automatic white backgrounds for transparent logos (SVG/PNG)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
