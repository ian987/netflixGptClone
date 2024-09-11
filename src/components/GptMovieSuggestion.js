import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gptSearch);
  if (!movieNames) return null;
  return (
    <div>
      <p className="text-white text-xl m-auto flex justify-center">
        <span className="mr-4 text-red-600">Search Results:</span>
        {movieNames.toString()}
      </p>
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
