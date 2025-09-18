// app/[slug]/page.js
import axios from "axios";
import ProductsModal from "../../components/screen/ProductsModal";
import Link from "next/link";
import { getMeta } from "@/lib/meta";

// SSR Meta
export async function generateMetadata({ params }) {
  const { slug } = params;

  const meta = await getMeta(slug);
  if (!meta) {
    return { title: "محصولات", description: "لیست محصولات سالنامه آپادانا" };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://ctrl.apadanacalendar.com/${slug}` },
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      url: `https://ctrl.apadanacalendar.com/${slug}`,
      images: [meta.og_image],
      locale: "fa_IR",
      type: "website",
    },
    robots: { index: meta.can_index, follow: true },
  };
}

const Page = async ({ params }) => {
  const { slug } = params;

  let category = null;
  let products = [];

  try {
    const url = `https://ctrl.apadanacalendar.com/api/products?slug=${slug}`;
    const res = await axios.get(url);

    if (res.data.success) {
      category = res.data.result.category;
      products = res.data.result.products || [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  // Structured Data
  const structuredData =
    products.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": category?.title || slug,
          "url": `https://ctrl.apadanacalendar.com/${slug}`,
          "mainEntity": products.map((product) => ({
            "@type": "Product",
            "name": product.title,
            "image": product.image,
            "description": product.description,
            "sku": product.sku,
            "brand": { "@type": "Brand", "name": "آپادانا" },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IRR",
              "price": product.price,
              "availability": "https://schema.org/InStock"
            }
          }))
        }
      : null;

  return (
    <div className="container mx-auto p-4 max-md:pt-28">
      {products.length === 0 ? (
        <div className="flex flex-col justify-center gap-3 py-12">
          <p className="text-gray-500 text-center ">هیچ محصولی یافت نشد.</p>
          <Link
            href="/"
            className="bg-blue-500 w-fit m-auto px-6 rounded-xl py-1.5"
          >
            خانه
          </Link>
        </div>
      ) : (
        <ProductsModal products={products} />
      )}

      {/* Structured Data خارج از main */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </div>
  );
};

export default Page;
