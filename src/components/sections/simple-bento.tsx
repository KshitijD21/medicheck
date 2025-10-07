"use client";

import { Service } from "@/types";
import Image from "next/image";
import React from "react";

interface SimpleBentoProps {
  services: Service[];
}

export const SimpleBento: React.FC<SimpleBentoProps> = ({ services }) => {
  console.log("SimpleBento rendering with services:", services.length);

  return (
    <div className="p-8" style={{ backgroundColor: "#F8FAFB" }}>
      <h2 className="text-3xl font-bold text-center mb-8">
        Simple Bento Grid Test
      </h2>

      {/* Test single card first */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Single Card Test:</h3>
        <div
          className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-80 w-80"
          style={{ backgroundColor: "#1976D2" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/service/1st service.png"
              alt="Test Service"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-between p-6">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
                Test Category
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Test Service Title
              </h3>
              <p className="text-gray-200 text-sm">Test description text</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Grid Test */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`
              relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-80
              ${index === 0 ? "lg:col-span-2 lg:row-span-2 lg:h-[500px]" : ""}
            `}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image || "/service/1st service.png"}
                alt={service.title}
                fill
                className="object-cover"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6">
              <div>
                <span
                  className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full"
                  style={{ backgroundColor: "#7CB342" }}
                >
                  {service.category}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
