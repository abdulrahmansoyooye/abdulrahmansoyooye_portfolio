import SocialIcons from "./SocialIcons";

export function Hero() {
  return (
    <div className="flex flex-col  text-dark-blue-color  pt-[8rem] px-[2rem] pb-[2rem] justify-around gap-[5rem]  ">
      <div className="flex flex-col justify-start gap-[3rem]  items-start sm:items-center z-[5000]">
        <div className="flex flex-col sm:w-[60%]  sm:items-start gap-[2rem]">
          <div className="flex justify-start font-[600] text-[1.2rem] bg-red-color p-[1rem] w-[40%] text-white rounded  items-center">
            Hello there<span className="text-[3rem]">👋</span>{" "}
          </div>
          <div className="flex flex-wrap serif-text large-text sm:m-auto bg-[#ffff] p-[2rem] rounded text-center">
            I'm Soyooye Abdulrahman
          </div>
          <div className="flex flex-wrap justify-center  w-full font-[500]">
            A develper you can trust
          </div>
        </div>{" "}
        <div className="w-[50%] sm:w-[20%] m-[0rem_auto] ">
          <button className="yellow_btn ">My Projects</button>
        </div>
      </div>
      <div className="w-full sm:w-[50%] m-[0rem_auto] flex justify-center z-[5000]">
        <SocialIcons />
      </div>
    </div>
  );
}
