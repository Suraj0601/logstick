"use client";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    review:
      "The custom dining table they made for us is stunning! It perfectly fits our space and style.",
  },
  {
    id: 2,
    name: "Michael Turner",
    role: "Business Owner",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    review:
      "Their office furniture solutions transformed our workspace. High quality and great design!",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Interior Designer",
    avatar: "https://i.pravatar.cc/80?img=49",
    rating: 5,
    review:
      "Logstick's attention to detail is unmatched. Every piece is crafted with precision and care.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-10 h-1 bg-red-700 rounded" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-red-400 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs italic">{t.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-red-300 text-sm leading-relaxed italic">
                {t.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}