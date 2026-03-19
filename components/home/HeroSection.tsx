"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')",
        }}
      />

      {/* Optional subtle overlay for depth */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Floating Card */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-10 py-12 mx-4 max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-4">
          Your Furniture and Interior Design Experts
        </h1>

        <p className="text-gray-500 text-base mb-8 tracking-wide">
          One-Stop Solution for Every Space
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          Customise Your Space
        </a>
      </div>
    </section>
  );
}