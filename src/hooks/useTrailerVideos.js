import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";

const useTrailerVideos = (trailerId) => {
  const dispatch = useDispatch();
  const getTrailerVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        trailerId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterVideos = json?.results?.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailerVideo = filterVideos ? filterVideos[0] : json?.results?.[0];

    dispatch(addTrailerVideos(trailerVideo));
  };

  useEffect(() => {
    getTrailerVideos();
  }, []);
};

export default useTrailerVideos;
