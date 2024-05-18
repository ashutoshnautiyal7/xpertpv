"use client";
import React, { useEffect, useRef, useState } from "react";
import SideBarContent from "@/components/SideBarContent/SideBarContent";
import { FaChevronRight } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Fade as Hamburger } from "hamburger-react";
import ProgressBar from "./ProgressBar/ProgressBar";

const SideBar = ({ sidebarContentDataArray }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const isLGScreen = window.innerWidth >= 1024;
    setIsSidebarVisible(isLGScreen);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const [selectedContent, setSelectedContent] = useState(
    sidebarContentDataArray[0]?.name
  );

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  const handlePrevious = () => {
    const currentIndex = sidebarContentDataArray.findIndex(
      (item) => item.name === selectedContent
    );
    const previousIndex =
      currentIndex === 0
        ? sidebarContentDataArray.length - 1
        : currentIndex - 1;
    setSelectedContent(sidebarContentDataArray[previousIndex].name);
  };

  const handleNext = () => {
    const currentIndex = sidebarContentDataArray.findIndex(
      (item) => item.name === selectedContent
    );
    const nextIndex =
      currentIndex === sidebarContentDataArray.length - 1
        ? 0
        : currentIndex + 1;
    setSelectedContent(sidebarContentDataArray[nextIndex].name);
  };

  const mainRef = useRef(null);

  const [sidebarTop, setSidebarTop] = useState(150);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSidebarTop(0);
    } else {
      setSidebarTop(150); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="lg:hidden  top-[4rem] md:top-[6.8rem] left-[1.2rem] md:left-[2.5rem] z-50 fixed">
        <span className="hidden md:flex lg:hidden">
          <Hamburger
            toggled={isSidebarVisible}
            toggle={toggleSidebar}
            size={25}
          />
        </span>
        <span className="flex md:hidden">
          <Hamburger
            toggled={isSidebarVisible}
            toggle={toggleSidebar}
            size={16}
          />
        </span>
      </div>
      <div
        className={`bg-white w-[70vw] sm:w-[450px] flex overflow-hidden gap-2 -ml-[1.2rem] md:-ml-[2.5rem] lg:-ml-[4rem] xl:-ml-[6.2rem] shadow-md rounded-br-3xl absolute lg:fixed transition-transform duration-500 ease-in-out ${
          isSidebarVisible ? "" : "-translate-x-full lg:-translate-x-0"
        }`}
        style={{ top: `${sidebarTop}px`, transition: "top 0.5s ease" }}
        ref={mainRef}
      >
        <ProgressBar target={mainRef} />
        <div className="flex flex-col gap-2 text-white font-medium py-10 md:py-20 text-[14px] md:text-[16px] sticky top-0">
          {sidebarContentDataArray.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                handleClick(item.name);
              }}
              className={`leading-[21.6px] h-[80px] px-2 md:px-4 py-2 md:py-4 rounded-r-full flex justify-between items-center cursor-pointer ${
                selectedContent === item.name
                  ? "bg-[#56E9EE] text-black"
                  : "bg-white text-black"
              }`}
            >
              <span className="w-[90%] md:w-[85%]">{item.name}</span>
              <span>
                {selectedContent !== item.name && (
                  <FaChevronRight className="w-4 md:w-6 h-4 md:h-6" />
                )}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex lg:ml-[25rem] xl:ml-[21rem]">
        <div className="lg:ml-5 lg:w-[50vw] xl:w-[60vw] min-h-screen flex flex-col ">
          {sidebarContentDataArray
            .filter((content) => content.name === selectedContent)
            .map((content, index) => (
              <SideBarContent key={index} content={content} />
            ))}
          <span className="flex justify-between lg:pl-8 xl:pl-20">
            <button
              onClick={handlePrevious}
              disabled={
                sidebarContentDataArray.findIndex(
                  (item) => item.name === selectedContent
                ) === 0
              }
              className={`text-white text-[14px] md:text-[20px] mt-8 md:mt-14 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92] ${
                sidebarContentDataArray.findIndex(
                  (item) => item.name === selectedContent
                ) === 0
                  ? "cursor-not-allowed"
                  : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={
                sidebarContentDataArray.findIndex(
                  (item) => item.name === selectedContent
                ) ===
                sidebarContentDataArray.length - 1
              }
              className={`text-white text-[14px] md:text-[20px] mt-8 md:mt-14 px-5 md:px-9 py-2 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92] ${
                sidebarContentDataArray.findIndex(
                  (item) => item.name === selectedContent
                ) ===
                sidebarContentDataArray.length - 1
                  ? "cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
