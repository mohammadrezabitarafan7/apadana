"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import useSWR from "swr";
import api from "@/lib/axios";
import styled from "styled-components";

const fetcher = (url) => api.get(url).then((res) => res.data);
const skeletonItems = [1, 2, 3, 4];

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

export default function MySwiper() {

  const { data: sliders, error } = useSWR("/banners", fetcher, {
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
                <div className="h-12 w-full rounded-md bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="w-full max-md:pt-28 px-1">
      <StyledSwiper
        loop={true}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          720: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 1, spaceBetween: 10 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {sliders?.result?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[400px] max-md:h-[160px] rounded-xl overflow-hidden shadow-lg cursor-pointer group">
              <Image
                src={item?.photo || "/note1.png"} 
                alt={item.title || "بدون عنوان"} 
                fill
                className="object-fill transition-transform duration-500"
                sizes="(max-width: 400px) 100vw, 55vw"
                quality={100}
                priority={false} 
              />
              <div className="absolute inset-0  z-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiper>

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
