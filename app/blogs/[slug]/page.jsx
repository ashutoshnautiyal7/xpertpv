import SideBar from "@/components/SideBar";
import SideBarContent from "@/components/SideBarContent/SideBarContent";
import { client } from "@/sanity/lib/client";
import { getBlog } from "@/sanity/sanity-utils";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == "blog"]  | order(_createdAt asc) { _id, title,image, description, "slug": slug.current}`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const page = async ({ params }) => {
  const { slug } = params;
  console.log("the slug is ", slug);

  const data = await getBlog(slug);
  console.log("the main data is ", data);

  const allData = await getData();

  return (
    <div className="container mx-auto">
      <main className="mt-12">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mb-16 ">
          <div className="left mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <Image
              src={urlForImage(data?.image)}
              height={900}
              width={900}
              alt="img"
              className="rounded-md object-cover w-[700px] h-[670px]"
            />
            {/* <span className="text-green-700 text-sm hidden md:block mt-4">
                {data?.subtitle}
              </span> */}
            <h1 className=" text-[#2fb3c8] text-4xl font-bold mt-2 mb-2 leading-tight">
              {data?.title}
            </h1>
            {/* {blogdata?.map((item: any) => (
                <>
                  <p className="text-xl">{item.children[0].text}</p>
                  <br />
                </>
              ))} */}

            <PortableText
              value={data?.description}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold my-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-bold my-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-bold my-4">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-base font-bold my-4">{children}</h4>
                  ),
                  h5: ({ children }) => (
                    <h5 className="text-sm font-bold my-4">{children}</h5>
                  ),
                  h6: ({ children }) => (
                    <h6 className="text-xs font-bold my-4">{children}</h6>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-purple-500  italic my-4 pl-8">
                      {children}
                    </blockquote>
                  ),
                  normal: ({ children }) => (
                    <p className="mb-4 pl-4">{children}</p>
                  ),
                },
                marks: {
                  strong: ({ children }) => <strong>{children}</strong>,
                  em: ({ children }) => <em>{children}</em>,
                  underline: ({ children }) => <u>{children}</u>,
                  code: ({ children }) => <code>{children}</code>,
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-12 my-4">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-12 my-4">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="my-2">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="my-2">{children}</li>
                  ),
                },
              }}
            />
          </div>

          <div className="right w-full md:w-2/3 ">
            <div className="md:sticky md:top-8  ">
              <div className=" text-[#2fb3c8] font-semibold m-2 text-xl">
                recent post
              </div>
              <div className="rounded w-full flex flex-col  mb-10">
                {allData?.slice(0, 5).map((item) => (
                  <a href={`/blogs/${item.slug}`}>
                    <div
                      key={item.slug}
                      className="rounded w-full flex flex-col md:flex-row mb-10"
                    >
                      <Image
                        height={250}
                        width={200}
                        src={urlForImage(data?.image)}
                        alt="img"
                        className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                      />
                      <div className="bg-white rounded px-4 my-auto">
                        <div className="md:mt-0  text-gray-800 font-semibold text-2xl  mb-2">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
