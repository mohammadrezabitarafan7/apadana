"use client";
import { useState } from "react";
import Image from "next/image";

const ProductItem = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer min-h-[400px] bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col group"
      >
  
        <div className="w-full h-full relative">
          <Image
            src={product.photo}
            alt={product.title}
            fill
            className="object-contian group-hover:scale-105 transition-transform duration-300"
          />
        </div>

      
        <div className="p-4 flex flex-col gap-3">
          <h2 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug">
            {product.title}
          </h2>
          <span className="text-base font-medium text-blue-600">
            {product.price}
          </span>
        </div>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-[90%] max-w-3xl">
            <Image
              src={product.photo}
              alt={product.title}
              width={1000}
              height={1000}
              className="rounded-sm object-cover"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 text-black right-2  px-2 py-1  hover:text-gray-700 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
