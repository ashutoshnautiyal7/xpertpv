import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="py-7 md:py-16 ">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white p-6 md:px-12 md:py-14 border shadow-md rounded-3xl relative">
        <Image
          src="/Images/xplore.png"
          width={600}
          height={600}
          className="flex"
          alt="£"
        />
        <h2 className="text-white absolute top-11 sm:top-20 left-11 sm:left-20 text-[20px] md:text-[32px] lg:text-[48px] font-bold w-[200px] md:w-[436px]">
          Xplore PV
        </h2>
        <div className="text-[16px] md:text-[20px] text-[#A1A1A1] md:leading-[27px] flex flex-col justify-between">
          <span>
            <p>
              Explore the Vast Knowledge Resources in Drug Safety and become an
              Expert in PV.
            </p>
            <p className="mt-3.5 md:mt-6">
              Delve into a comprehensive library of text-based content covering
              every aspect of Pharmacovigilance, from foundational principles to
              advanced methodologies. Whether you're new to the field or a
              seasoned professional, our curated collection offers something for
              everyone. Stay ahead of the curve, enhance your expertise, and
              join the ranks of PV leaders shaping the future of healthcare.
            </p>
          </span>
          <span className="flex">
            <button className="text-white text-[14px] md:text-[20px] mt-6 md:mt-10 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92] leading-6">
              Start Exploring
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section1;
