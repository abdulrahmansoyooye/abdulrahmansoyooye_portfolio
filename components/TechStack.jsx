import Image from "next/image";
import React from "react";

const TechStack = ({ stacks }) => {
  return (
    <div className="flex gap-[2rem] flex-wrap text-wrap w-full justify-center items-center ">
      {stacks.map(({ name, src }, index) => (
        <div
          className="rounded flex flex-col bg-alt-color justify-center p-[1rem_2rem] items-center gap-[1rem] "
          key={`${index}-${name}`}
        >
          <Image src={src} width={50} height={50} className="" />
          <div className="flex ">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
