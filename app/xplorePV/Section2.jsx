import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// const categories = [
//   {
//     title: "Individual Case Safety Report",
//     description:
//       "Xplore and learn the concepts of Single case report processing, Safety Databases, expedited reporting, other key elements for the building blocks of Pharmacovigilance.",
//     imageSrc: "/Images/k1.png",
//     width: 250,
//     height: 250,
//   },
//   {
//     title: "Aggregate safety reports",
//     description:
//       "Delve into this space, if you are specifically interested to explore various types of periodic reports like PSUR, PBRER, DUSR etc, in pharmacovigilance that are prepared as part of marketing authorisation and other country...",
//     imageSrc: "/Images/k2.png",
//     width: 250,
//     height: 250,
//   },
//   {
//     title: "Signal Management",
//     description:
//       "Are you curious to know how safety signals are identified and how they are assessed? What happens after a signal is confirmed in PV? Then, jump into this category to learn the basic fundamentals and advanced concepts encompassing...",
//     imageSrc: "/Images/k3.png",
//     width: 250,
//     height: 250,
//   },
//   {
//     title: "Risk Management",
//     description:
//       "If you would like to know how Pharmacovigilance plays key role in patient safety? How risks are mitigated in real-world practice, then it is right space for you to Xplore to know more.",
//     imageSrc: "/Images/k4.png",
//     width: 250,
//     height: 250,
//   },
//   {
//     title: "Quality Assurance",
//     description:
//       "Continuous monitoring of drug safety data helps identify trends and patterns, enabling companies to maintain the quality and integrity of their products.",
//     imageSrc: "/Images/k5.png",
//     width: 250,
//     height: 250,
//   },
//   {
//     title: "Trust and Confidence",
//     description:
//       "A robust PV system in stills trust and confidence among patients, healthcare providers, and stakeholders in the pharmaceutical industry, enhancing overall credibility.",
//     imageSrc: "/Images/k6.png",
//     width: 250,
//     height: 250,
//   },
//   {
//     title: "Decision Making",
//     description:
//       "PV provides valuable data and insights to healthcare professionals, regulators, and policymakers, facilitating informed decision-making regarding the use and regulation of medicines.",
//     imageSrc: "/Images/k7.png",
//     width: 250,
//     height: 250,
//   },
// ];

const Section2 = ({ categories }) => {
  return (
    <section className="pt-6 md:pt-12 pb-[4.2rem] md:pb-32 flex flex-col">
      <h2 className="font-bold text-[30px] md:text-[52px] mx-auto">
        Our {""}
        <b className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
          Knowledge
        </b>
        {""} Categories
      </h2>
      <div className="mt-6 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
        {categories.map((category, index) => (
          <Link key={index} href={category.slug || "/"}>
            <div
              key={index}
              className={`flex flex-col gap-8 md:gap-12 px-6 py-8 md:py-10 md:px-7 border shadow-md rounded-[2.5rem] md:text-[20px] ${
                index % 2 === 0
                  ? ""
                  : "bg-gradient-to-b from-[#56E9EE] to-[#016E92] text-white"
              }`}
            >
              <Image
                src={urlForImage(category.image)}
                width={250}
                height={250}
                className="mx-auto"
                alt="£"
              />
              <h3 className="text-[22px] md:text-[36px] font-bold leading-[120%] -mt-5">
                {category.name}
              </h3>
              <p className="-mt-5 md:-mt-8 leading-[24px] md:text-[18px]">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Section2;
