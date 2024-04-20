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
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://flowbite.com/getting-started/remix/"
            rel="noreferrer"
            className="text-lg text-blue-600 hover:underline"
          >
            Flowbite + Remix + Tailwind CSS Tutorial
          </a>
        </li>
      </ul>
    </div>
  );
}
