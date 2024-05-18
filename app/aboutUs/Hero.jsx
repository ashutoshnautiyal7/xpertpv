import Image from "next/image";
import React from "react";

const gridItems = [
  {
    imageSrc: "/Images/a1.png",
    title: "Ambition",
    description:
      "Pioneering a future of enhanced well-being and vitality for all.",
    gradientBg: false,
  },
  {
    imageSrc: "/Images/a2.png",
    title: "Purpose",
    description:
      "Dedicated to fostering empowered communities by revolutionizing healthcare standards.",
    gradientBg: true,
  },
  {
    imageSrc: "/Images/a3.png",
    title: "Mantra",
    description: "Together, we elevate health with passion and purpose.",
    gradientBg: false,
  },
];

const Hero = () => {
  return (
    <section className="py-7 md:py-10 relative">
      <h1 className="font-bold text-[30px] md:text-[60px] lg:max-w-[40rem] xl:max-w-[55rem] md:leading-[4.95rem]">
        <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
          About Us
        </b>
      </h1>
      <div className="text-[#A1A1A1] font-normal text-[16px] md:text-[24px] leading-[28px] md:leading-[32.4px] mt-6 md:mt-16 lg:mt-[30rem] ">
        <p className="">
          At Xpert PV, we're committed to reshaping the landscape of
          Pharmacovigilance by providing a dynamic platform where knowledge
          thrives and innovation flourishes. With a passion for improving
          patient outcomes and ensuring drug safety, we've created a space where
          healthcare professionals from around the globe can come together to
          share insights, exchange ideas, and collaborate on solutions.
        </p>
        <p className="mt-5">
          Our platform is more than just a resource hub; it's a community-driven
          initiative fueled by a shared vision of advancing public health.
          Whether you're a seasoned expert or just starting your journey in
          Pharmacovigilance, Xpert PV welcomes you to join us as we embark on
          this transformative mission to build a safer and healthier world for
          generations to come.
        </p>
      </div>
      <Image
        src="/Images/banner3.png"
        width={450}
        height={450}
        className="absolute hidden lg:flex right-0 -top-2"
        alt="#"
      />
      <div className="mt-8 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 xl:gap-10">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-3 border shadow-md rounded-3xl px-4 md:px-5 py-5 md:py-8 items-start ${
              index % 2 === 0
                ? "text-[#A1A1A1]"
                : "bg-gradient-to-b from-[#56E9EE] to-[#016E92] text-white"
            }`}
          >
            <Image
              src={item.imageSrc}
              alt="#"
              width={50}
              height={50}
              className=""
            />
            <span>
              <h3
                className={`font-semibold text-[20px] md:text-[28px] ${
                  index % 2 == 0 ? "text-black" : ""
                }`}
              >
                {item.title}
              </h3>
              <p className="text-[16px] md:text-[22px] md:leading-[29.7px] mt-1 md:mt-4">
                {item.description}
              </p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
