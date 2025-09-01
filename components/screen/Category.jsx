import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const items = [
    {
      title: "سالنامه ۱۴۰۴",
      image: "/img1.png",
      href: "/products/salnameh-1404",
    },
    {
      title: "دفتر برنامه ریزی",
      image: "/note1.png",
      href: "/products/desk-calendar",
    },
    {
      title: "دفاتر فانتزی",
      image: "/note2.jpeg",
      href: "/products/fantasy-notebooks",
    },
    {
      title: "انواع سالنامه",
      image: "/note5.jpeg",
      href: "/products/salnameh-1404",
    },
    {
      title: "تقویم رومیزی",
      image: "/calender.jpg",
      href: "/products/desk-calendar",
    },
    {
      title: "هدایای تبلیغاتی",
      image: "/note4.jpeg",
      href: "/products/fantasy-notebooks",
    },
  ];

  return (
    <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-6 max-md:px-3">
      {items.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-[220px] max-md:h-[150px] object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-3 max-md:py-1">
            <h3 className="text-sm font-semibold max-md:text-xs">{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
