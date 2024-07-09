import Image from "next/image";
import React from "react";

const Certified = () => {
  return (
    <div className="flex flex-col gap-[2rem]  p-[2rem] text-dark-blue-color z-50">
      <div className="flex flex-col sm:w-[70%] m-auto gap-[1rem]">
        <div className="large-text serif-text text-center">
          Full Stack Developer{" "}
          <span className="red-gradient">Certified by IBM</span>
        </div>
        <div className="text-[0.9rem] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          ad, soluta et harum voluptate, illum explicabo ipsa reprehenderit nisi
          beatae neque provident, dignissimos minima adipisci pariatur
          distinctio? Tenetur, a? Dolorem.
        </div>
      </div>
      <div className="p-[2rem] rounded border-2 w-full sm:w-[70%] m-[0rem_auto]">
        <Image
          src={"/assets/images/certificate.jpeg"}
          width={700}
          height={400}
          className="m-auto"
        />
      </div>
      <div className="w-[50%] sm:w-[20%] m-[0rem_auto]">
        <button className="black_btn ">View Link</button>
      </div>
    </div>
  );
};

export default Certified;
