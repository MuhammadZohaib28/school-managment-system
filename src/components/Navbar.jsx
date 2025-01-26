import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end md:justify-between  items-center bg-gray-100 w-full p-3">
      <div className=" hidden md:flex ring-1 ring-black rounded-3xl justify-start items-center w-[25%] p-2 gap-10">
        <Image src={"/search.png"} width={20} height={20} />
        <input type="search" placeholder="Search" className="bg-transparent" />
      </div>

      <div className="flex justify-between items-center gap-10">
        <Image src={"/message.png"} width={30} height={30} />

        <div className="relative p-1">
          <span className="absolute h-6 w-6 text-xs font-extrabold text-white text-center rounded-full bg-red-500 top-[-10px] right-[-10px] p-1">
            12
          </span>
          <Image src={"/announcement.png"} width={30} height={30} />
        </div>

        <div className="flex flex-col items-end">
          <span className="font-medium">Muhammad Zohaib</span>
          <span className="font-light">Student</span>
        </div>

        <div className="w-[45px] h-[45px] rounded-full">
          <Image
            src={"/avatar.png"}
            width={30}
            height={30}
            className="rounded-full w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
