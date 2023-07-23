import PropTypes from "prop-types";

function Button({ onClick, children }) {
  return (
    <button
      id="primary-btn"
      type="button"
      onClick={onClick}
      className="w-max cursor-pointer self-center border-x-0 border-b-4 border-t-0 border-solid border-primary-800 bg-transparent px-1 pb-2"
      // TODO: Inside button text automatically set to arial, why ?!
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      <span className="text-primary-100">{children}</span>
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
