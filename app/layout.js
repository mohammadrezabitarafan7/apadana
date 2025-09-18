import "./globals.css";
import Footer from "@/components/screen/Footer";
import Navbar from "@/components/screen/Navbar";
import BottomNav1 from "@/components/ui/BottomNav";
import SWRProvider from "@/components/SWRProvider";
import Image from "next/image";




export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
        
      >
        <div className=" top-0 z-50 w-full container m-auto ">
          <Navbar />
          <div className="bg-[#f9f9f9] border-b fixed top-0 w-full z-50 border-[#fdd400] mb-5 justify-center md:hidden ">
            <Image priority className="m-auto" src='/logo1.png' width={75} height={100} alt="apadana-logo"/>
          </div>
        </div>

        <SWRProvider>{children}</SWRProvider>
        <BottomNav1 />
        <Footer />
      </body>
    </html>
  );
}
