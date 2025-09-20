// app/products/page.jsx
import Products from "@/components/screen/Products";
import axios from "axios";
import { getMeta } from "@/lib/meta";

export const revalidate = 3600;

// SSR Meta
export async function generateMetadata() {
  const meta = await getMeta("products"); 
  if (!meta) {
    return { title: "محصولات", description: "لیست محصولات سالنامه آپادانا" };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: "https://ctrl.apadanacalendar.com/products" },
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      url: "https://ctrl.apadanacalendar.com/products",
      images: [meta.og_image],
      locale: "fa_IR",
      type: "website",
    },
    robots: { index: meta.can_index, follow: true },
  };
}

export default async function Page() {
  let products = [];
  const meta = await getMeta("products");
  try {
    const res = await axios.get(
      "https://ctrl.apadanacalendar.com/api/products/all",
      { timeout: 5000 }
    );
    products = res.data?.result?.products || [];
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta?.title || "محصولات",
    "url": "https://ctrl.apadanacalendar.com/products",
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
  };

  return (
    <div className="max-md:pt-20 container m-auto">
      <Products products={products} />

      {products.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </div>
  );
}
