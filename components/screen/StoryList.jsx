"use client";
import { useRef, useState } from "react";
import StoryItem from "../ui/StoryItem";

const StoryList = () => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const list = [
    { name: "سالنامه اروپایی", avatar: "/note1.png", isLive: true },
    { name: "سالنامه رقعی", avatar: "/note5.jpeg" },
    { name: "سالنامه پالتویی", avatar: "/note3.png" },
    { name: "سالنامه چرم", avatar: "/note7.png" },
    { name: "سالنامه وزیری", avatar: "/15.png" },
    { name: "دیوان حافظ", avatar: "/note4.png" },
  ];

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
        {list.map((item, i) => (
          <div
            key={i}
            className="shrink-0 m-auto w-28 max-md:w-20 hide-scrollbar" // عرض ثابت آیتم‌ها
          >
            <StoryItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryList;
