import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector(
    (store) => store?.appConfig?.gptPageLanguage
  );
  return (
    <div className="  pt-[10%] flex justify-center">
      <form
        className="grid grid-cols-12 w-1/2 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="px-4 py-2 col-span-9 m-4 rounded"
          placeholder={lang[selectedLang]?.placeholderText}
        />
        <button className="bg-red-700 col-span-3 m-4 rounded text-white">
          {lang[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
