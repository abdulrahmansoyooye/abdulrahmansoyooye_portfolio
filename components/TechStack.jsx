import Image from "next/image";
import React from "react";

const TechStack = ({ stacks }) => {
  return (
    <div className="flex gap-[1rem] flex-wrap  w-full justify-around items-center ">
      {stacks.map(({ name, src }, index) => (
        <div
          className="rounded flex flex-col bg-background-color justify-center p-[1rem_2rem] items-center gap-[1rem] w-[110px]"
          key={`${index}-${name}`}
        >
          <Image src={src} width={50} height={50} className="" />
          <div className="text-center ">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
