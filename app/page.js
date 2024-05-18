'use client'

import Hero from "@/components/Home/Hero";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Image from "next/image";

export default function Home() {

  return (
    <main className="bg-[#F4FEFF] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem]">
      <Hero/>
      <Section1/>
      <Section2/>
    </main>
  );
}
