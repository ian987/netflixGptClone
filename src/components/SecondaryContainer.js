import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;
  return (
    <div>
      {movies && (
        <div className="bg-black">
          <div className="-mt-56 relative z-0 w-screen pl-20">
            <MovieList title={"Now Playing"} data={movies?.nowPlayingMovies} />
            <MovieList title={"Popular Movies"} data={movies?.popularMovies} />
            <MovieList
              title={"UpComing Movies"}
              data={movies?.upcomingMovies}
            />
            <MovieList
              title={"TopRated Movies"}
              data={movies?.topRatedMovies}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
