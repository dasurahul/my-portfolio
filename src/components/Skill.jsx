import PropTypes from "prop-types";

export default function Skill({ icon, name, color }) {
  return (
    <div
      style={{ color: color }}
      className="flex flex-col items-center gap-4 p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition-all"
    >
      <div className={`text-6xl`}>{icon}</div>
      <h5 className="font-semibold">{name}</h5>
    </div>
  );
}

Skill.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
