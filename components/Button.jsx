"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorder({ text }) {
  return (
    <Button>
      <div className="text-white text-ibm"> {text}</div>
    </Button>
  );
}
