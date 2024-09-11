import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  if (!data.length) return;
  return (
    <div className="my-12">
      <h1 className="text-white text-xl mb-4">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        {data &&
          data?.map((movie) => (
            <MovieCard key={movie.id} poster={movie?.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
