import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes/index";

import GifSearch from "./GifSearch";
import RecipesSearch from "./RecipesSearch";
import AppContext from "../context/context";

const Root = () => {
  const { gifSearch, recipesSearch } = routes;

  const [gifInput, setGifInput] = useState([]);

  const gifSearchFunction = e => {
    e.preventDefault();
    const gifInput = e.target.gifInput.value;

    setGifInput(gifInput);
    e.target.reset();
  };

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            gifInput,
            gifSearchFunction
          }}
        >
          <Switch>
            <Route exact path={gifSearch} component={GifSearch} />
            <Route path={recipesSearch} component={RecipesSearch} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default Root;
