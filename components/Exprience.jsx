const experience = [
  {
    Title: "Tech Lead",
    location: "Sayf Network",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae dolor tenetur, quo illum aperiam dicta libero ducimus veritatis quas nulla",
  },
  {
    Title: "Nextjs Developer",
    location: "Sayf Network",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae dolor tenetur, quo illum aperiam dicta libero ducimus veritatis quas nulla",
  },
  {
    Title: "Backend Developer",
    location: "Sayf Network",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae dolor tenetur, quo illum aperiam dicta libero ducimus veritatis quas nulla",
  },
];
const Experience = () => {
  return (
    <div className="flex flex-col p-[2rem] text-dark-blue-color gap-[2rem]">
      <div className="large-text serif-text text-center ">
        Check out <span className="red-gradient">my previous </span>roles
      </div>
      {/* Experience */}
      <div className="flex flex-col gap-[2rem] h-full p-[1rem] sm:p-[3rem]">
        {/* Information */}

        <div className="w-full gap-[2rem] border p-[1rem] rounded sm:w-[60%] m-auto">
          <img
            src={"/assets/images/performance.png"}
            className="w-full sm:w-[80%] m-auto"
          />
        </div>
        <div className="w-full m-auto border ronuded p-[1rem] rounded h-full ">
          <div className="flex flex-wrap gap-[1rem] w-full justify-center">
            {experience.map(({ Title, content, location }, index) => (
              <div
                className="flex flex-col gap-[1rem] justify-start p-[2rem] bg-[#ffff] text-dark-blue-color rounded w-full sm:max-w-[40%]"
                key={`${index}-${location}`}
              >
                <p className="font-[600] text-[1.2rem]">{Title}</p>
                <p className="text-sm ">{content}</p>
                <p className="text-sm">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
