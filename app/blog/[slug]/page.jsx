// app/blog/[slug]/page.jsx
import Image from "next/image";
import api from "@/lib/axios";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await api.get(`/article?slug=${slug}`);
  const blog = res?.data?.result?.[0];
  

  if (!blog) return { title: "مقاله یافت نشد" };

  return {
    title: blog.title,
    description: blog.short_text || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.short_text || blog.title,
      images: blog.photo ? [blog.photo] : [],
      type: "article",
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const res = await api.get(`/article?slug=${slug}`);
  const blog = res?.data?.result?.[0];

  if (!blog) return <p>مقاله یافت نشد</p>;

  const htmlText = blog.text || ""; 

  return (
    <article className="container mx-auto px-4 py-12 flex flex-col gap-8">
      {blog.photo && (
        <div className="w-1/2 m-auto h-[350px] relative rounded-xl overflow-hidden shadow-md">
          <Image
            src={blog?.photo}
            alt={blog?.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
        <time className="text-sm text-gray-500">{blog.jalaliDate}</time>
      </header>

      <div
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: htmlText }}
      />
      <p className="text-gray-800">{blog.short_text}</p>
    </article>
  );
}
