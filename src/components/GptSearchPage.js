import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed brightness-50 -z-10">
        <img
          className="w-screen"
          src={BACKGROUND_IMAGE}
          alt="background_image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
