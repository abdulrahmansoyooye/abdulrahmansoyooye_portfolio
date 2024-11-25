export default function Projects() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {" "}
        <h2 className="text-base/7 font-semibold text-indigo-400">
          My Projects{" "}
        </h2>{" "}
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          High Quality Projects for happy clients{" "}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-200">
                  Full stack Developer at Sayf Network
                </h3>
                <p className="mt-2 text-[1.5rem] font-medium tracking-tight text-white">
                  Sayf Network & Admin Dashboard
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  A productivity app tailored for Muslims.Built the frontend and
                  admin dashboard using Next.js and MongoDB, creating a seamless
                  and intuitive user experience
                </p>
                <a
                  href="https://sayfnetwork.vercel.app/"
                  target="_blank"
                  className="text-sm/6 font-semibold text-white"
                >
                  View live <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
              <img
                alt=""
                src="/assets/images/project-qa.jpg"
                className="h-80 object-cover object-center"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-200">
                  Full stack project
                </h3>
                <p className="mt-2 text-[1.5rem] font-medium tracking-tight text-white">
                  AI Powered Bot for Islamic Question and Answers
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  This AI-powered chatbot simplifies finding Islamic answers. I
                  developed the backend with Node.js, Express, MongoDB, Helmet,
                  and Multer, while the React-based frontend includes robust
                  authentication features
                </p>
                <a
                  href="https://islamicqa-app.vercel.app/"
                  targer="_blank"
                  className="text-sm/6 font-semibold text-white"
                >
                  View live <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover object-center"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-200">
                  Team lead at Nexatage{" "}
                </h3>
                <p className="mt-2 text-[1.5rem] font-medium tracking-tight text-white">
                  Distinct patterns fashion store
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  A modern fashion store app. I handled the backend with Sanity
                  and created a responsive frontend using Next.js, delivering a
                  stylish and efficient shopping platform with super
                  functionalities.
                </p>
                <a
                  href="https://distinct-patterns.vercel.app/"
                  taget="_blank"
                  className="text-sm/6 font-semibold text-white"
                >
                  View live <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-releases.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-200">
                  Ongoing project
                </h3>
                <p className="mt-2 text-[1.5rem] font-medium tracking-tight text-white">
                  Rawaaq School Manager
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Rawaaq is an ongoing project designed to simplify school
                  management. I’m building a clean, functional frontend with
                  Next.js, Tailwind, and ShadCN, complete with authentication
                  for secure access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
