import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="py-7 md:py-16 ">
      <div className="flex flex-col lg:flex-row md:gap-8 lg:gap-12  -mt-10 md:mt-0">
        <Image
          src="/Images/ec.png"
          width={500}
          height={500}
          className="flex"
          alt="£"
        />
        <div className="text-[16px] md:text-[20px] text-[#A1A1A1] md:leading-[27px] flex flex-col justify-center -mt-4 md:mt-0">
          <span>
            <h1 className="font-bold text-[30px] md:text-[48px] lg:max-w-[40rem] xl:max-w-[55rem] leading-[125%] md:leading-[130%] text-black">
              Unlock {""}
              <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
                Exclusive Content
              </b>
            </h1>
          </span>
          <span className="mt-4 font-normal text-[16px] md:text-[24px] leading-[28px] md:leading-[32.4px]">
            <p>
              Pioneering a future of enhanced well-being and vitality for
              all.Your gateway to a wealth of knowledge awaits behind the login.
              Don't miss out – dive deeper today!
            </p>
          </span>
          <span className="flex">
            <button className="text-white text-[14px] md:text-[20px] mt-6 md:mt-10 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92] leading-6">
              Login Now
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section1;
