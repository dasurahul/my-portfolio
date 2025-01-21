import { GrCloudDownload } from "react-icons/gr";

import { CV_URL } from "../constants";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-20">
      <div>Rahul</div>
      <a
        href={CV_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 transition-all"
      >
        <GrCloudDownload />
        Download CV
      </a>
    </div>
  );
}
