export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600 dark:text-indigo-400">
          About me
        </h2>
        <div className=" mt-2 text-center text-4xl font-semibold tracking-tight text-gray-950 dark:text-gray-100 sm:text-5xl">
          I'm Soyooye Abdulrahman
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Mobile Friendly Section */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                  I prioritize team work and co opearation
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-lg border-x border-t dark:border-gray-600 bg-gray-900 ">
                  <img
                    className="w-full h-full rounded-md object-cover object-top"
                    src="/assets/images/about03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Performance Section */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-t-[2rem]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                  I deliver top quality works all the time
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 ">
                <img
                  className="rounded-md object-cover object-center"
                  src="/assets/images/about02.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Security Section */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                  You will never be gohsted{" "}
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                  I don't dissapear to so be rest assured, you will never be
                  ghosted
                </p>
              </div>
              <div className="flex flex-1 p-2 rounded-t-md  px-8 pt-8 sm:px-10 sm:pt-10 justify-center items-center max-lg:py-6 lg:pb-2">
                <img
                  className=" rounded-md object-cover object-center"
                  src="/assets/images/about01.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10"></div>
          </div>

          {/* Powerful APIs Section */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                  Wrtiting Clean codes using best practices
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 dark:bg-gray-700 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5 dark:ring-gray-500/10">
                    <div className="-mb-px flex text-sm font-medium text-gray-400 dark:text-gray-300">
                      <div className="border-b border-r border-b-white/20 dark:border-b-gray-600 border-r-white/10 dark:border-r-gray-500 bg-white/5 dark:bg-gray-800 px-4 py-2 text-white">
                        aboutme.tsx
                      </div>
                      <div className="border-r border-gray-600/10 dark:border-gray-500 px-4 py-2">
                        App.tsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    {/* Your code example */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
