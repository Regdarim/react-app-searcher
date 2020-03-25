import React from "react";
import { routes } from "../routes/index";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { gifSearch, recipesSearch } = routes;
  return (
    <nav>
      <Link to={gifSearch}>Gif Search</Link>
      <Link to={recipesSearch}>Gif Search</Link>
    </nav>
  );
};

export default NavBar;
