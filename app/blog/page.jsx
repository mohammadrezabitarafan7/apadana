import api from "@/lib/axios";
import ClientPagination from "./ClientPagination";
import { getMeta } from "@/lib/meta";

export async function generateMetadata() {
  const meta = await getMeta("blog");
  if (!meta) {
    return { title: "وبلاگ", description: "مطالب وبلاگ آپادانا" };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://ctrl.apadanacalendar.com/blog` },
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      url: `https://ctrl.apadanacalendar.com/blog`,
      images: [meta.og_image],
      locale: "fa_IR",
      type: "website",
    },
    robots: { index: meta.can_index, follow: true },
  };
  

}



export default async function BlogPage({ searchParams }) {
  const perPage = 3;
  const start = Number(searchParams?.start) || 0;

  const res = await api.get("/articles");
  const allBlogs = res.data.result;

  const structuredData = allBlogs.map(blog => ({
    "@type": "Article",
    "headline": blog.title,
    "datePublished": blog.published_at,
    "author": blog.author,
  }));


  return (
    
    <>
      <h1 className="text-center text-4xl font-bakhBold my-8 hidden">وبلاگ</h1>

      {/* Client-side Pagination */}
      <ClientPagination
        allBlogs={allBlogs}
        perPage={perPage}
        initialStart={start}
      />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
}
