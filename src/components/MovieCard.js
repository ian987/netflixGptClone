import React from "react";
import { TMDB_IMG_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <>
      <img
        className="w-48 mr-2 opacity-70"
        alt="sadasd"
        src={TMDB_IMG_URL + poster}
      />
    </>
  );
};

export default MovieCard;
