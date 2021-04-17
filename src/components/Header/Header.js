import React from "react";

import './Header.scss';

//Components import
import Navbar from "./Navbar";

//React Router DOM Imports
import { Link } from "react-router-dom";

//Responsive react imports
import {IdResponsiveRenderOnlyIn, Responsive} from 'responsive-react';

const Header = () => {
  return(
  <header>
      <Link to="/">
        <h1>Anirudh Giran</h1>
      </Link>
      <Responsive displayIn={[IdResponsiveRenderOnlyIn.Laptop, IdResponsiveRenderOnlyIn.Tablet]}>
        <Navbar/>
      </Responsive>
  </header>);
};

export default Header;
