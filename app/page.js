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
  let blogs = [];

  try {
    const [resCategories, resBlogs] = await Promise.all([
      api.get("/categories"),
      api.get("/articles"),
    ]);

    categories = resCategories.data;
    blogs = resBlogs.data;
  } catch (err) {
    console.error(err);
  }

  return (
    <main className="flex flex-col gap-[32px] m-auto p-12 container items-center max-md:px-0">
      <MySwiper />
      <StoryList />
      <Category fallback={categories} />
      <ApadanaSection />
      <Banner />
      <BlogSection fallback={blogs} />
      <CardContacts />
      <MapSection />
    </main>
  );
}

