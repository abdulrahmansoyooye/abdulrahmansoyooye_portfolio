import Image from "next/image";
import React from "react";

const SocialIcons = () => {
  return (
    <>
      <div className="w-full flex justify-evenly ">
        <div className="social_btn">
          <Image
            src={"/assets/socials/github.jpg"}
            width={20}
            height={20}
            className="rounded-[50%] "
          />
        </div>
        <div className="social_btn">
          <Image
            src={"/assets/socials/twitter.jpg"}
            width={20}
            height={20}
            className="rounded-[50%] "
          />
        </div>
        <div className="social_btn">
          <Image
            src={"/assets/socials/linkedin.jpg"}
            width={20}
            height={20}
            className="rounded-[50%] "
          />
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
