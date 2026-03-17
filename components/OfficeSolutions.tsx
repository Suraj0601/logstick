"use client";

const SOLUTIONS = [
  {
    title: "WORKSTATION",
    href: "/office-solutions/workstation",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  },
  {
    title: "OFFICE CHAIRS",
    href: "/office-solutions/office-chairs",
    image: "https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=800&q=80",
  },
  {
    title: "TABLES & MEETING FURNITURE",
    href: "/office-solutions/tables-meeting-furniture",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    title: "STORAGE & RECEPTION",
    href: "/office-solutions/storage-reception",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=800&q=80",
  },
  {
    title: "SOFT SEATING & OFFICE SOFAS",
    href: "/office-solutions/soft-seating-office-sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
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
              <img
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