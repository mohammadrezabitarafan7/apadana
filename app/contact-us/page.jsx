import Image from "next/image";
// import location from "../../public/icons/location.svg";
// import email from "../../public/icons/email.svg";
// import phone2 from "../../public/icons/phone2.svg";
const Page = () => {
  return (
    <div className="flex flex-col gap-3 max-md:px-2 p-12">
      <span className="text-[#414651] border border-[#D5D7DA] px-4 py-2 text-sm bg-[#fafafa] rounded-full w-fit flex justify-center m-auto">
        درباره ما
      </span>
      <span className="text-[#0D0D0D] text-[40px] text-center flex justify-center font-bakhBold">
        درباره ما بیشتر بدانید
      </span>
      <span className="inline-flex w-fit bg-white rounded-xl border px-4 py-2 text-[#414651] m-auto my-4">
        ن یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این
        عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده
        از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی
        می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش
        متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین
        نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است. این یک
        نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان
        با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از
        پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می
        تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن
        می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین
        نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.{" "}
      </span>

      <div className=" flex flex-row justify-evenly bg-[#fafafa] p-12 max-md:flex-col max-md:gap-4">
        {/* email */}
        <div className="flex flex-col gap-3 justify-center items-center">
          {/* <Image alt="email" src={email} /> */}
          <span className="text-[#0D0D0D] text-xl font-bakhBold">
            Example@gmail.com
          </span>
          <span className="text-[#666666] text-xl text-center">
            {/* {fa.landing.email} */}
          </span>
        </div>
        {/* adress */}
        <div className="flex flex-col gap-3 justify-center items-center">
          {/* <Image alt="location" src={location} /> */}
          <span className="text-[#0D0D0D] text-xl font-bakhBold text-center">
            تهران ، سعادت آباد ، میدان مالک اشتر
          </span>
          {/* <span className="text-[#666666] text-xl">{fa.landing.address}</span> */}
        </div>
        {/* phone */}
        <div className="flex flex-col gap-3 justify-center items-center">
          {/* <Image alt="phone" src={phone2} /> */}
          <span className="text-[#0D0D0D] text-xl font-bakhBold text-center">
            ۰۹۰۲۴۱۰۹۸۹۰
          </span>
          {/* <span className="text-[#666666] text-xl">{fa.landing.phone}</span> */}
        </div>
      </div>
      {/* map */}
      <div style={{ width: "100%", height: "450px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8531438362246!2d51.38897307559845!3d35.689197472588845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017d40f1fbcf%3A0x9b6ffb11d2e33294!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1716727077123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Page;
