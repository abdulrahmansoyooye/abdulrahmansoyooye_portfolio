import Underline from "./Underline";

const experience = [
  {
    Title: "Frontend Developer",
    location: "Sayf Network",
    content:
      "As a frontend developer, I breathe life into web designs, creating interactive and visually appealing applications. My role was pivotal in Sayf Network, where I developed a sleek, mobile-responsive interface with a landing page and six additional pages",
  },
  {
    Title: "Personal Project",
    location: "Personal Project",
    content:
      "One of my favorite personal projects is the Anonymous Message platform. This project showcases my ability to create secure and user-centric applications. I developed a system where users can send anonymous messages to the admin, ensuring their privacy and the security of their messages",
  },
  {
    Title: "Backend Developer",
    location: "Sayf Backend Team",
    content:
      "In my role as a backend developer, I was the backbone of Sayf Backend and Islamic Q&A. For Sayf Backend, I designed and implemented robust CRUD operations, managing the interaction with the database and third-party platforms for resource uploads",
  },
];
const Experience = () => {
  return (
    <div className="flex flex-col p-[2rem] text-dark-blue-color gap-[2rem]">
      <Underline />
      <div className="flex flex-col  items-center large-text serif-text text-center ">
        <span className="text-orange-color">Explore My Developer Journey</span>
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
                <p className="font-[600] text-[1.3rem] text-red-color">
                  {Title}
                </p>
                <p className="text-[1rem] ">{content}</p>
                <strong className="text-[.9rem] ">{location}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
