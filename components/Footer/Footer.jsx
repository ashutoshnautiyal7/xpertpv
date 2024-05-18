import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black py-[50px] md:py-[70px] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem] flex gap-8 md:gap-[35vw] items-center flex-col md:flex-row">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex gap-5">
          <span className="text-[30px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
            Xpert PV
          </span>
          <Image
            src="/Images/logo2.png"
            width={70}
            height={70}
            className="hidden md:flex"
            alt="£"
          />
          <Image
            src="/Images/logo2.png"
            width={45}
            height={45}
            className="flex md:hidden"
            alt="£"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="text-white text-[18px] md:text-[24px]">
            Follow us on:
          </span>
          <span className="flex gap-5 md:gap-6 items-center">
            <FaInstagram className="text-white w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
            <FaXTwitter className="text-white w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
            <FaFacebook className="text-white w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
            <FaYoutube className="text-white w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
            <FaLinkedin className="text-white w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
          </span>
        </div>
      </div>
      <div className="text-white text-[18px] md:text-[24px] flex flex-col gap-3 md:gap-8 mr-[6.6rem] md:mr-0">
        <span className="font-medium ">Quick Links</span>
        <span className="flex flex-col gap-1 md:gap-2 font-thin">
          <Link href="/">Home</Link>
          <Link href="/">Xplore PV</Link>
          <Link href="/">About</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
