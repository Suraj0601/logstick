"use client";

import Image from "next/image";

import BedImage from "@/public/Images/Home-Solution/Bedroom-Furniture/Beds/bed-2.png";
import WardrobeImage from "@/public/Images/Home-Solution/Bedroom-Furniture/Wardrobes/wardrobes-2.png";
import DresserImage from "@/public/Images/Home-Solution/Bedroom-Furniture/Beds/bed-2.png";
import ShoeRackImage from "@/public/Images/Home-Solution/Bedroom-Furniture/Beds/bed-2.png";
import SofaImage from "@/public/Images/Home-Solution/Bedroom-Furniture/Beds/bed-2.png";


const FURNITURE = [
  {
    title: "BED",
    products: 10,
    href: "/readymade-furniture/bed",
    image: BedImage,
  },
  {
    title: "WARDROBE",
    products: 5,
    href: "/readymade-furniture/wardrobe",
    image: WardrobeImage,
  },
  // {
  //   title: "DRESSER",
  //   products: 6,
  //   href: "/readymade-furniture/dresser",
  //   image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  // },
  // {
  //   title: "SHOE RACK",
  //   products: 0,
  //   href: "/readymade-furniture/shoe-rack",
  //   image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
  // },
  // {
  //   title: "SOFA",
  //   products: 0,
  //   href: "/readymade-furniture/sofa",
  //   image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
  // },
];

export default function ReadymadeFurniture() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-gray-900 mb-4">
            Ready Made Furniture Range
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-10 h-1 bg-red-700 rounded" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Grid — 4 cols top row, 1 bottom-left */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Top row: 4 cards */}
          {FURNITURE.slice(0, 4).map((item) => (
            <FurnitureCard key={item.title} item={item} />
          ))}

          {/* Bottom row: 1 card (same width as one column) */}
          {FURNITURE.slice(4).map((item) => (
            <FurnitureCard key={item.title} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FurnitureCard({ item }: { item: { title: string; products: number; href: string; image: any } }) {
  return (
    <a
      href={item.href}
      className="group relative overflow-hidden aspect-[3/4] block rounded-sm"
    >
      {/* Background image */}
      <Image
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay — stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

      {/* Text — bottom center */}
      <div className="absolute bottom-0 inset-x-0 flex flex-col items-center pb-8 gap-1">
        <h3 className="text-white text-base font-bold tracking-widest uppercase drop-shadow">
          {item.title}
        </h3>
        <p className="text-white/70 text-xs tracking-widest uppercase">
          {item.products} Products
        </p>
      </div>
    </a>
  );
}