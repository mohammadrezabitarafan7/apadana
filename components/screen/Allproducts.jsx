"use client";
import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ArrowIcon from "../svg/ArrowIcon";

const StyledSwiper = styled(Swiper)`
  .swiper-pagination {
    position: relative;
    top: 0px;
    margin-top: 32px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 8px;
    height: 8px;
    background: #fdd93b;
  }

  .swiper-pagination-bullet:hover {
    background-color: #fdd93b;
  }
`;

const breakpoints = {
  320: { slidesPerView: 2, spaceBetween: 20 },
  480: { slidesPerView: 2, spaceBetween: 20 },
  720: { slidesPerView: 4, spaceBetween: 20 },
};

const AllProducts = ({ fallback }) => {
  const data = fallback?.result;
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex relative flex-col gap-5 py-20 max-md:px-5 w-full">
      {/* Header */}
      <div className="flex flex-row items-center justify-between py-6 max-md:py-2">
        <span className="text-[#17182f] font-black text-lg  max-md:text-sm">
          پرفروش ترین محصولات
        </span>
        <Image
          className="absolute bottom-0 right-12 -z-40"
          width={180}
          height={50}
          alt="سالنامه آپادانا"
          src="/back1.png"
        />
        <Image
          className="absolute left-12 -z-40"
          width={180}
          height={50}
          alt="سالنامه آپادانا"
          src="/back1.png"
        />
        <div className="flex gap-2 items-center border border-gray-600 rounded-md p-2 max-md:p-1 cursor-pointer">
          <span className="text-[#17182f] text-sm max-md:text-xs hover:text-[#fdd400]">
            مشاهده همه
          </span>
          <ArrowIcon size={8} />
        </div>
      </div>

      {/* Swiper */}
      <div className="w-full">
        <StyledSwiper
          breakpoints={breakpoints}
          spaceBetween={15}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {data?.products?.slice(0, 20).map((i) => (
            <SwiperSlide key={i.id}>
              <div
                onClick={() => setSelectedProduct(i)}
                className="bg-[#f6f6f6] rounded-[10px] p-5 flex flex-col gap-3 cursor-pointer"
              >
                <div className="bg-white p-3 rounded-[15px] h-[230px] flex justify-center max-md:h-[150px] overflow-hidden">
                  <Image
                    width={250}
                    height={250}
                    alt={i?.title || "apadana"}
                    src={i?.photo}
                    quality={100}
                    className="m-auto w-full h-full object-contain"
                  />
                </div>
                <hr className="text-gray-400" />
                <span className="font-irans text-[13px] font-semibold text-black text-center leading-relaxed max-md:text-sm truncate">
                  {i.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black/45 backdrop-blur-xl bg-opacity-70 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg p-4 max-w-3xl w-[90%] shadow-2xl"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-black bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <Image
              src={selectedProduct.photo}
              alt={selectedProduct.title || ""}
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto object-contain rounded-lg"
            />
            <p className="text-center mt-4 font-semibold text-lg text-black">
              {selectedProduct.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
