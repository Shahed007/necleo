import PropTypes from "prop-types";
const Button = ({ children }) => {
  return (
    <button className="px-6 py-2 bg-primary rounded-md uppercase font-medium text-lg text-white active:scale-95 duration-150 transition-all hover:bg-primary/90">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
