import PropTypes from "prop-types";

function NavToggleButton({ isOpen, onClick, onKeyDown }) {
  const lines = `block h-0.5 w-10 m-auto rounded-full bg-tertiary transition ease transform duration-300`;

  return (
    <button
      id="nav-toggle-btn"
      type="button"
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      className="group flex h-5 w-10 cursor-pointer flex-col items-center justify-center border-0 bg-primary z-40"
    >
      <div
        className={`${lines} ${
          isOpen ? "translate-y-[5px] rotate-[-26.57deg]" : ""
        }`}
      />
      <div className={`${lines} ${isOpen ? "hidden" : ""}`} />
      <div
        className={`${lines} ${
          isOpen ? "-translate-y-[5px] -rotate-[-26.57deg]" : ""
        }`}
      />
    </button>
  );
}

NavToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default NavToggleButton;
