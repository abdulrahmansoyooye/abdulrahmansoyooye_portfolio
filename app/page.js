"use client";
import About from "@/components/About";
import Certified from "@/components/Certified";
import Collaborate from "@/components/Collaborate";
import Experience from "@/components/Exprience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
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

      <section id="skills">
        <TechStack />
      </section>
      <section id="projects">
        {" "}
        <Projects />
      </section>
      <section id="collaborate">
        {" "}
        <Collaborate />
      </section>
      <Footer />
    </main>
  );
}
