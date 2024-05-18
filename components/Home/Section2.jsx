import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="pt-6 md:pt-12 pb-[4.2rem] md:pb-32">
      <h2 className="font-bold text-[30px] md:text-[52px]">
        Latest {""}
        <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
          Updates
        </b>
      </h2>
      <div className="flex gap-6 md:gap-4 xl:gap-8 mt-10 md:mt-24 flex-col lg:flex-row md:leading-[28.35px]">
        <div className="flex flex-col justify-between gap-8 md:gap-12 bg-white p-5 md:p-7 border shadow-md rounded-[2.5rem] lg:w-1/3">
          <span className="md:text-[20px] text-[#A1A1A1] relative">
            <Image src="/Images/sample.png" width={500} height={500} alt="£"/>
            <h3 className="text-white absolute top-8 sm:top-12 left-8 sm:left-12 font-medium text-[20px] md:text-[32px] lg:text-[48px] w-[200px] md:w-[436px]">
              DSUR
            </h3>

            <p className="mt-4 md:mt-8">
              Streamline your safety update reports for clinical development.
            </p>
          </span>
          <span className="flex justify-start -mt-4">
            <button className="text-white text-[14px] md:text-[20px] px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
              Read More
            </button>
          </span>
        </div>
        <div className="flex flex-col justify-between gap-8 md:gap-12 bg-white p-5 md:p-7 border shadow-md rounded-[2.5rem] lg:w-1/3">
          <span className="md:text-[20px] text-[#A1A1A1] relative">
            <Image src="/Images/sample.png" width={500} height={500} alt="£"/>
            <h3 className="text-white absolute top-8 sm:top-12 left-8 sm:left-12 font-medium text-[20px] md:text-[32px] lg:text-[48px] w-[200px] md:w-[436px]">
              PADER
            </h3>
            <p className="mt-4 md:mt-8">
              Summarize adverse drug experiences efficiently for ongoing safety
              monitoring.
            </p>
          </span>
          <span className="flex justify-start -mt-4">
            <button className="text-white text-[14px] md:text-[20px]  px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
              Read More
            </button>
          </span>
        </div>
        <div className="flex flex-col justify-between gap-8 md:gap-12 bg-white p-5 md:p-7 border shadow-md rounded-[2.5rem] lg:w-1/3 re">
          <span className="md:text-[20px] text-[#A1A1A1] relative">
            <Image src="/Images/sample.png" width={500} height={500} alt="£"/>
            <h3 className="text-white absolute top-8 sm:top-12 left-8 sm:left-12 font-medium text-[20px] md:text-[32px] lg:text-[48px] w-[200px] md:w-[436px]">
              PBRER
            </h3>
            <p className="mt-4 md:mt-8">
              Essential reports for comprehensive assessment of drug safety over
              time.
            </p>
          </span>
          <span className="flex justify-start -mt-4">
            <button className="text-white text-[14px] md:text-[20px]  px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
              Read More
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section2;
