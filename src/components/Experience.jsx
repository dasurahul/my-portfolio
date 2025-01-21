import PropTypes from "prop-types";

export default function Experience({
  desgination,
  company,
  imageSrc,
  range,
  invertImage = false,
}) {
  return (
    <div className="flex gap-4 items-center">
      <img
        className={`w-24 h-24 ${invertImage && "invert"}`}
        src={imageSrc}
        alt={company}
      />
      <div>
        <h5 className="font-semibold">{desgination}</h5>
        <div>{company}</div>
        <div className="text-purple-700">{range}</div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  desgination: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  invertImage: PropTypes.bool,
};
