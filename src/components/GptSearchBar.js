import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResults, addSearchText } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector(
    (store) => store?.appConfig?.gptPageLanguage
  );

  const handleTMDBmovies = async (movie) => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movies?.json();
    return json?.results;
  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptSearchResultsArray =
      gptSearchResults?.choices?.[0]?.message?.content.split(",");

    const promisesArray = gptSearchResultsArray.map((movie) =>
      handleTMDBmovies(movie)
    );
    const tmdbMovies = await Promise.all(promisesArray);

    dispatch(
      addGptSearchResults({
        searchMovies: tmdbMovies,
        searchNames: gptSearchResultsArray,
      })
    );
    dispatch(addSearchText(searchText?.current?.value));
  };

  return (
    <div className="  pt-[10%] flex justify-center">
      <form
        className="grid grid-cols-12 w-1/2 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-4 py-2 col-span-9 m-4 rounded"
          placeholder={lang[selectedLang]?.gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 col-span-3 m-4 rounded text-white"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
