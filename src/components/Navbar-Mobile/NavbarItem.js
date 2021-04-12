import React from "react";

import { NavLink } from "react-router-dom";

const NavbarItem = ({ children, linkPath, exact }) => {
  if(exact) return <NavLink activeClassName={"active-link"} exact to={linkPath} className="navbar-item">{children}</NavLink>;
  return <NavLink activeClassName={"active-link"} to={linkPath} className="navbar-item">{children}</NavLink>;
};

export default NavbarItem;
