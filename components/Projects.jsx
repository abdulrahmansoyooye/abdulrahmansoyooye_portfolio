"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
const projects = [
  {
    id: 1,
    name: "Review Tracker App",
    designation: "React Framework",
    image: "/assets/images/project-review.jpg",
    link: "https://review-tracker-three.vercel.app/",
  },
  {
    id: 2,
    name: "Sayf Productive Muslims",
    designation: "The langueage that powers the web",
    image: "/assets/images/project-sayf.jpg",
    link: "https://sayfnetwork.vercel.app/",
  },

  {
    id: 3,
    name: "Islamic Question and Answer",
    designation: "Javascript framework",
    image: "/assets/images/project-qa.jpg",
    link: "https://islamicqa-app.vercel.app/",
  },
  {
    id: 4,
    name: "Sayf Backend",
    designation: "No SQL Database",
    image: "/assets/images/backend-sayf.jpg",
    link: "https://github.com/abdulrahmansoyooye/sayfbackend",
  },
];
export function Projects() {
  return (
    <div className="flex flex-col flex-wrap justify-center  p-[2rem]  items-center gap-[3rem] text-dark-blue-color">
      <div className=" flex flex-col justify-center items-center ">
        <span className="large-text serif-text text-center font-[500] bg-gradient">
          <span className="red-gradient">Beautiful</span> Websites{" "}
          <span className="red-gradient">made</span> by me
        </span>
        <div className="text-center ">
          These were created entirely from scratch; not YouTube code-along
          tutorials.
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-[100%]  max-lg:w-full items-center gap-[5rem]">
        {projects.map(({ id, image, name, designation, link }, index) => (
          <CardContainer className="inter-var" key={id}>
            <CardBody
              key={id}
              className={`border h-auto rounded p-6 shadow-md bg-alt-color `}
            >
              <CardItem translateZ="100" className="w-full mt-2">
                <Image
                  src={image}
                  height="1000"
                  width="1000"
                  className="h-80 w-120 object-cover rounded group-hover/card:shadow-xl "
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem className="text-[1.5rem] text-dm font-bold text-text-color mt-4">
                {name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {designation}
              </CardItem>

              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={link}
                  target="__blank"
                  className="px-4 py-2 rounded border w-full text-center font-normal "
                >
                  See it live →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}