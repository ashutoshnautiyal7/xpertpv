import Link from "next/link";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import SideBar from "../../components/SideBar";

async function getData(category) {
  const query = `*[_type == "product"  && category->slug.current == "${category}"]  | order(_createdAt asc) { _id, name,productType, description, "slug": slug.current, "categoryName": category->name }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";
export const revalidate = 10;

export default async function CategoryPage({ params }) {
  const { category } = params;
  console.log("the category is ", category);
  const data = await getData(category);
  console.log("the data to that cate ", data);

  return (
    <div className="bg-[#F4FEFF] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem] flex pb-[4.2rem] md:pb-32">
      <SideBar sidebarContentDataArray={data} />
    </div>
  );
}
