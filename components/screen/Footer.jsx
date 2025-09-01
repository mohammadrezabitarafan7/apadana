import Link from "next/link";
import LocationIcon from "../svg/LocationIcon";
import MailIcon from "../svg/MailIcon";
import PhoneIcon from "../svg/PhoneIcon";
import WhatsAppIcon from "../svg/WhatsAppIcon";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 max-md:hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* بخش ۱: درباره ما */}
        <div>
          <h3 className="text-lg font-bold mb-4">سالنامه آپادانا</h3>
          <p className="text-sm text-justify">
            سالنامه آپادانا با گرد هم‌آوری گروه‌های تخصصی در زمینه چاپ و صحافی و
            با بهره‌گیری از مدرن‌ترین ماشین‌آلات توانسته است محصولاتی مانند
            سالنامه و هدایای تبلیغاتی را با کیفیت مطلوب در اختیار مشتریان خود
            قرار دهد.
          </p>
        </div>

        {/* بخش ۲: محصولات */}
        <div>
          <h3 className="text-lg font-bold mb-4">محصولات</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                سالنامه
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                هدایای تبلیغاتی
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                دفاتر فانتزی
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                تقویم رومیزی
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                دفتر برنامه‌ریزی
              </Link>
            </li>
          </ul>
        </div>

        {/* بخش ۳: لینک‌های مهم */}
        <div>
          <h3 className="text-lg font-bold mb-4">لینک‌های مهم</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                خانه
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                محصولات
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                مقالات
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        {/* بخش ۴: ارتباط با ما */}
        <div>
          <h3 className="text-lg font-bold mb-4">ارتباط با ما</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <LocationIcon size={64} aria-label="آدرس دفتر" />
              <span className="text-justify">
                ایران، تهران، خیابان خاوران، بعد از فرهنگسرای خاوران، نرسیده به
                اتوبان امام علی، داخل کانون مالک اشتر، سالنامه آپادانا
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon size={24} aria-label="ایمیل" />
              <Link
                href="mailto:apadanahormozi@gmail.com"
                className="hover:underline"
              >
                apadanahormozi@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon size={24} aria-label="شماره تلفن" />
              <Link href="tel:02133000772" className="hover:underline">
                ۰۲۱-۳۳۰۰۰۶۷۲
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon size={24} aria-label="واتساپ" />
              <Link
                href="https://wa.me/09123224288"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ۰۹۱۲-۳۲۲۴۲۸۸
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <h6 className="mt-12 text-center text-xs text-gray-500">
        تمام حقوق مادی و معنوی سایت نزد مدیریت سالنامه آپادانا&nbsp;محفوظ است.
      </h6>
    </footer>
  );
};

export default Footer;
