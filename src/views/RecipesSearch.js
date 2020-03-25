import React, { useContext } from "react";
import NavBar from "../navigation/NavBar";
import AppContext from "../context/context";

const RecipesSearch = () => {
  const context = { AppContext };

  return (
    <>
      <NavBar />
      <h1>RecipesSearch</h1>
    </>
  );
};

export default RecipesSearch;
