'use client'
import Image from "next/image";
import Link from "next/link";

const CardContacts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-md:py-12 max-md:px-4">
      
      {/* WhatsApp */}
      <Link
        target="_blank"
        href="https://wa.me/09123224288"
        className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
      >
        <div
          className="w-12 h-12 flex items-center justify-center"
          aria-label="پیام واتس‌اپ"
        >
          <Image
            priority
            src="/WhatsAppIcon.png"
            alt="پیام واتس‌اپ"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-bold text-black">ارسال پیام</h3>
        <p className="text-sm text-gray-600 text-center">
          از طریق واتس‌اپ با ما در ارتباط باشید
        </p>
      </Link>

      {/* Telegram */}
      <Link
        target="_blank"
        href="https://t.me/apadanacalendar66"
        className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
      >
        <div
          className="w-12 h-12 flex items-center justify-center"
          aria-label="کانال تلگرام"
        >
          <Image
            priority
            src="/TelegramIcon.png"
            alt="کانال تلگرام"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-bold text-black">کانال تلگرام</h3>
        <p className="text-sm text-gray-600 text-center">
          گروه تولیدی آپادانا
        </p>
      </Link>

      {/* Instagram */}
      <Link
        target="_blank"
        href="/"
        className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
      >
        <div
          className="w-12 h-12 flex items-center justify-center"
          aria-label="اینستاگرام"
        >
          <Image
            priority
            src="/InstagramIcon.png"
            alt="اینستاگرام"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-bold text-black">اینستاگرام</h3>
        <p className="text-sm text-gray-600 text-center">
          ما را در شبکه‌های اجتماعی دنبال کنید
        </p>
      </Link>
    </div>
  );
};

export default CardContacts;
