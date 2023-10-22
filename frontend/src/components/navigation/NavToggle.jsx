import PropTypes from "prop-types";

function NavToggleButton({ isOpen, onClick, onKeyDown }) {
  const lines = `block h-0.5 w-10 md:w-[65px] m-auto rounded-full bg-tertiary transition ease transform duration-300`;

  return (
    <button
      id="nav-toggle-btn"
      type="button"
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      className="group z-40 flex h-5 cursor-pointer flex-col items-center justify-center border-0 bg-primary md:h-[30px]"
    >
      <div
        className={`${lines} ${
          isOpen
            ? "translate-y-[5px] rotate-[-26.57deg] md:translate-y-[7.05px] lg:rotate-[-24.78deg]"
            : ""
        }`}
      />
      <div className={`${lines} ${isOpen ? "hidden" : ""}`} />
      <div
        className={`${lines} ${
          isOpen
            ? "-translate-y-[5px] -rotate-[-26.57deg] md:-translate-y-[7.04px] lg:rotate-[24.78deg]"
            : ""
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
