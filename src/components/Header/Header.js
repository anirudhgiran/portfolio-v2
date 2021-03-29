import React from "react";

import './Header.scss';

//React Router DOM Imports
import { Link } from "react-router-dom";

const Header = () => {
  return(
  <header>
      <Link to="/">
        <h1>Anirudh Giran</h1>
      </Link>
  </header>);
};

export default Header;
