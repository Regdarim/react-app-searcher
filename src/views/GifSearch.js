import React, { useContext } from "react";
import NavBar from "../navigation/NavBar";
import GifSearchResultList from "../components/GifSearchResultList/GifSearchResultList";
import AppContext from "../context/context";

const GifSearch = () => {
  const context = useContext(AppContext);
  const { gifSearchFunction, gifInput } = context;
  return (
    <>
      <NavBar />
      <h1>Gif Searcher</h1>
      <form onSubmit={gifSearchFunction}>
        <label name="gifInput" id="gifInput">
          <h2>Please Pur Your Searching Phrase Here:</h2>
        </label>
        <input type="text" name="gifInput" id="gifInput" />
        <button type="submit">Search</button>
      </form>
      <GifSearchResultList gifInput={gifInput} />
    </>
  );
};

export default GifSearch;
