"use client";
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
            <defs>
              <linearGradient
                id="b"
                x1="85.915"
                x2="86.535"
                y1="32.567"
                y2="137.092"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#57d163" />
                <stop offset="1" stopColor="#23b33a" />
              </linearGradient>
              <filter
                id="a"
                width="1.115"
                height="1.114"
                x="-.057"
                y="-.057"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="3.531" />
              </filter>
            </defs>
            <path
              fill="#b3b3b3"
              d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
              filter="url(#a)"
            />
            <path
              fill="#fff"
              d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
            />
            <path
              fill="url(#b)"
              d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
            />
          </svg>
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
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="14" fill="url(#paint0_linear)" />
            <path
              d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="16"
                y1="2"
                x2="16"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#37BBFE" />
                <stop offset="1" stopColor="#007DBB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3 className="text-lg font-bold text-black">کانال تلگرام</h3>
        <p className="text-sm text-gray-600 text-center">گروه تولیدی آپادانا</p>
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
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="28"
              height="28"
              rx="6"
              fill="url(#paint0_radial)"
            />
            <rect
              x="2"
              y="2"
              width="28"
              height="28"
              rx="6"
              fill="url(#paint1_radial)"
            />
            <rect
              x="2"
              y="2"
              width="28"
              height="28"
              rx="6"
              fill="url(#paint2_radial)"
            />
            <path
              d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
              fill="white"
            />
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
              >
                <stop stopColor="#B13589" />
                <stop offset="0.79309" stopColor="#C62F94" />
                <stop offset="1" stopColor="#8A3AC8" />
              </radialGradient>
              <radialGradient
                id="paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
              >
                <stop stopColor="#E0E8B7" />
                <stop offset="0.444662" stopColor="#FB8A2E" />
                <stop offset="0.71474" stopColor="#E2425C" />
                <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(0.5 3) rotate(-8.1301) scale(38.8909 8.31836)"
              >
                <stop offset="0.156701" stopColor="#406ADC" />
                <stop offset="0.467799" stopColor="#6A45BE" />
                <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
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
