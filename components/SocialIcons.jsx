import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  return (
    <>
      <div className="w-full flex justify-evenly ">
        <div className="social_btn">
          <Link href={"https://github.com/abdulrahmansoyooye"} target="_blank">
            <Image
              src={"/assets/socials/github.jpg"}
              width={20}
              height={20}
              className="rounded-[50%] "
            />
          </Link>
        </div>
        <div className="social_btn">
          <Link href={"https://twitter.com/abdulrahmansoyo/"} target="_blank">
            <Image
              src={"/assets/socials/twitter.jpg"}
              width={20}
              height={20}
              className="rounded-[50%] "
            />
          </Link>
        </div>
        <div className="social_btn">
          <Link
            href={"https://www.linkedin.com/in/abdulrahman-soyooye-814435294/"}
            target="_blank"
          >
            <Image
              src={"/assets/socials/linkedin.jpg"}
              width={20}
              height={20}
              className="rounded-[50%] "
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
