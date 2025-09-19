'use client'
import Image from "next/image";

const StoryItem = ({ photo, title, onClick }) => {
  return (
    <div
      className="whitespace-nowrap select-none my-7 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center min-w-[100px]">
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-2 border-[#17182f] p-[2px] max-md:w-[65px] max-md:h-[65px]">
          <div className="w-[90px] h-[90px] rounded-full border-2 border-[#fdd400] overflow-hidden max-md:w-[55px] max-md:h-[55px]">
            <div className="relative w-full h-full">
              <Image
                src={photo || "/logo.png"}
                alt={title || "apadana"}
                fill
                className="object-cover rounded-full select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <p className="text-[10px] font-medium pt-3 text-black text-center w-full line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StoryItem;
