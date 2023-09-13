import PropTypes from "prop-types";

export default function Section({ title, children, autofit = false }) {
  return (
    <div className="mt-4 mb-12">
      <h3 className="text-2xl font-semibold tracking-wide text-gray-950 mb-4">
        {title}
      </h3>
      <div className={`grid ${autofit && "grid-cols-autofit"} gap-4`}>
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  autofit: PropTypes.bool,
};
