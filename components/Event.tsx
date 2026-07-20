"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { anim, calendar, date, name, txt1, txt1_1, txt2, txt2_1, txt3 } from "@/data/data";
import { motion } from "framer-motion";
import AttendanceGuests from "./RSVP";
import { Program } from "./Program";
import { Footer } from "./footer";
import Link from "next/link";

export function Event({ openEnvelope }: any) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "block" : "hidden"} text-center overflow-hidden  FontSHK_Dzeragir `}
    >
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#4a4a4a81]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="m-auto max-w-md ">
        {/* arajin mas */}
        <div
          className="FontSHK_Dzeragir py-20  tracking-0 h-screen bg-cover bg-top flex flex-col justify-between pt-20 p-7 "
          style={{ backgroundImage: "url('/img1.jpg')" }}
        >
          <div className="flex items-center justify-center">
            <h2 className="text-[64px] mb-20 text-vrayi text-shadow-red-900  text-shadow-2xs -mr-20">{name[0]}</h2>
            <span className="text-9xl text-taki"> & </span>
            <h2 className="text-[64px] mt-20 text-vrayi text-shadow-red-900  text-shadow-2xs -ml-13">{name[1]}</h2>
          </div>
          <p className="FontSHK_Dzeragir text-[64px] text-shadow-red-900 text-shadow-2xs  text-vrayi">{date}</p>
        </div>

        {/* 2rd mas teqster */}
        <div className="FontSHK_Dzeragir px-5 my-20">
          <motion.h3 {...anim} className=" text-sovorakan relative text-[36px]">
            Սիրելիներս
            <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-taki">
              Սիրելիներս
            </p>
          </motion.h3>
          <motion.p
            {...anim}
            className=" text-sovorakan relative  text-2xl mt-10"
          >
            {txt1}
            <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
              {txt1_1}
            </span>
          </motion.p>
        </div>

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-30 relative w-full text-[#580000] ">
          <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-7xl -rotate-2  -translate-x-full">
            I Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You
          </div>
          <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-6xl mb-10 rotate-2  -translate-x-full">
            I Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You
          </div>
          <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-5xl mt-15  -rotate-2 -translate-x-full">
            I Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You
          </div>
          <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
            I Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You
          </div>
          <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-3xl mt-15 -rotate-2 -translate-x-full">
            I Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You
          </div>
          <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-2xl mb-10 rotate-2  -translate-x-full">
            I Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You
          </div>
          <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-xl mt-15 -rotate-2 -translate-x-full">
            I Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You I Love You I Love You I Love You I
            Love You I Love You I Love You
          </div>
          <Image
            src="/img4.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-[65%] rotate-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute object-cover  "
          />
        </div>

        {/* hethashxvark */}
        <TimeBox />

        {/* jamnakacuyc */}
        <div className="relative my-30 ">
          <Image
            src="/icon1.png"
            alt="icon1"
            width={500}
            height={500}
            className="-z-1 w-30  top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3  absolute  "
          />
          <Image
            src="/icon4.png"
            alt="icon1"
            width={500}
            height={500}
            className="-top-10 absolute -z-1 w-full  "
          />
          <div className="FontArmDecorativeU flex justify-around ml-4 -rotate-7">
            <div className="flex flex-col gap-10">
              <p className="text-sm">{calendar[0][0]}</p>
              <p className="text-4xl">{calendar[1][0]}</p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-sm">{calendar[0][1]}</p>
              <p className="text-4xl">{calendar[1][1]}</p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-sm">{calendar[0][2]}</p>
              <p className="text-4xl">{calendar[1][2]}</p>
            </div>
          </div>
        </div>

        <motion.p {...anim} className="relative text-sovorakan  text-2xl my-10">
          <span className=" text-sovorakan text-2xl mt-10">{txt3}</span>

          <Link href="https://www.google.com/maps/place/nur+restoran/data=!4m2!3m1!1s0x406abe6dcb2f996b:0x6c67cea91f760e02?sa=X&ved=1t:242&hl=ru-RU&ictx=111">
            <span className=" flex items-center gap-2 justify-center mt-5 relative">
              <span>Հասցե</span>

              <Image
                src="/icon3.png"
                alt="icon1"
                width={500}
                height={500}
                className=" w-5 h-5 object-cover"
              />
            </span>
          </Link>
          <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
            {txt3}
          </span>
        </motion.p>
        {/* nkar */}
        <motion.div {...anim} className="px-5">
          <Image
            src="/img2.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full  object-cover rounded-xl mb-20 "
          />
        </motion.div>

        {/* erb asen teqst */}
        <motion.p
          {...anim}
          className=" mb-20 text-sovorakan relative  text-2xl mt-10"
        >
          {txt2}
          <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
            {txt2_1}
          </span>
        </motion.p>

        {/* RSVP */}
        <AttendanceGuests />
      </div>

      <Footer />
    </div>
  );
}
