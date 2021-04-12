import React from "react";

import { NavLink } from "react-router-dom";

const NavbarItem = ({ children, linkPath }) => {
  return <NavLink activeClassName={"active-link"} exact to={linkPath} className="navbar-item">{children}</NavLink>;
};

export default NavbarItem;
