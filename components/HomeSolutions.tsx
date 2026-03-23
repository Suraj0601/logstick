"use client";

import Image from "next/image";

import ModuleKitchenImage from "@/public/Images/Home-Solution/Modular-KItchen/Island-Kitchen/Island-kitchen-1.webp";
import WardrobesImage from "@/public/Images/Home-Solution/Wardrobes/Free-standing-Wardrobe/free-standing-wardrobe-1.png";
import LivingRoomImage from "@/public/Images/Home-Solution/Living-Room-Furniture/Accent-Chairs/accent-chair-1.png";
import BedRoomImage  from "@/public/Images/Home-Solution/Bedroom-Furniture/Beds/bed-1.png";

const SOLUTIONS = [
  {
    title: "MODULAR KITCHEN",
    href: "/home-solutions/modular-kitchen",
    image: ModuleKitchenImage,
  },
  {
    title: "WARDROBES",
    href: "/home-solutions/wardrobes",
    image: WardrobesImage,
  },
  {
    title: "LIVING ROOM FURNITURE",
    href: "/home-solutions/living-room-furniture",
    image: LivingRoomImage,
  },
  {
    title: "BEDROOM FURNITURE",
    href: "/home-solutions/bedroom-furniture",
    image: BedRoomImage,
  },
];

export default function HomeSolutions() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-gray-900 mb-4">
            Home Solutions
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-10 h-1 bg-red-700 rounded" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {SOLUTIONS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden aspect-[4/3] block"
            >
              {/* Background image */}
              <Image
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4">
                <h3 className="text-white text-sm md:text-base font-bold tracking-widest uppercase text-center drop-shadow">
                  {item.title}
                </h3>
                <span className="border border-white text-white text-xs font-bold tracking-widest uppercase px-6 py-2 group-hover:bg-white group-hover:text-gray-900 transition-colors duration-200">
                  VIEW
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}