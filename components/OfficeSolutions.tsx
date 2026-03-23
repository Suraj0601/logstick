"use client";

import Image from "next/image";

import WorkStationImage from "@/public/Images/Office-Solution/Workstation/Cluster-2-4-Seater-Workstations/Cluster-2-4-Seater-Workstations-1.webp"
import OfficeChairImage from "@/public/Images/Office-Solution/OFFICE-CHAIRS/Conference-Room-Chairs/conference-room-chair-1.png"
import SoftSeatingReceptionImage from "@/public/Images/Office-Solution/SOFT-SEATING-&-OFFICE-SOFAS/Accent-&-Lounge Chairs/accent-&-lounge-chair-1.png"
import StorageReceptionImage from "@/public/Images/Office-Solution/STORAGE-&-RECEPTION/Bookshelves-Open-Shelving/Bookshelves-Open-Shelving-1.png"
import TablesMeatingFurnitureImage from "@/public/Images/Office-Solution/TABLES-&-MEETING-FURNITURE/Collaboration-Discussion-Table/Collaboration-Discussion-Table-1.png"

const SOLUTIONS = [
  {
    title: "WORKSTATION",
    href: "/office-solutions/workstation",
    image: WorkStationImage,
  },
  {
    title: "OFFICE CHAIRS",
    href: "/office-solutions/office-chairs",
    image: OfficeChairImage,
  },
  {
    title: "TABLES & MEETING FURNITURE",
    href: "/office-solutions/tables-meeting-furniture",
    image: TablesMeatingFurnitureImage,
  },
  {
    title: "STORAGE & RECEPTION",
    href: "/office-solutions/storage-reception",
    image: StorageReceptionImage,
  },
  {
    title: "SOFT SEATING & OFFICE SOFAS",
    href: "/office-solutions/soft-seating-office-sofas",
    image: SoftSeatingReceptionImage,
  },
];

export default function OfficeSolutions() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-gray-900 mb-4">
            Office Solutions
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
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300" />

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