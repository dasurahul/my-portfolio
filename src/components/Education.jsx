import PropTypes from "prop-types";

export default function Education({ education, imageSrc, educator, range }) {
  return (
    <div className="flex gap-4">
      <img className="w-12 h-12" src={imageSrc} alt={educator} />
      <div>
        <h5 className="font-semibold">{education}</h5>
        <div>{educator}</div>
        <div className="text-purple-700">{range}</div>
      </div>
    </div>
  );
}

Education.propTypes = {
  education: PropTypes.string,
  imageSrc: PropTypes.string,
  educator: PropTypes.string,
  range: PropTypes.string,
};
