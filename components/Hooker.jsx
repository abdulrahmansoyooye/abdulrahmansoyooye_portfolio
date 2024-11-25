import { CheckCircleIcon } from "@heroicons/react/24/outline";
const features = [
  {
    name: "You need a developer",
    description:
      "who values communication and in and thrives in a team environment",
  },
  {
    name: "You need a developer ",
    description: "who prioritizes meeting deadlines and exceeding expectations",
  },
  {
    name: "You need a developer",
    description:
      "with the technical expertise to solve complex challenges efficiently",
  },
  {
    name: "You need Soyooye Abdulrahman",
    description:
      "for your web developemt projects, either the frontend or backend, You get what you need",
  },
];

export default function Hooker() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-white text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">
            This is why you need me for your projects
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-[1.1rem] font-semibold text-white">
                  <div className="mb-6 flex size-10 items-center justify-center  rounded-lg ">
                    <CheckCircleIcon />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-[1rem] text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
