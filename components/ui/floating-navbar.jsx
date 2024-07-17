"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [navToggle, setNavToggle] = useState(true);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          ` flex flex-col w-[90%] ${
            navToggle && "h-[6rem] transition-all duration-300 "
          } gap-[1rem] overflow-clip sm:w-[40%] justify-between items-center mx-auto border rounded-[0.8rem]  bg-[#ffff] px-10 py-5  space-x-4 `,
          className
        )}
      >
        {" "}
        <div className="flex justify-between w-full items-center ">
          <div className="cursor-pointer">
            {" "}
            <Image
              src={"/assets/images/logo.png"}
              width={50}
              height={20}
              className="rounded-full"
            />
          </div>
          <div className="cursor-pointer">
            {" "}
            <Image
              src={"/assets/images/menu.png"}
              width={20}
              height={20}
              onClick={() => setNavToggle(!navToggle)}
            />
          </div>
        </div>
        <div className="flex w-[80%]   justify-center items-center flex-wrap gap-[1rem]">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn("relative items-center flex space-x-1 ")}
            >
              <div className="block cursor-pointer font-[400] transition-all duration-300 hover:mt-2">
                {navItem.name}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
