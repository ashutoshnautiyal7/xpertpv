"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="py-[25px] md:py-[50px] px-[1.2rem] md:px-[2.5rem] lg:px-[4rem] xl:px-[6.2rem] flex justify-between items-center bg-[#F4FEFF] ">
        <div>
          <Link href="/" className="flex gap-2 md:gap-4 items-center">
            <span className="text-[18px] md:text-[24px] font-medium">
              Xpert PV
            </span>
            <Image
              src="/Images/logo.png"
              width={50}
              height={50}
              className="hidden md:flex"
              alt="£"
            />
            <Image
              src="/Images/logo.png"
              width={30}
              height={30}
              className="flex md:hidden"
              alt="£"
            />
          </Link>
        </div>
        <div className="text-[14px] md:text-[20px] font-medium gap-0 md:gap-5 lg:gap-20 items-center flex">
          <span className="gap-16 lg:gap-20  hidden lg:flex">
            <Link href="/" onClick={closeSidebar}>
              Home
            </Link>
            <Link href="/blogs" onClick={closeSidebar}>
              Blogs
            </Link>
            <Link href="/xplorePV" onClick={closeSidebar}>
              Xplore PV
            </Link>
            <Link href="/aboutUs" onClick={closeSidebar}>
              About
            </Link>
          </span>
          <button className="text-white px-5 md:px-9 py-1.5 md:py-2.5 rounded-3xl bg-gradient-to-r from-[#56E9EE] to-[#016E92]">
            Login
          </button>
          <span className="hidden md:flex lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
          </span>
          <span className="flex md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </span>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`sidebar ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed bg-[#F4FEFF] h-screen w-[50vw] shadow-xl  transition-transform duration-500 ease-in-out z-10`}
      >
        <div className="p-8">
          <span className="gap-16 lg:gap-20 flex flex-col">
            <Link href="/" onClick={closeSidebar}>
              Home
            </Link>
            <Link href="/xplorePV" onClick={closeSidebar}>
              Xplore PV
            </Link>
            <Link href="/aboutUs" onClick={closeSidebar}>
              About
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
