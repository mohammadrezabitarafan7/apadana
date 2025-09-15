// app/blog/ClientPagination.jsx
"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/svg/ArrowIcon";

export default function ClientPagination({ allBlogs, perPage, initialStart }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [start, setStart] = useState(initialStart);

  const totalPages = Math.ceil(allBlogs.length / perPage);

  const blogs = allBlogs.slice(start, start + perPage);

  const handlePageChange = (s) => {
    const safeStart = Math.max(0, Math.min(s, (totalPages - 1) * perPage));
    setStart(safeStart);
    router.push(`/blog?start=${safeStart}`, { scroll: false }); 
  };


  useEffect(() => {
    const s = Number(searchParams.get("start")) || 0;
    setStart(Math.max(0, Math.min(s, (totalPages - 1) * perPage)));
  }, [searchParams]);

  const currentPage = Math.floor(start / perPage) + 1;

  const groupSize = 4;
  const currentGroup = Math.floor((currentPage - 1) / groupSize);
  const groupStart = currentGroup * groupSize + 1;
  const groupEnd = Math.min(groupStart + groupSize - 1, totalPages);

  const pages = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, i) => groupStart + i
  );

  return (
    <div className="container pt-32 m-auto pb-12 flex flex-col gap-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">مقالات منتشر شده</h1>

      {/* Grid مقالات */}
      <div className="grid grid-cols-12 gap-6 max-md:px-2">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="col-span-4 max-md:col-span-6 flex flex-col bg-white shadow p-4 rounded-xl hover:scale-105 duration-300 cursor-pointer"
          >
            <Image
              width={400}
              height={200}
              src={blog?.photo || "/img1.png"}
              alt={blog?.title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <h2 className="text-base font-bold text-gray-900 mt-3">{blog.title}</h2>
            <hr className="my-2" />
            <p className="text-xs leading-loose text-gray-600 line-clamp-3 text-justify">
              {blog?.short_text}
            </p>
            <time className="text-xs text-gray-500 mt-1">
              {blog?.jalaliDate}
            </time>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
        <button
          onClick={() => handlePageChange(start - perPage)}
          disabled={currentPage === 1}
          className="px-3 rotate-180 py-2 border border-gray-800 rounded-lg disabled:opacity-50"
        >
          <ArrowIcon size={8} />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => handlePageChange((p - 1) * perPage)}
            className={`px-3 py-1 border rounded-lg ${
              p === currentPage
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(start + perPage)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border border-gray-800 rounded-lg disabled:opacity-50"
        >
          <ArrowIcon size={8} />
        </button>
      </div>
    </div>
  );
}
