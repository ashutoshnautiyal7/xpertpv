import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import SideBar from "../../../components/SideBar";

async function getData(type) {
  const query = `*[_type == "product"  && productType == "${type}"]  | order(_createdAt asc) { _id, name,productType, description, "slug": slug.current, "categoryName": category->name }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
  const { type } = params;
  console.log("the type is ", type);
  const data = await getData(type);
  console.log("the data to that cate ", data);

  const sidebarContentDataArray = [
    {
      name: "Aggregate Safety Reports Writing in Drug Safety-Fundamentals",
      description:
        '"Aggregate Safety Reports Writing in Drug Safety - Fundamentals" provides essential knowledge and skills necessary for crafting comprehensive aggregate safety reports, a critical aspect of pharmacovigilance.',
      moduleTopicHeading: "This module covers the following key aspects:",
      moduleTopics: [
        "Understanding Aggregate Safety Reports: Delve into the purpose, scope, and regulatory requirements surrounding aggregate safety reports, including Periodic Benefit-Risk Evaluation Reports (PBRERs), Periodic Safety Update Reports (PSURs), and other aggregate reports.",
        "Components of Aggregate Reports: Explore the structure and content of aggregate safety reports, including data sources, adverse event analysis, risk-benefit assessments, and conclusions.",
        "Data Analysis Techniques: Learn essential data analysis techniques and methodologies used in aggregate safety report writing, including signal detection, trend analysis, and risk assessment.",
        "Regulatory Guidelines and Compliance: Gain insights into regulatory guidelines and requirements governing the preparation and submission of aggregate safety reports, ensuring compliance with global regulatory standards.",
        "Best Practices and Quality Assurance: Understand best practices for writing high-quality aggregate safety reports, including data accuracy, consistency, and clarity, as well as strategies for quality assurance and review.",
        "Case Studies and Practical Applications: Apply theoretical concepts to real-world scenarios through case studies and practical exercises, enhancing proficiency in aggregate safety report writing.",
      ],
      moduleConclusion:
        "By equipping learners with a solid foundation in aggregate safety report writing fundamentals, this module empowers them to effectively contribute to pharmacovigilance activities, ensuring the ongoing safety monitoring and assessment of pharmaceutical products.",
    },
    {
      name: "Aggregate Safety Reports Writing",
    },
    {
      name: "Benefit risk balance for medicinal products-General overview",
    },
    {
      name: "Causality Assessment in Drug Safety Fundamentals",
    },
    {
      name: "ICSR-Case Processing Steps.",
    },
    {
      name: "Signal Management in Drug Safety An overview",
    },
    {
      name: "Special Scenarios in Pharmacovigilance",
    },
  ];

  return (
    <div className="bg-[#F4FEFF] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem] flex pb-[4.2rem] md:pb-32">
      <SideBar sidebarContentDataArray={data} />
    </div>
  );
}
