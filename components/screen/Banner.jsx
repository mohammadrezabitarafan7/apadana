import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid gap-5 grid-cols-12 w-full max-md:flex max-md:flex-col max-md:px-4">
      <div className="col-span-6 relative w-full h-[210px] rounded-3xl overflow-hidden">
        <Image
          src="/back3.png"
          alt="سالنامه آپادانا"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-xl font-bold text-center px-4">
            سالنامه اروپایی چرم آرشام
          </h2>
        </div>
      </div>

      <div className="col-span-6 relative w-full h-[210px] rounded-3xl overflow-hidden">
        <Image
          src="/29.png"
          alt="سالنامه آپادانا"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-xl font-bold text-center px-4">
            سالنامه وزیری چرم لاکچری
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
