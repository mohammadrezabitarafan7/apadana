import ArrowIcon from "@/components/svg/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

const BlogSection = ({ fallback }) => {
  if (!fallback || fallback.length === 0) return null;

  const blogs = fallback?.result.slice(0, 3);

  return (
    <div className="flex relative flex-col gap-12 container py-12 max-md:py-12 max-md:px-4">
      {/* Header */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl text-[#17182f] font-bold max-md:text-sm">
          مقالات منتشر شده
        </h1>
        <Link
          className="flex items-center gap-3 border border-[#4C4C4C] p-2 rounded-xl"
          href="/blog"
        >
          <span className="text-sm text-[#17182f] max-md:text-xs">
            مشاهده همه
          </span>
          <ArrowIcon size={8} />
        </Link>
      </div>

      {/* پس‌زمینه */}
      <Image
        className="absolute left-12 -z-40"
        width={180}
        height={50}
        alt="سالنامه آپادانا"
        src="/back1.png"
      />
      <Image
        className="absolute bottom-0 right-12 -z-40"
        width={180}
        height={50}
        alt="سالنامه آپادانا"
        src="/back1.png"
      />

      {/* Content */}
      <div className="grid grid-cols-12 gap-6 max-md:flex-col max-md:flex">
        {/* مقاله اول بزرگ */}
        {blogs[0] && (
          <article className="col-span-6 flex flex-col gap-5 bg-white shadow-2xl rounded-[20px] p-6 hover:scale-105 duration-300 cursor-pointer">
            <Image
              priority
              width={600}
              height={250}
              className="w-full h-[250px] object-cover rounded-xl"
              alt={blogs[0].title || "سالنامه آپادانا"}
              src={blogs[0].photo || "/img1.png"}
            />
            <div className="grid grid-cols-12 items-start">
              <div className="flex col-span-9 flex-col gap-3">
                <h2 className="text-[#070707] font-black text-lg">
                  {blogs[0].title}
                </h2>
                <p className="text-[#3a3a3a] text-sm line-clamp-3">
                  {blogs[0].short_text}
                </p>
              </div>
              <time
                className="col-span-3 text-end text-[#070707] text-xs"
                dateTime={blogs[0].date}
              >
                {blogs[0].jalaliDate}
              </time>
            </div>
            <Link href="" className="text-xs text-gray-900  rounded-lg border  w-[20%] py-2 text-center">مشاهده بیشتر</Link>
          </article>
        )}

        {/* دوتای بعدی کوچیک */}
        <div className="col-span-6 flex flex-col gap-6">
          {blogs.slice(1).map((blog) => (
            <article
              key={blog.id}
              className="bg-white grid grid-cols-12 rounded-[20px] p-6 shadow-xl hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="col-span-5 h-[182px]">
                <Image
                  width={182}
                  height={182}
                  className="w-full h-full rounded-2xl object-cover"
                  alt={blog?.title || "apadana"}
                  src={blog?.photo || "/img1.png"}
                />
              </div>
              <div className="col-span-7 flex flex-col justify-between gap-3 px-4">
                <h2 className="text-[#070707] font-black text-base">
                  {blog.title}
                </h2>
                <p className="text-[#3a3a3a] text-sm line-clamp-3">
                  {blog.short_text}
                </p>
                <time
                  className="text-end text-[#070707] text-xs"
                  dateTime={blog.date}
                >
                  {blog.jalaliDate}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;


