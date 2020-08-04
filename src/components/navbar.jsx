import React from "react";

//Statelss Funcition Component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
