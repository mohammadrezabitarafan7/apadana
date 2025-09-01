import InstagramIcon from "../svg/InstagramIcon";
import PhoneIcon from "../svg/PhoneIcon";
import WhatsAppIcon from "../svg/WhatsAppIcon";

const CardContacts = () => {
  const items = [
    {
      icon: <WhatsAppIcon />,
      title: "ارسال پیام",
      desc: "از طریق واتس‌اپ با ما در ارتباط باشید",
      aria: "پیام واتس‌اپ"
    },
    {
      icon: <PhoneIcon />,
      title: "تماس تلفنی",
      desc: "شماره پشتیبانی 24 ساعته",
      aria: "تماس تلفنی"
    },
    {
      icon: <InstagramIcon />,
      title: "شبکه‌های اجتماعی",
      desc: "ما را در شبکه‌های اجتماعی دنبال کنید",
      aria: "اینستاگرام"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-md:py-12 max-md:px-4">
      {items.map((i, index) => (
        <article
          key={index}
          className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow"
        >
          <div
            className="w-12 h-12 flex items-center justify-center"
            aria-label={i.aria}
          >
            {i.icon}
          </div>
          <h3 className="text-lg font-bold text-black">{i.title}</h3>
          <p className="text-sm text-gray-600 text-center">{i.desc}</p>
        </article>
      ))}
    </div>
  );
};

export default CardContacts;
