import Image from "next/image";
import { Worldwide } from "./Worldwide";
import Underline from "./Underline";

const Collaborate = () => {
  return (
    <div className="flex flex-col gap-[2rem] p-[0rem_2rem] pt-[2rem]  justify-between items-center ">
      <div className="flex flex-col gap-[2rem] w-[70%]  max-lg:w-full m-auto justify-start  text-center">
        <div className="large-text serif-text font-[500] ">
          We can <span className="text-red-color">work</span> together from
          anywhere in the <span className="text-red-color">world</span>
          <Underline />
        </div>
        <div className="">
          I am proficient at <strong>collaborating</strong> with individuals and
          teams from all <span>corners of the globe</span>, ensuring seamless
          communication and productive partnerships regardless of location.
        </div>
      </div>
      <div className="max-lg:w-full">
        {/* <Worldwide /> */}
        <img src={"/assets/stacks/map.svg"} className="w-full" />
      </div>
    </div>
  );
};

export default Collaborate;
