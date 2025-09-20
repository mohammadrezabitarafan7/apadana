"use client";
import Link from "next/link";
import WhatsAppIcon from "../svg/WhatsAppIcon";
import HomeIcon from "../svg/HomeIcon";
import { useRouter } from "next/navigation";
import MoreIcon from "../svg/MoreIcon";
import AddIcon from "../svg/AddIcon";

const BottomNav1 = () => {
  const items = [
    { title: "خانه", href: "/", icon: <HomeIcon /> },
    { title: "محصولات", href: "/yearbook", icon: <AddIcon /> },
    {
      title: "ارتباط با ما",
      href: "https://wa.me/09123224288",
      icon: <WhatsAppIcon size={24} />,
    },
    { title: "درباره ما", href: "/contact-us", icon: <MoreIcon /> },
  ];

  const router = useRouter();

  return (
    <div className="pt-20 md:hidden">
      <nav className="fixed bottom-0 left-0 w-full px-4 pb-4 z-20">
        <div className="flex justify-between items-center mx-auto rounded-xl bg-white/60 backdrop-blur-sm border-t border-gray-300 shadow-md h-14 px-6 max-w-md">
          {items.map((i) => {
            const isActive = router.pathname === i.href;
            return (
              <Link
                key={i.title}
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  i.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`flex flex-col items-center gap-1 transition-all ${
                  router.asPath === i.href
                    ? "bg-[#873DFF] scale-110"
                    : "text-[#343434] scale-100"
                }`}
              >
                {i.icon}
                <span className="text-xs font-bakhSemiBold">{i.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav1;
