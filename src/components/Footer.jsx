import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const githubURL = "https://github.com/dasurahul";
  const linkedinURL = "https://linkedin.com/in/dasurahul";
  return (
    <footer className="border border-gray-200 bg-white rounded-lg shadow mb-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 grid gap-4 justify-start md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Dasu Rahul™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-lg font-medium text-gray-950">
          <li>
            <a
              href={githubURL}
              className="mr-4 hover:underline md:mr-6 flex hover:animate-pulse"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href={linkedinURL}
              className="hover:underline flex hover:animate-pulse"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
