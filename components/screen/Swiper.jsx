"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const MySwiper = () => {
  const data = [
    { id: 1, title: "سالنامه اروپایی", home_carousel: "/note1.png" },
    { id: 2, title: "سالنامه رقعی", home_carousel: "/note3.png" },
    { id: 3, title: "سالنامه پالتویی", home_carousel: "/note4.png" },
    { id: 4, title: "سالنامه چرم", home_carousel: "/note7.png" },
  ];

  return (
    <div className="w-full py-12 max-md:py-0 ">
      <Swiper
        loop={true}
        centeredSlides={true}
        // autoplay={{ delay: 5000 }}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 16 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          720: { slidesPerView: 3.2, spaceBetween: 24 },
          1024: { slidesPerView: 1.1, spaceBetween: 10 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[370px] rounded-xl overflow-hidden shadow-lg cursor-pointer group ">
              {/* تصویر */}
              <Image
                src={item.home_carousel}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 100pxpx) 100vw, 33vw"
                quality={100}
              />

              {/* لایه مشکی نیمه‌شفاف */}
              <div className="absolute inset-0 bg-black/20 z-10"></div>

              {/* متن روی تصویر */}
              {/* <div className="absolute  bottom-4 left-4 right-4 z-20 flex justify-between items-center px-3 py-2 bg-black/30 rounded-md">
                <span className="text-white font-bold text-sm sm:text-base">
                  {item.title}
                </span>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background:#fdd400;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #fdd400;
        }
      `}</style>
    </div>
  );
};

export default MySwiper;
