import React, { useContext } from "react";
import NavBar from "../navigation/NavBar";
import GifSearchResultList from "../components/GifSearchResultList/GifSearchResultList";
import AppContext from "../context/context";

const GifSearch = () => {
  const context = useContext(AppContext);
  const { gifSearchFunction, gifInput, gifs } = context;
  return (
    <>
      <NavBar />
      <h1>Gif Searcher</h1>
      <form onSubmit={gifSearchFunction}>
        <input
          type="text"
          name="gifInput"
          id="gifInput"
          placeholder="e.g cat"
          value="cat"
        />
        <button type="submit">Search</button>
      </form>

      {/* <GifSearchResultList gifInput={gifInput} /> */}
      <img src={`${gifs}`} alt="" />
    </>
  );
};

export default GifSearch;
