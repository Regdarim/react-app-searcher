import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routes } from "../routes/index";
import GifSearch from "./GifSearch";
import RecipesSearch from "./RecipesSearch";
import AppContext from "../context/context";

const apiKey = "NmrQrsmpaVui9kkfZY09SHMFilPcF2Qf";

const Root = () => {
  const { gifSearch, recipesSearch } = routes;

  const [gifInput, setGifInput] = useState([]);

  const [gifs, setGifsSearch] = useState([]);

  const gifSearchFunction = async e => {
    e.preventDefault();
    const gifInput = e.target.gifInput.value;
    setGifInput(gifInput);

    const api_call = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifInput}}&limit=1&offset=0&rating=G&lang=en`
    );

    const data = await api_call.json();

    setGifsSearch(data.data[0].images.downsized_large.url);

    console.log(gifs);

    // e.target.reset();
  };

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            gifInput,
            gifSearchFunction,
            gifs
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
