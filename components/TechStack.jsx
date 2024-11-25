const stacks = [
  {
    name: "Nodejs",
    src: "node",
  },
  {
    name: "React",
    src: "react",
  },
  {
    name: "Javascript",
    src: "javascript",
  },
  {
    name: "Typescript",
    src: "typescript",
  },
  {
    name: "Nextjs",
    src: "nextjs",
  },
  {
    name: "Mongodb",
    src: "mongodb",
  },
  {
    name: "Tailwind",
    src: "tailwind",
  },
  {
    name: "Git",
    src: "git",
  },
];
export default function TechStack() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Explore the technologies I use to build exceptional web apps
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              You need a developer with the skills to bring your ideas to pages.
              From building responsive frontends to developing scalable backend
              applications
            </p>
          </div>
          <div className="mx-auto grid w-full gap-[1rem] max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {stacks.map(({ name, src }) => (
              <div
                key={name}
                className="flex  p-2 gap-[1rem] items-center justify-end flex-row-reverse"
              >
                <div className="text-white ">{name}</div>
                <img
                  alt={name}
                  src={`/assets/stacks/${src}.png`}
                  className="max-h-12  object-contain object-left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
