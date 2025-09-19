'use cleint'
import Image from "next/image";
import Link from "next/link";

const CardContacts = () => {
  const items = [
    {
      icon: "/WhatsAppIcon.png",
      title: "ارسال پیام",
      desc: "از طریق واتس‌اپ با ما در ارتباط باشید",
      aria: "پیام واتس‌اپ",
      href: "https://wa.me/09123224288",
    },
    {
      icon: "/TelegramIcon.png",
      title: "کانال تلگرام",
      desc: "گروه تولیدی آپادانا",
      aria: "کانال تلگرام",
      href: "https://t.me/apadanacalendar66",
    },
    {
      icon: "/InstagramIcon.png",
      title: "اینستاگرام",
      desc: "ما را در شبکه‌های اجتماعی دنبال کنید",
      aria: "اینستاگرام",
      href: "/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-md:py-12 max-md:px-4">
      {items.map((i, index) => (
        <Link
          target="blank"
          href={i?.href}
          key={index}
          className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <div
            className="w-12 h-12 flex items-center justify-center"
            aria-label={i?.aria}
          >
            <Image
              priority
              src={i?.icon}
              alt={i?.aria}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-bold text-black">{i.title}</h3>
          <p className="text-sm text-gray-600 text-center">{i.desc}</p>
        </Link>
      ))}
    </div>
  );
};

export default CardContacts;
