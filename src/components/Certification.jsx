import PropTypes from "prop-types";

export default function Certification({
  certificationName,
  imageSrc,
  certificationProvider,
  certificateURL,
}) {
  return (
    <div className="flex gap-4">
      <img className="w-12 h-12" src={imageSrc} alt={certificationProvider} />
      <div>
        <h5 className="font-semibold">{certificationName}</h5>
        <div>{certificationProvider}</div>
        <a
          href={certificateURL}
          target="_blank"
          rel="noreferrer"
          className="text-purple-700"
        >
          View
        </a>
      </div>
    </div>
  );
}

Certification.propTypes = {
  certificationName: PropTypes.string,
  imageSrc: PropTypes.string,
  certificationProvider: PropTypes.string,
  certificateURL: PropTypes.string,
};
