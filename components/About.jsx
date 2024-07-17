import TechStack from "./TechStack";
const FrontendStacks = [
  {
    name: "Nextjs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Framer ",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
  {
    name: "Tailwind css",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },

  {
    name: "Java script",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Node Js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Mogngo DB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Post Man",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
];
const BackendStacks = [];
const About = () => {
  return (
    <div className="flex flex-col p-[1rem] text-dark-blue-color gap-[2rem] z-[100px]">
      <div className="large-text serif-text text-center red-gradient">
        Say Hi to Me and My Tech stacks
      </div>
      {/* About */}
      <div className="flex max-md:flex-col gap-[4rem] h-full p-[1rem] sm:p-[3rem]">
        {/* Information */}
        <div className="flex flex-col gap-[4rem] w-full ">
          <div className="flex flex-col gap-[1rem] text-left  text-[1.1rem] justify-between  h-full">
            <p>
              Hey there! I'm Abdulrahman, a web developer, turning coffee into
              code and dreams into reality. My journey through the digital
              landscape has been filled with triumphs, late-night debugging
              sessions, and a few too many cups of coffee. I’ve created some
              pretty cool stuff, like the <strong>Review Tracker app</strong>,
              where users can register, log in, and even peek at other
              profiles—because who doesn’t love a bit of friendly snooping?
              Editing profiles is a breeze, and logging out is just as easy when
              you need a break from all the social interaction. <br />
              <br />
              {"  "} Next up, I built <strong>Sayf Productive Muslims</strong>,
              a mobile-responsive haven that’s like a Swiss Army knife for
              productivity within the Muslim community. With a landing page and
              six more pages of awesomeness, it’s got everything you need,
              neatly paginated for your scrolling pleasure. <br />
              <br />
              Ever wanted to send a message without anyone knowing it’s you?
              Enter the <strong>Anonymous Message platform</strong>! Your
              secrets are safe with us, and the admin gets your thoughts without
              the drama. It’s like being a superhero with an invisible cape.
            </p>{" "}
            <div className="sm:flex gap-[2rem] hidden ">
              <button className="black_btn">My Projects</button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  sm:w-[70%]  w-full ">
          <TechStack stacks={FrontendStacks} />
        </div>
        <div className="flex gap-[2rem] sm:hidden ">
          <button className="black_btn">My Projects</button>
        </div>
      </div>
    </div>
  );
};

export default About;
