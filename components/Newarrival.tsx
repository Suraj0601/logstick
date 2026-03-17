"use client";

const PRODUCTS = [
  {
    id: 1,
    name: "Vikoz",
    originalPrice: 17000,
    salePrice: 14500,
    discount: -14.71,
    isNew: false,
    href: "/products/vikoz",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    id: 2,
    name: "Neim",
    originalPrice: 16500,
    salePrice: 13500,
    discount: -18.18,
    isNew: false,
    href: "/products/neim",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 3,
    name: "Dreween",
    originalPrice: 15000,
    salePrice: 13500,
    discount: -10,
    isNew: false,
    href: "/products/dreween",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 4,
    name: "Amequi",
    originalPrice: 10000,
    salePrice: 8500,
    discount: -15,
    isNew: false,
    href: "/products/amequi",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
  },
  {
    id: 5,
    name: "Orven",
    originalPrice: 12600,
    salePrice: 10000,
    discount: -20.45,
    isNew: false,
    href: "/products/orven",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
  {
    id: 6,
    name: "Stelio",
    originalPrice: 9200,
    salePrice: 6900,
    discount: -25,
    isNew: false,
    href: "/products/stelio",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&q=80",
  },
  {
    id: 7,
    name: "Calven",
    originalPrice: 13500,
    salePrice: 9950,
    discount: -26.32,
    isNew: true,
    href: "/products/calven",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80",
  },
  {
    id: 8,
    name: "Brexo",
    originalPrice: 11800,
    salePrice: 9500,
    discount: -19.44,
    isNew: true,
    href: "/products/brexo",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
  },
];

export default function NewArrival() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-gray-900 mb-4">
            New Arrival
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-10 h-1 bg-red-700 rounded" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group block bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Discount badge */}
                <span className="absolute top-3 left-3 bg-black text-white text-[11px] font-bold px-2 py-1 rounded">
                  {product.discount.toFixed(2)}%
                </span>

                {/* Hover bottom bar: "Quick View" or "New" */}
                <div
                  className={`absolute bottom-0 inset-x-0 py-2.5 flex items-center justify-center
                    translate-y-full group-hover:translate-y-0 transition-transform duration-300
                    ${product.isNew ? "bg-red-700" : "bg-black/80"}`}
                >
                  <span className="text-white text-xs font-bold tracking-widest uppercase">
                    {product.isNew ? "New" : "Quick View"}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-900 text-sm font-bold">
                    ₹{product.salePrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}