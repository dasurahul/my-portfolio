import Lottie from "lottie-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import animationData from "../assets/animation.json";

export default function Intro() {
  const linkedinURL = "https://linkedin.com/in/dasurahul";
  const githubURL = "https://github.com/dasurahul";

  return (
    <div className="min-h-[calc(100vh_-_5rem)] grid grid-cols-autofit gap-4 justify-items-center items-center">
      <div>
        <h1 className="text-4xl font-semibold text-purple-700 mb-4">
          Software Engineer
        </h1>
        <p className="mb-6">
          Hello there! I&apos;m Dasu Rahul, a software engineer at Kellton,
          specializing in frontend development. I&apos;m passionate about
          creating user-friendly interfaces.
        </p>
        <div className="flex gap-4">
          <a
            href={githubURL}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={linkedinURL}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="max-w-sm">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}
