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
    name: "Material Ui",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
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
  {
    name: "Wordpress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
  },
  {
    name: "Sanity",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-plain.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Bootsrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
];
const BackendStacks = [];
const About = () => {
  return (
    <div className="flex flex-col p-[1rem] text-dark-blue-color gap-[2rem] z-[100px]">
      <div className="large-text serif-text text-center red-gradient">
        <span className="">Know</span> More <span className="">About</span> Me
      </div>
      {/* About */}
      <div className="flex max-md:flex-col gap-[4rem] h-full p-[1rem] sm:p-[3rem]">
        {/* Information */}
        <div className="flex flex-col gap-[4rem] w-full  ">
          <div className="flex flex-col gap-[1rem] text-center sm:text-left">
            <p>
              Full Stack Developer with years of experience in developing robust
              web applications using cutting edge technologies.Checkout my
              projects for more
            </p>{" "}
          </div>
          <div className="sm:flex gap-[2rem] hidden">
            <button className="black_btn">Projects</button>
          </div>
        </div>
        <div className="flex flex-wrap  sm:w-[70%]  w-full ">
          <TechStack stacks={FrontendStacks} />
        </div>
        <div className="flex gap-[2rem] sm:hidden ">
          <button className="black_btn">Projects</button>
        </div>
      </div>
    </div>
  );
};

export default About;
