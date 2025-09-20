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
import { getMeta } from "@/lib/meta";

export const revalidate = 3600; 

export async function generateMetadata() {
  const meta = await getMeta("/"); 
  if (!meta) {
    return { title: "Default Title", description: "Default description" };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://ctrl.apadanacalendar.com/` },
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      url: `https://ctrl.apadanacalendar.com/`,
      images: [meta.og_image],
      locale: "fa_IR",
      type: "website",
    },
    robots: { index: meta.can_index, follow: true },
  };
}

export default async function Home() {
    const meta = await getMeta("/");

  let categories = [];
  let blogs = [];
  let products = [];
  let stories = [];

  try {
    const [resCategories, resBlogs, resProducts,resStory] = await Promise.all([
      api.get("/categories").catch(() => ({ data: [] })),
      api.get("/articles").catch(() => ({ data: [] })),
      api.get("/products/all").catch(() => ({ data: [] })),
      api.get("/products/home").catch(() => ({ data: [] })),
    ]);

    categories = resCategories.data ?? [];
    blogs = resBlogs.data ?? [];
    products = resProducts.data ?? [];
    stories = resStory.data ?? [];
  } catch (err) {
    // console.error("Error fetching data:", err.message);
  }

  return (
    
    <main className="flex flex-col gap-[32px] m-auto container items-center max-md:px-0">
      <MySwiper />
      <StoryList fallback={stories} />
      <Category fallback={categories} />
      <AllProducts fallback={products} />
      <Banner />
      <ApadanaSection />
      <BlogSection fallback={blogs} />
      <CardContacts />
      <MapSection />
        {meta?.structured_data && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.structured_data) }}
        />
      )}
    </main>
    
  );
}
