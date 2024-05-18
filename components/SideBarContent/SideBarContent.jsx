import React from "react";

const SideBarContent = ({ content }) => {
  if (!content) {
    return null;
  }

  const {
    title,
    description,
    moduleTopicHeading,
    moduleTopics,
    moduleConclusion,
  } = content;

  return (
    <div className="flex flex-col lg:pl-8 xl:pl-20 text-[#A1A1A1] leading-[160%] md:leading-[27px]">
      <h1 className="text-[26px] md:text-[32px] leading-[130%] md:leading-[42.24px] font-semibold max-w-[600px] mx-auto text-center mt-6 md:mt-10 lg:mt-16 text-[#0383AB]">
        {title}
      </h1>
      <span className="mt-8 md:mt-12">
        {description && <p>{description}</p>}
        {moduleTopicHeading && (
          <span>
            <p className="mt-6 md:mt-8">{moduleTopicHeading}</p>
            {moduleTopics && moduleTopics.length > 0 && (
              <ol className="mt-2.5 md:mt-4 list-decimal ml-6 md:ml-8">
                {moduleTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ol>
            )}
          </span>
        )}
        {moduleConclusion && <p className="mt-6 md:mt-8">{moduleConclusion}</p>}
      </span>
    </div>
  );
};

export default SideBarContent;
