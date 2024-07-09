import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="relative flex flex-col h-[70vh] justify-between  gap-[3rem] text-dark-blue-color -z-50">
      <img
        src="/assets/stacks/bg-2.svg"
        className=" w-full sm:flex absolute bottom-0 hidden -z-50"
      />
      <div className="flex justify-center w-full p-[0rem_2rem] sm:p-[0rem_4rem]">
        <div className="flex flex-col justify-center  items-center text-center gap-[3rem]  p-[3rem_1rem] mt-[4rem] w-full sm:w-[70%]   bg-red-color text-light-color rounded  ">
          <div className="flex flex-col gap-[1rem]">
            <div className="text-[2.5rem] font-[500] serif-text ">
              Ready to work <span className="">with</span> me?
            </div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit</div>
          </div>
          <div className="w-[60%]">
            <button className="black_btn">Let's get in touch</button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-[2rem] items-center justify-between flex-wrap p-[1rem_2rem] bg-alt-color ">
        <div className="font-[300] text-[1rem]">copyright©2024</div>
        <div className="w-[50%]  sm:w-[20%]">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
