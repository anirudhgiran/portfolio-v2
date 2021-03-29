import React from "react";

import { Link } from "react-router-dom";

const NavbarItem = ({ children, linkPath }) => {
  return <Link to={linkPath} className="navbar-item">{children}</Link>;
};

export default NavbarItem;
