"use client";

const SERVICES = [
  {
    title: "PRE DELIVERY INSPECTION",
    href: "/pre-delivery-inspection",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        {/* House outline */}
        <path d="M14 38L40 14l26 24" stroke="#b0896a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="22" y="38" width="36" height="26" rx="1" stroke="#b0896a" strokeWidth="2.5"/>
        {/* Door */}
        <rect x="34" y="50" width="12" height="14" rx="1" stroke="#b0896a" strokeWidth="2"/>
        {/* Magnifier */}
        <circle cx="54" cy="42" r="8" stroke="#c0392b" strokeWidth="2.5"/>
        <line x1="60" y1="48" x2="66" y2="54" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round"/>
        {/* PDI text lines */}
        <line x1="30" y1="44" x2="42" y2="44" stroke="#b0896a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="48" x2="40" y2="48" stroke="#b0896a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "HOME SOLUTION",
    href: "/home-solutions",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        {/* Sofa */}
        <rect x="14" y="44" width="52" height="18" rx="4" stroke="#b0896a" strokeWidth="2.5"/>
        <rect x="10" y="48" width="10" height="14" rx="3" stroke="#b0896a" strokeWidth="2.5"/>
        <rect x="60" y="48" width="10" height="14" rx="3" stroke="#b0896a" strokeWidth="2.5"/>
        <path d="M14 44v-6a4 4 0 014-4h44a4 4 0 014 4v6" stroke="#b0896a" strokeWidth="2.5"/>
        {/* Plant */}
        <line x1="68" y1="42" x2="68" y2="28" stroke="#4a7c59" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="68" cy="24" rx="6" ry="8" stroke="#4a7c59" strokeWidth="2"/>
        {/* Picture frame */}
        <rect x="20" y="12" width="18" height="14" rx="1" stroke="#b0896a" strokeWidth="2"/>
        <line x1="20" y1="19" x2="38" y2="19" stroke="#b0896a" strokeWidth="1.5"/>
        <line x1="29" y1="12" x2="29" y2="26" stroke="#b0896a" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "OFFICE SOLUTION",
    href: "/office-solutions",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        {/* Desk */}
        <rect x="12" y="46" width="56" height="6" rx="2" stroke="#b0896a" strokeWidth="2.5"/>
        <line x1="20" y1="52" x2="20" y2="66" stroke="#b0896a" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="60" y1="52" x2="60" y2="66" stroke="#b0896a" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Monitor */}
        <rect x="26" y="28" width="28" height="18" rx="2" stroke="#b0896a" strokeWidth="2.5"/>
        <line x1="36" y1="46" x2="44" y2="46" stroke="#b0896a" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="40" y1="46" x2="40" y2="52" stroke="#b0896a" strokeWidth="2" strokeLinecap="round"/>
        {/* Chair back */}
        <path d="M30 66v-8a4 4 0 014-4h12a4 4 0 014 4v8" stroke="#b0896a" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Cabinet */}
        <rect x="56" y="28" width="14" height="18" rx="1" stroke="#b0896a" strokeWidth="2"/>
        <line x1="56" y1="37" x2="70" y2="37" stroke="#b0896a" strokeWidth="1.5"/>
        <circle cx="63" cy="33" r="1.5" fill="#b0896a"/>
        <circle cx="63" cy="42" r="1.5" fill="#b0896a"/>
      </svg>
    ),
  },
  {
    title: "READYMADE FURNITURE",
    href: "/readymade-furniture",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        {/* Armchair */}
        <rect x="18" y="42" width="44" height="16" rx="4" stroke="#b0896a" strokeWidth="2.5"/>
        <rect x="14" y="46" width="8" height="12" rx="3" stroke="#b0896a" strokeWidth="2.5"/>
        <rect x="58" y="46" width="8" height="12" rx="3" stroke="#b0896a" strokeWidth="2.5"/>
        <path d="M18 42v-8a4 4 0 014-4h36a4 4 0 014 4v8" stroke="#b0896a" strokeWidth="2.5"/>
        {/* Tag */}
        <path d="M44 22l12 12-8 8-12-12V22h8z" stroke="#c0392b" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="50" cy="28" r="1.5" fill="#c0392b"/>
        {/* Checkmark on tag */}
        <path d="M42 34l2 2 4-4" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
                {service.icon}
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