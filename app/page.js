"use client";
import About from "@/components/About";
import Certified from "@/components/Certified";
import Collaborate from "@/components/Collaborate";
import Experience from "@/components/Exprience";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonial";
import Underline from "@/components/Underline";
import { useState } from "react";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <section id="home" className="w-full bg-alt-color">
        <img src="/assets/images/bgimage.png" className="w-full absolute  " />

        <Hero />
      </section>
      <section
        id="about"
        className="bg-alt-color pb-[5rem] pt-[4rem] relative "
      >
        <img
          src="/assets/stacks/blue-bottom.svg"
          className="w-full absolute rotate-180 -z-50"
        />
        <About />
      </section>
      <section id="projects" className="bg-white pb-[5rem] relative">
        <img
          src="/assets/images/bgimage.png"
          className="w-full absolute rotate-180 "
        />
        <Projects />
      </section>
      <section id="certified" className=" pb-[5rem] relative">
        <Certified />
      </section>
      <section
        id="experience"
        className="relative z-[100] bg-alt-color pb-[5rem]"
      >
        <Experience />
      </section>
      {/* <div className="z-[100] bg-white pb-[5rem] relative">
        <Testimonials />
      </div>{" "} */}

      <section
        id="collaborate"
        className="z-[100] bg-alt-color pb-[5rem] relative"
      >
        <Underline />
        <Collaborate />
      </section>
      <div className="z-[100] ">
        <Footer />
      </div>
    </main>
  );
}
