"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div className="p-32">Loading...</div>;
  }

  return (
    <section className="bg-red-200 py-16 md:py-32 px-[1.2rem] md:px-16 xl:px-32 flex items-center justify-center">
      <div className="flex h-[92vh] w-full">
        <div className="min-w-[40vw] relative rounded-l-[2.8rem] hidden lg:inline">
          <img
            src="/Images/login.png"
            alt="#"
            className="object-cover h-[92vh] w-full rounded-l-[2.8rem]"
          />
          <h1 className="text-black text-[48px] font-bold absolute top-12 left-[32%]">
            Xpert PV
          </h1>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center bg-white w-full px-6 md:px-12 py-10 rounded-[2rem] lg:rounded-[0rem] lg:rounded-r-[2.8rem]">
          <h2 className="font-bold text-[#0383AB] text-[32px]">Log In</h2>
          <form action="" className="flex w-full flex-col gap-8 mt-8">
            <div className="border-black border rounded-xl p-3.5 flex flex-col relative w-full">
              <label className="absolute -top-3 w-[4rem] bg-white px-1">
                Name*
              </label>
              <span className="flex gap-4 items-center px-4">
                <FaRegUser className="" />
                <input
                  type="text"
                  placeholder="Type your Name"
                  className="w-full outline-none"
                />
              </span>
            </div>
            <div className="border-black border rounded-xl p-3.5 flex flex-col relative w-full">
              <label className="absolute -top-3 w-[4rem] bg-white px-1">
                Email*
              </label>
              <span className="flex gap-4 items-center px-4">
                <MdMailOutline className="w-5 h-5" />
                <input
                  type="email"
                  placeholder="Type your Email"
                  className="w-full outline-none"
                />
              </span>
            </div>
            <button className="text-white bg-[#FFB11B] p-2.5 text-[18px] rounded-xl mt-5 font-semibold">
              Log In
            </button>
            <button
              onClick={() => signIn("google")}
              className="text-white bg-[#FFB11B] p-2.5 text-[18px] rounded-xl -mt-4 font-semibold"
            >
              Sign in with Google
            </button>
            <Link href="/signup" className="text-[12px] mx-auto -mt-3.5">
              Don’t have an account? <b className="text-[#0383AB]">Sign Up</b>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
