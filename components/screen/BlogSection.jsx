import ArrowIcon from "@/components/svg/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  return (
    <div className="flex relative flex-col gap-12  container p-12 max-md:py-12 max-md:px-4">
      {/* Header */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl text-[#1E1E1E] font-bold max-md:text-sm">مقالات منتشر شده</h1>
        <Link
          className="flex items-center gap-3 border border-[#4C4C4C] p-2 rounded-xl hover:"
          href="/articles"
        >
          <span className="text-base text-[#4C4C4C] max-md:text-xs">مشاهده همه</span>
          <ArrowIcon size={8} />
        </Link>
      </div>
      <Image className="absolute left-12 -z-40" width={180} height={50} alt="سالنامه آپادانا" src="/back1.png" />
      <Image className="absolute bottom-0 right-12 -z-40" width={180} height={50} alt="سالنامه آپادانا" src="/back1.png" />

      {/* Content */}
      <div className="grid grid-cols-12 gap-6 max-h-[483px] max-md:flex-col max-md:flex ">
        {/* Left big card */}
        <article className="col-span-6 flex flex-col gap-5 bg-white shadow-2xl rounded-[20px] p-6 hover:scale-105 duration-300 cursor-pointer">
          <Image
            priority
            width={600}
            height={250}
            className="w-full h-[250px] object-cover rounded-xl"
            alt="طرح روی جلد سررسید آپادانا - نمونه طراحی اختصاصی"
            src="/img1.png"
          />
          <div className="grid grid-cols-12 items-start">
            <div className="flex col-span-9 flex-col gap-3">
              <h2 className="text-[#070707] font-black text-lg">
                طرح روی جلد سررسید
              </h2>
              <p className="text-[#3a3a3a] text-sm line-clamp-3">
                یکی از نکات مهمی که افراد، ارگان‌ها و شرکت‌های دولتی و خصوصی را
                به تهیه سالنامه برای اهدا به پرسنل و ارباب رجوع‌های خود ترغیب
                می‌کند، طرح روی جلد سررسید ها است. هر چقدر این طرح از زیبایی
                بصری بیشتری برخوردار باشد و استانداردهای طراحی در آن رعایت گردد،
                توجه افراد زیادتری را به خود جلب می‌کند. باید خاطر نشان کرد که
                در سالنامه آپادانا امکان طراحی اختصاصی برای طرح روی جلد سررسید
                های سفارشی وجود دارد بنابراین شما می‌توانید با استفاده از طراحی
                متناسب با زمینه کاری خود و بهره‌مندی از لوگو، مناسب‌ترین مدل را
                برای سالنامه‌های اهدایی خود در نظر بگیرید و مجموعه ما بهترین
                طراحی به همراه کیفیتی مناسب را به شما ارائه خواهد کرد.
              </p>
            </div>
            <time
              className="col-span-3 text-end text-[#070707] text-xs"
              dateTime="2025-08-11"
            >
              1404/05/20
            </time>
          </div>
        </article>

        {/* Right small cards */}
        <div className="col-span-6 flex flex-col gap-6">
          {[1, 2].map((i) => (
            <article
              key={i}
              className="bg-white grid grid-cols-12 rounded-[20px] p-6 shadow-xl hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="col-span-5  h-[182px]">
                <Image
                  width={182}
                  height={182}
                  className="w-full h-full rounded-2xl object-cover"
                  alt={`تصویر مقاله طرح روی جلد سررسید آپادانا ${i}`}
                  src="/img1.png"
                />
              </div>
              <div className="col-span-7 flex flex-col justify-between gap-3 px-4">
                <h2 className="text-[#070707] font-black text-base">
                  طرح روی جلد سررسید
                </h2>
                <p className="text-[#3a3a3a] text-sm line-clamp-3">
                  یکی از نکات مهمی که افراد، ارگان‌ها و شرکت‌های دولتی و خصوصی
                  را به تهیه سالنامه برای اهدا به پرسنل و ارباب رجوع‌های خود
                  ترغیب می‌کند، طرح روی جلد سررسید ها است. هر چقدر این طرح از
                  زیبایی بصری بیشتری برخوردار باشد و استانداردهای طراحی در آن
                  رعایت گردد، توجه افراد زیادتری را به خود جلب می‌کند. باید خاطر
                  نشان کرد که در سالنامه آپادانا امکان طراحی اختصاصی برای طرح
                  روی جلد سررسید های سفارشی وجود دارد بنابراین شما می‌توانید با
                  استفاده از طراحی متناسب با زمینه کاری خود و بهره‌مندی از لوگو،
                  مناسب‌ترین مدل را برای سالنامه‌های اهدایی خود در نظر بگیرید و
                  مجموعه ما بهترین طراحی به همراه کیفیتی مناسب را به شما ارائه
                  خواهد کرد.
                </p>
                <time
                  className="text-end text-[#070707] text-xs"
                  dateTime="2025-08-11"
                >
                  1404/05/20
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
