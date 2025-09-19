"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const STORY_DURATION = 5000; // 5 ثانیه

const StoryModal = ({ isOpen, onClose, stories = [], startIndex = 0 }) => {
  const [current, setCurrent] = useState(startIndex);

  const currentStory = stories[current];

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      if (current < stories.length - 1) {
        setCurrent((prev) => prev + 1);
      } else {
        onClose();
      }
    }, STORY_DURATION);

    return () => clearTimeout(timer);
  }, [current, isOpen]);

  if (!isOpen || !currentStory) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="
          relative 
          w-full h-full        /* موبایل تمام صفحه */
          md:w-[90%] md:h-auto md:max-w-md  /* دسکتاپ وسط صفحه */
          bg-black/30 backdrop:blur-lg md:rounded-2xl overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
   

        {/* عکس استوری */}
        <div className="relative w-full h-full md:h-[400px]">
          <Image
            src={currentStory?.photo || "/logo.png"}
            alt={currentStory?.title || "apadana"}
            fill
            className="object-cover max-md:object-contain"
          />

          {current > 0 && (
            <button
              onClick={() => setCurrent((prev) => prev - 1)}
              className="absolute left-2 cursor-pointer top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center"
            >
                 ›
             
            </button>
          )}
          {current < stories.length - 1 && (
            <button
              onClick={() => setCurrent((prev) => prev + 1)}
              className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center"
            >
              ‹
            </button>
          )}
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center z-20">
          <h2 className="text-lg font-semibold text-white">
            {currentStory.name}
          </h2>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onClose();
          }}
          className="
    absolute top-3 right-3 cursor-pointer
    w-10 h-10 flex items-center justify-center 
    text-white bg-black/50 
    hover:bg-black/70 
    rounded-full
  "
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default StoryModal;
