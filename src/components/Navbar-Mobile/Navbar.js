import React from "react";

import "./Navbar.scss";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className={"nav-mobile"}>
      <NavbarItem linkPath={"/"} exact>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
        </svg>
        <p>Home</p>
      </NavbarItem>

      <div className="divider"></div>

      <NavbarItem linkPath={"/projects"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z" />
        </svg>
        <p>Projects</p>
      </NavbarItem>

      <div className="divider"></div>

      <NavbarItem linkPath={"/contact"} exact>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16 0c-3.169 0-6 2.113-6 5.003 0 1.025.369 2.032 1.023 2.812.027.916-.511 2.228-.997 3.184 1.301-.235 3.151-.754 3.989-1.268 4.619 1.124 7.985-1.702 7.985-4.728 0-2.905-2.851-5.003-6-5.003zm-2.5 5.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm2.5 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm2.5 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm-6.5 6.853v3.397h-8v-8h4.766c-.491-.919-.766-1.945-.766-2.997v-.003h-4c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-10.047c-.634.257-1.34.476-2 .65zm-6 8.397h-2v-1h2v1zm0-2h-2v-1h2v1zm3 2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 2h-2v-1h2v1zm0-2h-2v-1h2v1z" />
        </svg>
        <p>Contact</p>
      </NavbarItem>
    </nav>
  );
};

export default Navbar;
