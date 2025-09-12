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

  return (
    <div className="p-6 max-md:hidden">
      <nav
        className="w-full bg-white/35 backdrop-blur-xl rounded-lg shadow-md px-4 py-3"
        aria-label="منوی اصلی سالنامه آپادانا"
      >
        <div className="container mx-auto justify-center flex items-center max-md:justify-start">
          {/* لوگو */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="لوگوی سالنامه آپادانا - تولید کننده سالنامه ۱۴۰۴ و تقویم رومیزی"
              priority
              className=" px-3"
            />
          </Link>

          {/* منو دسکتاپ */}
          <ul className="hidden md:flex flex-row gap-6 text-gray-800 font-medium">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[#17182f] hover:underline transition-colors"
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
