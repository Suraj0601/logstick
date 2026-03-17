"use client";

export default function PreDeliveryInspection() {
  return (
    <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-extrabold tracking-widest uppercase text-white mb-5 leading-tight">
          Pre Delivery Inspection
        </h2>

        {/* Red accent line */}
        <div className="w-20 h-1 bg-red-600 rounded mb-8" />

        {/* Description */}
        <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed mb-10 max-w-2xl">
          We inspect 70+ critical points in your flat to ensure a flawless and stress-free handover.
        </p>

        {/* CTA Button */}
        <a
          href="/pre-delivery-inspection"
          className="inline-block bg-red-700 hover:bg-red-800 active:bg-red-900 text-white text-sm font-bold tracking-widest uppercase px-12 py-4 rounded transition-colors duration-200"
        >
          Read More
        </a>
      </div>
    </section>
  );
}