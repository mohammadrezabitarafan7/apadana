import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ApadanaSection = () => {
  return (
    <>
      <Head>
        <title>سالنامه آپادانا | چاپ و هدایا تبلیغاتی با کیفیت</title>
        <meta
          name="description"
          content="سالنامه آپادانا از سال ۱۳۸۵ با هدف فرهنگسازی و ارائه خدمات چاپ و تبلیغات شروع به فعالیت نمود. مشاهده محصولات و دانلود کاتالوگ‌های دیجیتال."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "سالنامه آپادانا",
              description:
                "سالنامه آپادانا از سال ۱۳۸۵ با هدف فرهنگسازی و ارائه خدمات چاپ و تبلیغات شروع به فعالیت نمود. ارائه بهترین خدمات و محصولات با کیفیت.",
              brand: {
                "@type": "Brand",
                name: "Apadana",
              },
              offers: [
                {
                  "@type": "Offer",
                  url: "/catalogs/apadana_catalog.pdf",
                  name: "دانلود کاتالوگ ۱",
                },
                {
                  "@type": "Offer",
                  url: "/catalogs/apadana_catalog_2.pdf",
                  name: "دانلود کاتالوگ ۲",
                },
              ],
            }),
          }}
        />
      </Head>

      <section className="grid relative grid-cols-12 w-full gap-6 my-12 max-md:flex max-md:flex-col max-md:px-4">
        <div className="col-span-6 flex justify-center rounded-2xl">
          <Image
          
            className=" m-auto rounded-2xl object-cover w-full h-full"
            src="/note4.png"
            alt="سالنامه آپادانا"
            width={300}
            height={300}
            quality={100}
          />
        </div>

      
        <div className="col-span-6 text-[#121212] flex flex-col gap-4">
          <h1 className="text-3xl font-bold">سالنامه آپادانا</h1>
          <p>
            سالنامه آپادانا در سال ۱۳۸۵ با هدف فرهنگسازی در زمینه ارائه خدمات
            مطلوب چاپ، تبلیغات بازاریابی و واردات هدایای تبلیغاتی شروع به فعالیت
            نمود.
          </p>
          <p>
            این مجموعه با گرد هم آوردن گروه‌های تخصصی در زمینه چاپ و صحافی با
            بهره‌گیری از مدرن‌ترین ماشین‌آلات سعی دارد تا از طریق ارائه خدمات
            یکپارچه تبلیغاتی به شکل تخصصی پاسخگوی کلیه نیازهای مشتریان خود باشد.
          </p>
          <p>
            خداوند متعال را سپاس می‌گوئیم که ما را توانی بخشید تا بار دیگر با
            گردآوری محصولات جدید، متنوع و با کیفیت در کنار شما همکاران،
            تولیدکنندگان، شرکت‌ها و موسسات خصوصی و ... باشیم تا با هم، گامی در
            جهت برآورده کردن نیازهایتان در دستیابی به آرمان‌ها و اهداف تبلیغاتی
            خود برداریم.
          </p>
          <p>
            این مجموعه با هدف ارائه بهترین خدمات چاپ و تبلیغات، کاتالوگ‌های خود
            را به صورت دیجیتال در اختیار مشتریان قرار داده است تا بتوانید به
            راحتی محصولات و خدمات سالنامه آپادانا را مشاهده و بررسی کنید.
          </p>

          <div className="flex flex-row gap-4 mt-4">
            <Link
              href="/yearbook"
              target="_blank"
              className="px-4 py-2 text-sm text-[#4C4C4C] border border-[#4c4c4c] rounded-xl hover:bg"
            >
              دانلود کاتالوگ ۱۴۰۴
            </Link>
          </div>

          <Link
            href="/yearbook"
            className="mt-3 text-[#17182f] hover:underline"
          >
            مشاهده محصولات سالنامه آپادانا
          </Link>
        </div>
      </section>
    </>
  );
};

export default ApadanaSection;
