import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="py-7 md:py-16 flex flex-col gap-6 md:gap-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white p-6 md:px-12 md:py-14 border shadow-md rounded-3xl relative">
        <Image
          src="/Images/sample2.png"
          width={550}
          height={550}
          className="flex "
          alt="£"
        />
        <h2 className="text-white absolute top-11 sm:top-20 left-11 sm:left-20 text-[20px] md:text-[32px] lg:text-[48px] font-bold w-[200px] md:w-[436px] leading-[130%] md:leading-[120%]">
          Foundations of Pharmacovigilance
        </h2>
        <div className="md:text-[20px] text-[#A1A1A1] md:leading-[27px] justify-between flex flex-col">
          <p>
            Master the fundamental principles and concepts of pharmacovigilance
            to build a solid understanding of drug safety.
          </p>
          <span className="flex">
            <button className="text-white text-[14px] md:text-[20px] mt-6 md:mt-10 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92] leading-6">
              Begin Learning
            </button>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white p-6 md:px-12 md:py-14 border shadow-md rounded-3xl relative">
        <Image
          src="/Images/sample2.png"
          width={550}
          height={550}
          className="flex "
          alt="£"
        />
        <h2 className="text-white absolute top-11 sm:top-20 left-11 sm:left-20 text-[20px] md:text-[32px] lg:text-[48px] font-bold w-[200px] md:w-[436px] leading-[130%] md:leading-[120%]">
          Dive Deeper into PV Expertise
        </h2>
        <div className="md:text-[20px] text-[#A1A1A1] md:leading-[27px] justify-between flex flex-col">
          <p>
            Explore advanced topics and methodologies in pharmacovigilance to
            enhance your proficiency and stay ahead of industry trends.
          </p>
          <span className="flex">
            <button className="text-white text-[14px] md:text-[20px] mt-6 md:mt-10 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92] leading-6">
              Explore Advanced Topics
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section1;
