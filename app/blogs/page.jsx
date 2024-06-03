import Section2 from "@/components/Home/Section2";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getData() {
  const query = `*[_type == "blog"]  | order(_createdAt asc) { _id, title,image, description, "slug": slug.current}`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";
export const revalidate = 10;

const page = async () => {
  const data = await getData();
  console.log("the blogs are ", data);

  return (
    <main className="bg-[#F4FEFF] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem]">
      <Section2 data={data} />
    </main>
  );
};

export default page;
