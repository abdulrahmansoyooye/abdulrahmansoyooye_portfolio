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
        <div className="flex flex-col justify-center  items-center text-center gap-[3rem]  p-[3rem_1rem] mt-[4rem] w-full sm:w-[70%]   bg-alt-color text-dark-color rounded  ">
          <div className="flex flex-col gap-[1rem]">
            <div className="text-[2.5rem] font-[500] serif-text ">
              Ready to <span className="text-orange-color">Collaborate</span>?
              Let's Make Something{" "}
              <span className="text-orange-color">Awesome</span> Together!
            </div>
            <div>
              Are you ready to work with me? Let’s create something amazing
              together!
            </div>
          </div>
          <div className="w-[60%]">
            <button className="black_btn">Let's Collaborate</button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-[2rem] items-center justify-between flex-wrap p-[1rem_2rem] bg-alt-color ">
        <div className="font-[300] text-[1rem]">copyright©2024</div>
        <div className="w-full  sm:w-[20%]">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
