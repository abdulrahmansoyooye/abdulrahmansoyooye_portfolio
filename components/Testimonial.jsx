"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="flex flex-col gap-[2rem] items-center justify-center overflow-hidden text-dark-blue-color">
      <div className="large-text serif-text text-center font-[500] ">
        {" "}
        Words from
        <span className="red-gradient"> delighted</span> clients
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    quote: "It was the best of times.",
    name: "Charles Dickens",
  },
  {
    quote: "To be, or not to be.",
    name: "William Shakespeare",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
  },
  {
    quote: "It is a truth universally acknowledged.",
    name: "Jane Austen",
  },
  {
    quote: "Call me Ishmael.",
    name: "Herman Melville",
  },
];
