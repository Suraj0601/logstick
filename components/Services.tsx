"use client";

import Image from "next/image";
import HomeSolutionIcon from "@/public/Images/Services-Icons/HOME-SOLUTION.png";
import OfficeSolutionIcon from "@/public/Images/Services-Icons/OFFICE-SOLUTION.png";
import PreDeliveryInspectionIcon from "@/public/Images/Services-Icons/PRE-DELIVERY-INSPECTION.png";
import ReadyMadeFurnitureIcon from "@/public/Images/Services-Icons/READYMADE-FURNITURE.png"

const SERVICES = [
  {
    title: "PRE DELIVERY INSPECTION",
    href: "/pre-delivery-inspection",
    icon: (PreDeliveryInspectionIcon),
  },
  {
    title: "HOME SOLUTION",
    href: "/home-solutions",
    icon: (HomeSolutionIcon),
  },
  {
    title: "OFFICE SOLUTION",
    href: "/office-solutions",
    icon: (OfficeSolutionIcon),
  },
  {
    title: "READYMADE FURNITURE",
    href: "/readymade-furniture",
    icon: (ReadyMadeFurnitureIcon),
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-bold tracking-widest text-gray-900 uppercase mb-4">
            Services
          </h2>
          {/* Decorative dots + line */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
            <span className="w-10 h-1 bg-red-700 rounded inline-block" />
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 justify-items-center">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center gap-6 w-full max-w-xs"
            >
              {/* Icon circle */}
              <div className="w-28 h-28 rounded-full bg-[#f5ede6] flex items-center justify-center shadow-sm">
                <Image src={service.icon} alt={service.title} />
              </div>

              {/* Title */}
              <h3 className="text-sm font-black tracking-widest text-gray-900 uppercase leading-snug">
                {service.title}
              </h3>

              {/* CTA */}
              <a
                href={service.href}
                className="inline-block bg-red-700 hover:bg-red-800 active:bg-red-900 text-white text-xs font-bold tracking-widest uppercase px-8 py-3 rounded transition-colors duration-200"
              >
                Know More
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}