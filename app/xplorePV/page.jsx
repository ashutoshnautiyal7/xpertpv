import React from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { getBlogs, getCategories } from "@/sanity/sanity-utils";

export const dynamic = "force-dynamic";

const page = async () => {
  const blogs = await getCategories();
  console.log("the categories are ", blogs);

  return (
    <main className="bg-[#F4FEFF] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem]">
      <Hero />
      <Section1 />
      <Section2 categories={blogs} />
    </main>
  );
};

export default page;
