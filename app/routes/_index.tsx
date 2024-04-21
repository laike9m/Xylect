import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mx-auto place-self-center lg:col-span-6">
            <h1 className="text-5xl font-extrabold dark:text-white">
              Xylect
              <small className="block mt-3 font-medium text-gray-500 dark:text-gray-400">
                lightweight, fast assistant <br /> that runs anywhere in macOS
              </small>
            </h1>
            <a
              href="pricing"
              className="inline-flex items-center justify-center px-5 py-3 mt-10 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get 50% off for pre-order
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="lg:mt-0 lg:col-span-6 lg:flex">
            <img
              src="https://github.com/laike9m/images/assets/2592205/041e530f-8c52-4f14-92de-cb9572e98116"
              alt="demo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
