"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/contact",
    },
    {
      name: "Experience",
      link: "/contact",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="flex flex-col gap-[1rem] fixed w-full z-[1000]">
      <div></div>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
