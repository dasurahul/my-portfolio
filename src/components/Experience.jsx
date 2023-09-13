import PropTypes from "prop-types";

export default function Experience({
  desgination,
  company,
  imageSrc,
  range,
  invertImage = false,
}) {
  return (
    <div className="flex gap-4">
      <img
        className={`w-12 h-12 ${invertImage && "invert"}`}
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
  desgination: PropTypes.string,
  imageSrc: PropTypes.string,
  company: PropTypes.string,
  range: PropTypes.string,
  invertImage: PropTypes.bool,
};
