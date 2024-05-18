import React from "react";
import { PortableText } from "@portabletext/react";

const SideBarContent = ({ content }) => {
  return (
    <div className="flex flex-col lg:pl-8 xl:pl-20 text-gray-700 leading-[160%] md:leading-[27px]">
      <h1 className="text-[26px] md:text-[32px] leading-[130%] md:leading-[42.24px] font-extrabold max-w-[600px] mx-auto text-center mt-6 md:mt-10 lg:mt-16 text-[#0383AB]">
        {content.name}
      </h1>
      <PortableText
        value={content.description}
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
            normal: ({ children }) => <p className="mb-4 pl-4">{children}</p>,
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
            bullet: ({ children }) => <li className="my-2">{children}</li>,
            number: ({ children }) => <li className="my-2">{children}</li>,
          },
        }}
      />
    </div>
  );
};

export default SideBarContent;
