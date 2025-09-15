// app/[slug]/page.js
import axios from "axios";
import ProductsModal from "../../components/screen/ProductsModal";
import Link from "next/link";

// برای SEO
export async function generateMetadata({ params }) {
  const { slug } = params;

  let category = null;

  try {
    const url = `https://api.apadanacalendar.com/api/products?slug=${slug}`;
    const res = await axios.get(url);

    if (res.data.success) {
      category = res.data.result.category;
    }
  } catch (error) {
    console.error("Error fetching category:", error);
  }

  return {
    title: category?.title || "محصولات",
    description: category?.short_text || `مشاهده محصولات دسته‌بندی ${category?.title || slug}`,
    openGraph: {
      title: category?.title || "محصولات",
      description: category?.short_text || `مشاهده محصولات دسته‌بندی ${category?.title || slug}`,
      images: category?.photo ? [category.photo] : [],
    },
  };
}

const Page = async ({ params }) => {
  const { slug } = params;

  let category = null;
  let products = [];

  try {
    const url = `https://api.apadanacalendar.com/api/products?slug=${slug}`;
    const res = await axios.get(url);

    if (res.data.success) {
      category = res.data.result.category;
      products = res.data.result.products;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="container mx-auto p-4">
    

      {products.length === 0 ? (
        <div className="flex flex-col justify-center gap-3 py-12">
        <p className="text-gray-500 text-center ">هیچ محصولی یافت نشد.</p>
        <Link href='/' className="bg-blue-500 w-fit m-auto px-6 rounded-xl py-1.5"> خانه</Link>
        </div>
      ) : (
        <ProductsModal products={products} />
      )}
    </div>
  );
};

export default Page;
