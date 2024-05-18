import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-7 md:py-10 relative">
      <h1 className="font-bold text-[30px] md:text-[60px] max-w-[30rem] md:leading-[4.95rem]">
        Empower Your{" "}
        <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
          Pharmacovigilance
        </b>{" "}
        Journey
      </h1>
      <p className="text-[#A1A1A1] font-medium text-[16px] md:text-[24px] leading-[28px] md:leading-[42px] mt-8 md:mt-14 max-w-[39.5rem] lg:max-w-[37rem] xl:max-w-[39.5rem]">
        Unlock a world of expertise, resources, and collaboration to elevate
        your practice in drug safety.
      </p>
      <button className="text-white text-[14px] md:text-[20px] mt-8 md:mt-14 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
        Get Started Today
      </button>
      <Image src="/Images/banner1.png" width={550} height={550} className="absolute hidden xl:flex -right-[2.5rem] lg:-right-[4rem] xl:-right-[6.2rem] top-10" alt="£"/>
      <Image src="/Images/banner1.png" width={400} height={400} className="absolute hidden lg:flex xl:hidden -right-[2.5rem] lg:-right-[4rem] xl:-right-[6.2rem] top-[18%]" alt="£"/>
    </section>
  );
};

export default Hero;
