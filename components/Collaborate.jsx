import Image from "next/image";
import { Worldwide } from "./Worldwide";

const Collaborate = () => {
  return (
    <div className="flex flex-col gap-[2rem] p-[0rem_4rem] pt-[2rem]  justify-between items-center ">
      <div className="flex flex-col gap-[2rem] w-[70%] max-lg:w-full m-auto justify-start  text-center">
        <div className="large-text serif-text font-[500] ">
          We can <span className="red-gradient">work</span> together from
          anywhere in the <span className="red-gradient">world</span>
        </div>
        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          quae voluptate.
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
