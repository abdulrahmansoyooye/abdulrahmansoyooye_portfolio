"use client";
import About from "@/components/About";
import Collaborate from "@/components/Collaborate";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Hooker from "@/components/Hooker";
import TechStack from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonial";
import Underline from "@/components/Underline";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="home">
        {" "}
        <Hero />
      </section>

      <section id="about">
        {" "}
        <About />
      </section>
      <section id="hooker">
        {" "}
        <Hooker />
      </section>

      <section id="projects">
        {" "}
        <Projects />
      </section>
      <section id="stacks">
        <TechStack />
      </section>
      <section id="collaborate">
        {" "}
        <Collaborate />
      </section>
      <Footer />
    </main>
  );
}
