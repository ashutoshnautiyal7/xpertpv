import React from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";

const page = () => {
  return (
    <main className="bg-[#F4FEFF] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem]">
        <Hero/>
        <Section1/>
        <Section2/>
    </main>
  );
};

export default page;
