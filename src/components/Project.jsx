import PropTypes from "prop-types";

import { CgMediaLive } from "react-icons/cg";
import { DiGithubAlt } from "react-icons/di";

export default function Project({
  title,
  subtitle,
  imageSrc,
  githubUrl,
  liveUrl,
}) {
  return (
    <div className="border border-gray-200 rounded-lg shadow hover:shadow-md transition-all">
      <img className="rounded-t-lg" src={imageSrc} alt={title} />
      <div className="border-t border-t-gray-200 p-5">
        <h5 className="font-semibold text-gray-900 mb-2">{title}</h5>
        <p className="font-normal text-gray-700 mb-3">{subtitle}</p>
        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
          >
            Live
            <CgMediaLive />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
          >
            Github
            <DiGithubAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
};
