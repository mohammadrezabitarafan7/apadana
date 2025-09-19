"use client";
import { useRef, useState } from "react";
import StoryItem from "../ui/StoryItem";
import StoryModal from "../ui/StoryModal";

const StoryList = ({ fallback }) => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="
          flex gap-4 
          overflow-x-auto 
          whitespace-nowrap 
          cursor-grab 
          hide-scrollbar
          px-4 py-6 max-md:py-0
        "
      >
        {fallback.result.products.map((item, i) => (
          <div
            key={i}
            className="shrink-0 m-auto w-28 max-md:w-20 hide-scrollbar"
          >
            <StoryItem {...item} onClick={() => setSelectedStory(item)} />
          </div>
        ))}
      </div>

      <StoryModal
        isOpen={!!selectedStory}
        onClose={() => setSelectedStory(null)}
        stories={fallback.result.products}
        startIndex={fallback.result.products.findIndex((s) => s === selectedStory)}
      />
    </section>
  );
};

export default StoryList;
