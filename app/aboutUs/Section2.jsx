import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="pt-4 md:pt-6 pb-[4.2rem] md:pb-32">
      <div className="bg-[#016E92] relative rounded-3xl flex p-8 md:p-16 gap-10 xl:gap-20">
        <Image
          src="/Images/message.png"
          width={300}
          height={300}
          className="-mt-16 xl:ml-10 hidden lg:flex"
        />
        <form className="text-white font-normal w-full flex flex-col gap-4 md:gap-6 text-[14px] md:text-[16px]">
          <h3 className="text-[30px] md:text-[48px] font-bold mx-auto">Write a Message</h3>
          <div className="flex gap-4 md:gap-8 xl:gap-16 w-full mt-1 md:mt-2 flex-col md:flex-row">
            <label className="flex flex-col gap-2 w-full">
              Full Name
              <input
                type="text"
                className="bg-[#D9D9D999] p-2 rounded-lg focus:outline-none w-full"
              />
            </label>
            <label className="flex flex-col gap-2 w-full">
              Email Address*
              <input
                type="email"
                className="bg-[#D9D9D999] p-2 rounded-lg focus:outline-none w-full"
              />
            </label>
          </div>
          <div className="flex gap-4 md:gap-8 xl:gap-16 w-full flex-col md:flex-row">
            <label className="flex flex-col gap-2 w-full">
              Phone Number
              <input
                type="number"
                className="bg-[#D9D9D999] p-2 rounded-lg focus:outline-none w-full"
              />
            </label>
            <label className="flex flex-col gap-2 w-full">
              Subject
              <input
                type="email"
                className="bg-[#D9D9D999] p-2 rounded-lg focus:outline-none w-full"
              />
            </label>
          </div>
          <div className="">
            <label className="flex flex-col gap-2">
            Message
              <textarea
                className="bg-[#D9D9D999] p-2 rounded-lg focus:outline-none w-full" rows={6}
              />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Section2;
