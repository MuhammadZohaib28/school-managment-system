import Image from "next/image";
import Link from "next/link";
import tmhlogo from "../../images/tmh-logo.png";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gray-100 p-1 h-full overflow-scroll">
        <Link href={"/"} className="flex justify-center">
          <Image
            src={tmhlogo}
            alt="tmh-logo"
            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] "
          />
        </Link>

        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
