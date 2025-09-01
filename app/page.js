import ApadanaSection from "@/components/screen/ApadanaSection";
import Banner from "@/components/screen/Banner";
import BlogSection from "@/components/screen/BlogSection";
import CardContacts from "@/components/screen/CardContacts";
import Category from "@/components/screen/Category";
import MapSection from "@/components/screen/MapSection";
import StoryList from "@/components/screen/StoryList";
import MySwiper from "@/components/screen/Swiper";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] m-auto p-12 container items-center max-md:px-0">
      <MySwiper />
      <StoryList />
      <Category />
      <ApadanaSection />
      <Banner />
      <BlogSection />
      <CardContacts />
      <MapSection />
    </main>
  );
}
