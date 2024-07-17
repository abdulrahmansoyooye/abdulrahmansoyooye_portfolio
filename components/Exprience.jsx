const experience = [
  {
    Title: "Tech Lead",
    location: "Sayf Network",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae dolor tenetur, quo illum aperiam dicta libero ducimus veritatis quas nulla",
  },
  {
    Title: "Frontend Developer",
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
        <span className="red-gradient">My Previous roles</span>
      </div>
      {/* Experience */}
      <div className="flex flex-col border  p-[1rem] rounded  gap-[2rem] h-full sm:p-[3rem]">
        {/* Information */}

        <div className="w-full m-auto h-full ">
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
