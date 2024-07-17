import React from "react";

const Underline = () => {
  return (
    <div className="flex flex-col gap-[2rem] items-center pt-[2rem] w-full">
      <div className="text-underline w-full "></div>
      <div className="flex gap-[1.5rem] justify-center">
        {" "}
        <div className="text-underline"></div>
        <div className="text-underline"></div>
      </div>
    </div>
  );
};

export default Underline;
