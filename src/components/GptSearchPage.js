import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute brightness-50 -z-10">
        <img
          className="w-screen"
          src={BACKGROUND_IMAGE}
          alt="background_image"
        />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
