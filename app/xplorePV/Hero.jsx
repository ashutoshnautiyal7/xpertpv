import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-7 md:py-10 relative">
      <h1 className="font-bold text-[30px] md:text-[60px] lg:max-w-[40rem] xl:max-w-[55rem] md:leading-[4.95rem]">
        Explore the Vast Knowledge Resources in {""} <br/>
        <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
          Drug Safety
        </b>
      </h1>
      <p className="text-[#A1A1A1] font-medium text-[16px] md:text-[24px] leading-[28px] md:leading-[42px] mt-8 md:mt-14 max-w-[39.5rem] lg:max-w-[37rem] xl:max-w-[39.5rem]">
      Become an Expert in PV
      </p>
      <button className="text-white text-[14px] md:text-[20px] mt-8 md:mt-14 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
        Get Started Today
      </button>
      <Image
        src="/Images/banner2.png"
        width={480}
        height={480}
        className="absolute hidden lg:flex right-0 -top-16" alt="£"
      />
    </section>
  );
};

export default Hero;
