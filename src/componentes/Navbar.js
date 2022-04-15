import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  if(location.pathname.includes("/novo") || location.pathname.includes("/edicao")) {
    return <div></div>;
  } else {
    return (
      <nav className="navBar bottom">
        <div className="buttonGroup">
          <NavLink
            exact
            to="/"
            className="button navlink"
            activeClassName="active"
          >
            Lista de compras
          </NavLink>
          <NavLink
            exact
            to="/produto"
            className="button navlink"
            activeClassName="active"
          >
            Produtos
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;
