"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import useSWR from "swr";
import api from "@/lib/axios";

const fetcher = (url) => api.get(url).then((res) => res.data);
const skeletonItems = [1, 2, 3, 4];

export default function MySwiper() {
  const { data: sliders, error } = useSWR("/sliders", fetcher, {
    fallbackData: [
      { id: 1, title: "سالنامه اروپایی", home_carousel: "/note1.png" },
      { id: 2, title: "سالنامه رقعی", home_carousel: "/note3.png" },
      { id: 3, title: "سالنامه پالتویی", home_carousel: "/note4.png" },
      { id: 4, title: "سالنامه چرم", home_carousel: "/note7.png" },
    ],
  });

  if (error) return <p className="text-red-500">خطا در دریافت اسلایدرها</p>;
  if (!sliders)
    return (
      <div className="flex flex-col gap-3 px-3 mt-20 justify-center">
        <div className="flex flex-row  gap-6 max-md:flex-col ">
          {skeletonItems.map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl py-12 px-4  shadow-2xl bg-gray-300 animate-pulse w-[250px]"
            >
              <div className="flex gap-2">
                <div className="h-12 w-full rounded-md  bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="w-full py-12 max-md:py-0">
      <Swiper
        loop={true}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 16 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          720: { slidesPerView: 3.2, spaceBetween: 24 },
          1024: { slidesPerView: 1.1, spaceBetween: 10 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {sliders?.result?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[370px] rounded-xl overflow-hidden shadow-lg cursor-pointer group">
              <Image
                src={item?.photo || "/note1.png"} // fallback اگر عکس نبود
                alt={item.title || "بدون عنوان"} // alt امن
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 100px) 100vw, 33vw"
                quality={100}
                priority={false} // false = lazy load, true = preload
              />

              <div className="absolute inset-0 bg-black/20 z-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #fdd400;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #fdd400;
        }
      `}</style>
    </div>
  );
}
