"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Experience",
      link: "experience",
    },
    {
      name: "Collaborate",
      link: "collaborate",
    },
  ];
  return (
    <div className="flex flex-col gap-[1rem] fixed w-full z-[1000]">
      <div></div>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
