 
import { getMeta } from "@/lib/meta";
export async function generateMetadata() {
  const meta = await getMeta("contact-us"); 
  if (!meta) {
    return { title: "Default Title", description: "Default description" };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://ctrl.apadanacalendar.com/contact-us` },
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      url: `https://ctrl.apadanacalendar.com/contact-us`,
      images: [meta.og_image],
      locale: "fa_IR",
      type: "website",
    },
    robots: { index: meta.can_index, follow: true },
  };
}

const ContactPage = async () => {
  const meta = await getMeta("contact-us");


  return (
    
    <div className="flex flex-col gap-4 text-black max-md:px-2 p-12 max-md:pt-28">
      <h1 className="text-center text-3xl font-bakhBold">{meta?.title || "تماس با ما"}</h1>
      <p className="text-center text-[#414651]">{meta?.description}</p>

      <div className="flex flex-col gap-6 mt-8">
        <div className="flex flex-col items-center">
          <span className="font-bakhBold text-xl">apadanahormozi@gmail.com</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bakhBold text-xl">۰۲۱-۳۳۰۰۰۶۷۲</span>
          <span className="font-bakhBold text-xl">۰۲۱-۳۳۰۰۰۶۷۳</span>
          <span className="font-bakhBold text-xl">۰۲۱-۳۳۰۰۰۶۷۴</span>
          <span className="font-bakhBold text-xl">۰۲۱-۳۳۰۰۰۶۷۵</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bakhBold text-xl text-center">
            ایران، تهران، خیابان خاوران، بعد از فرهنگسرای خاوران، نرسیده به اتوبان امام علی، داخل کانون مالک اشتر، سالنامه آپادانا
          </span>
        </div>
      </div>

      <div style={{ width: "100%", height: "450px", marginTop: "2rem" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8531438362246!2d51.38897307559845!3d35.689197472588845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017d40f1fbcf%3A0x9b6ffb11d2e33294!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1716727077123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Structured Data */}
      {meta?.structured_data && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.structured_data) }}
        />
      )}
    </div>
  );
};

export default ContactPage;
