"use client";

import Image from "next/image";

import AboutUsImage from "@/public/Images/About-Us.png";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left: Text Content */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-5">
            About Us
          </h2>

          {/* Red underline accent */}
          <div className="w-24 h-1 bg-red-700 mb-8 rounded" />

          <p className="text-gray-700 text-base leading-relaxed mb-10">
            At Logstick, we provide complete interior and furniture solutions — from
            design and manufacturing to on-site installation and quality inspection. With
            in-house production, expert designers, and end-to-end services, we transform
            spaces into functional, stylish environments.
          </p>

          <a
            href="/about"
            className="inline-block bg-red-700 hover:bg-red-800 active:bg-red-900 text-white text-sm font-bold tracking-widest uppercase px-8 py-4 rounded transition-colors duration-200"
          >
            Know More
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full">
          <Image
            src={AboutUsImage}
            alt="Logstick interior design showcase"
            placeholder="blur"
            className="w-full h-[420px] object-cover rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
  );
}