// app/page.jsx
import api from "@/lib/axios";
import Category from "@/components/screen/Category";
import MySwiper from "@/components/screen/Swiper";
import ApadanaSection from "@/components/screen/ApadanaSection";
import Banner from "@/components/screen/Banner";
import BlogSection from "@/components/screen/BlogSection";
import CardContacts from "@/components/screen/CardContacts";
import MapSection from "@/components/screen/MapSection";
import StoryList from "@/components/screen/StoryList";

export const revalidate = 15552000;

export default async function Home() {
  let categories = [];

  try {
    const res = await api.get("/categories"); 
    categories = res.data;
  } catch (err) {
   
  }

  return (
    <main className="flex flex-col gap-[32px] m-auto p-12 container items-center max-md:px-0">
      <MySwiper />
      <StoryList />
      <Category fallback={categories} />
      <ApadanaSection />
      <Banner />
      <BlogSection />
      <CardContacts />
      <MapSection />
    </main>
  );
}
