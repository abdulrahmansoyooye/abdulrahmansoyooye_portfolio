import Image from "next/image";
import React from "react";

const Certified = () => {
  return (
    <div className="flex flex-col gap-[2rem]  p-[2rem] text-dark-blue-color z-50">
      <div className="flex flex-col sm:w-[70%] m-auto gap-[1rem]">
        <div className="large-text serif-text text-center">
          I was also<span className="text-red-color"> Certified </span>by{" "}
          <span className="text-red-color">IBM</span>
        </div>
        <div className="text-[1rem] text-center">
          I'm thrilled to share that I've earned a <strong>certificate</strong>{" "}
          from <strong>Coursera</strong>! This accomplishment reflects my
          dedication to continuous learning and my commitment to staying at the
          forefront of web development. The skills and knowledge gained through
          this course have further honed my abilities, enabling me to bring even
          more value to my <strong>projects and collaborations</strong>.
        </div>
      </div>
      <div className="p-[2rem] rounded border w-full sm:w-[70%] m-[0rem_auto]">
        <Image
          src={"/assets/images/certificate.jpg"}
          width={700}
          height={400}
          className="m-auto"
        />
      </div>
      <div className="w-[50%] sm:w-[20%] m-[0rem_auto]">
        <a
          href="https://coursera.org/verify/FXLKTZBZ7UFX"
          target="_blank"
          className="w-full"
        >
          {" "}
          <button className="black_btn">View Link</button>
        </a>
      </div>
    </div>
  );
};

export default Certified;
