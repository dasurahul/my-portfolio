import { GrCloudDownload } from "react-icons/gr";

export default function Navbar() {
  const cvURL =
    "https://drive.google.com/file/d/1H6pxFOhNteguc1rGIadEXoU8ukx0XB8v/view?usp=drive_link";
  return (
    <div className="flex justify-between items-center h-20">
      <div>Rahul</div>
      <a
        href={cvURL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 transition-all"
      >
        <GrCloudDownload className="invert" />
        Download CV
      </a>
    </div>
  );
}
