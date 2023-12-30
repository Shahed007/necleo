import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const linkStyles = {
  active: "font-semibold text-primary flex items-center gap-2",
  inactive:
    "font-semibold text-color_secondary flex items-center gap-2 duration-150 transition-colors hover:text-primary",
};

const NavItem = ({ to, text, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${linkStyles.active}` : `${linkStyles.inactive}`
      }
    >
      <span>{children}</span>
      {text}
    </NavLink>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
