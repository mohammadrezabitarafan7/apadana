import api from "@/lib/axios";
import Category from "@/components/screen/Category";
import MySwiper from "@/components/screen/Swiper";
import ApadanaSection from "@/components/screen/ApadanaSection";
import Banner from "@/components/screen/Banner";
import BlogSection from "@/components/screen/BlogSection";
import CardContacts from "@/components/screen/CardContacts";
import MapSection from "@/components/screen/MapSection";
import StoryList from "@/components/screen/StoryList";
import AllProducts from "@/components/screen/Allproducts";

export const revalidate = 3600; 

export default async function Home() {
  let categories = [];
  let blogs = [];
  let products = [];

  try {
    const [resCategories, resBlogs, resProducts] = await Promise.all([
      api.get("/categories").catch(() => ({ data: [] })),
      api.get("/articles").catch(() => ({ data: [] })),
      api.get("/products/all").catch(() => ({ data: [] })),
    ]);
  console.log("PR",products)

    categories = resCategories.data ?? [];
    blogs = resBlogs.data ?? [];
    products = resProducts.data ?? [];
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }

  return (
    <main className="flex flex-col gap-[32px] m-auto container items-center max-md:px-0">
      <MySwiper />
      <StoryList />
      <Category fallback={categories} />
      <AllProducts fallback={products} />
      <Banner />
      <ApadanaSection />
      <BlogSection fallback={blogs} />
      <CardContacts />
      <MapSection />
    </main>
  );
}
