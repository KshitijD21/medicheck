"use client";

import { services } from "@/lib/constants";
import Image from "next/image";

export default function SimpleTestPage() {
  console.log("Simple Test - Services:", services);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Simple Test</h1>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Services Data:</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(services, null, 2)}
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Image Test:</h2>
        <div className="w-64 h-64 relative">
          <Image
            src="/service/1st service.png"
            alt="Test Image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={service.image || "/service/1st service.png"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-sm">
                {service.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
