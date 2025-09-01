import Image from "next/image";

const StoryItem = ({ avatar, name, isLive = false }) => {
  return (
    <div className="whitespace-nowrap select-none my-7">
      <div className="flex flex-col items-center min-w-[100px]">
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-2 border-[#17182f] p-[2px] max-md:w-[65px] max-md:h-[65px]">
          <div className="w-[90px] h-[90px] rounded-full border-2 border-[#fdd400] overflow-hidden max-md:w-[55px] max-md:h-[55px]">
            <div className="relative w-full h-full">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover rounded-full select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <p className="text-[12px] font-medium pt-3 text-black text-center break-words whitespace-normal w-full">
          {name}
        </p>
      </div>
    </div>
  );
};

export default StoryItem;
