// app/blog/[slug]/page.jsx
import Image from "next/image";
import api from "@/lib/axios";
import { getMeta } from "@/lib/meta";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug } = params;

  const meta = await getMeta(`blog/${slug}`);
  if (!meta) {
    return {
      title: "مقالات",
      description: "لیست مقالات سالنامه آپادانا",
      robots: { index: false, follow: true }
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://ctrl.apadanacalendar.com/blog/${slug}` },
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      url: `https://ctrl.apadanacalendar.com/blog/${slug}`,
      images: [meta.og_image],
      locale: "fa_IR",
      type: "article",
    },
    robots: { index: meta.can_index, follow: true },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const res = await api.get(`/article?slug=${slug}`);
  const blog = res?.data?.result?.[0];

  if (!blog) return <p className="text-center py-12">مقاله یافت نشد</p>;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": blog.photo ? [blog.photo] : [],
    "author": { "@type": "Person", "name": blog.author || "سالنامه آپادانا" },
    "datePublished": blog.published_at,
    "dateModified": blog.updated_at || blog.published_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ctrl.apadanacalendar.com/blog/${slug}`
    }
  };

  return (
    <article className="container mx-auto px-4 py-12 flex flex-col gap-8">
      {blog.photo && (
        <div className="w-1/2 m-auto h-[350px] relative rounded-xl overflow-hidden shadow-md">
          <Image
            src={blog.photo}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
        <time className="text-sm text-gray-500">{blog.jalaliDate}</time>
      </header>

      <div className="text-black" dangerouslySetInnerHTML={{ __html: blog.text || '' }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </article>
  );
}
