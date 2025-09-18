// app/products/page.jsx  (Next.js 13+ App Router)
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Products({ products }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="p-4 border flex flex-col gap-3 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <Image
            width={129}
            height={120}
            src={item?.photo || "/logo1.png"}
            alt={item?.title}
            className="w-full h-48 object-cover rounded mb-2"
            onClick={() => setSelectedImage(item?.photo)}
          />
          <h2 className="text-sm font-bold text-black">{item?.title}</h2>
          <hr className="text-gray-200" />
          <Link
            href="https://wa.me/989123224288"
            target="_blank"
            className="text-blue-600 text-xs font-semibold"
          >
            {item?.price}
          </Link>
        </div>
      ))}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-xl flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative rounded-xl p-4 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="cursor-pointer text-black rounded-full w-8 h-8 flex items-center justify-center text-xl"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              width={600}
              height={600}
              alt="Product"
              className="rounded-lg object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
