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
    name: "Nextjs",
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
    <div className="flex flex-col p-[2rem] text-dark-blue-color gap-[2rem] z-[100px]">
      <div className="large-text serif-text text-center ">
        <span className="text-orange-color">Know</span> more{" "}
        <span className="text-orange-color">about</span> me
      </div>
      {/* About */}
      <div className="flex max-md:flex-col gap-[4rem] h-full p-[1rem] sm:p-[3rem]">
        {/* Information */}
        <div className="flex flex-col gap-[4rem] w-full justify-between sm:w-[50%]">
          <div className="flex flex-col gap-[1rem]">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              facilis quasi quo sint earum alias quae iure magni nemo cumque
              doloremque perferendis id, quam ex! Magni nostrum ab earum libero.
            </p>{" "}
          </div>
          <div className="sm:flex gap-[2rem] hidden">
            <button className="black_btn">Projects</button>
          </div>
        </div>
        <div className="sm:w-[50%] w-full  ">
          <div className="flex flex-wrap gap-[1rem] w-full px-[1rem] items-start justify-start h-full">
            <div className="text-center p-[2rem] bg-alt-color text-dark-blue-color rounded w-[150px] ">
              Dedicated Developer
            </div>
            <div className="text-center p-[2rem] bg-alt-color text-dark-blue-color rounded w-[150px] ">
              Tech Enthusiast
            </div>
            <div className="text-center p-[2rem] bg-alt-color text-dark-blue-color rounded w-[150px] ">
              Problem Solver
            </div>
            <div className="text-center p-[2rem] bg-alt-color text-dark-blue-color rounded w-[150px] ">
              Problem Solver
            </div>
            <div className="text-center p-[2rem] bg-alt-color text-dark-blue-color rounded w-[150px] ">
              Problem Solver
            </div>
            <div className="text-center p-[2rem] bg-alt-color text-dark-blue-color rounded w-[150px] ">
              Problem Solver
            </div>
          </div>
        </div>
        <div className="flex gap-[2rem] sm:hidden ">
          <button className="black_btn">Projects</button>
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-[2rem] w-full   justify-center items-center">
        {/* Frontend */}
        <div className="flex flex-col gap-[1rem] w-full">
          <div className="w-full">
            <TechStack stacks={FrontendStacks} />
          </div>
        </div>
        {/* Backend */}
      </div>
    </div>
  );
};

export default About;
