import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const menu = [
    { title: "خانه", href: "/" },
    { title: "سالنامه ۱۴۰۴", href: "/products/سالنامه-۱۴۰۴" },
    { title: "تقویم رومیزی", href: "/products/تقویم-رومیزی" },
    { title: "دفاتر فانتزی", href: "/products/دفاتر-فانتزی" },
    { title: "ست مدیرتی", href: "/products/دفتر-برنامه-ریزی" },
    { title: "لیست قیمت", href: "/price-list" },
    { title: "مقالات", href: "/articles" },
    { title: "ارتباط با ما", href: "/contact" },
  ];

  const leftMenu = menu.slice(0, 4);
  const rightMenu = menu.slice(4);

  return (
    <div className="py-6 max-md:hidden">
      <nav
        className="w-full backdrop-blur-xl rounded-lg shadow-md bg-white"
        aria-label="منوی اصلی سالنامه آپادانا"
      >
        <div className="container mx-auto flex justify-evenly items-center">
          {/* منوی چپ */}
          <ul className="flex gap-6 text-gray-800 font-medium">
            {leftMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[#1a2049] font-semibold hover:text-[#fdd400] transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* لوگو وسط */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo1.png"
              width={100}
              height={80}
              alt="لوگوی سالنامه آپادانا - تولید کننده سالنامه ۱۴۰۴ و تقویم رومیزی"
              priority
            />
          </Link>

          {/* منوی راست */}
          <ul className="flex gap-6 text-gray-800 font-medium">
            {rightMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[#1a2049] font-semibold hover:text-[#fdd400] transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
