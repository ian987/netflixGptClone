import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    searchText: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchResults: (state, action) => {
      const { searchMovies, searchNames } = action.payload;
      state.movieNames = searchNames;
      state.movieResults = searchMovies;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptSearchResults, addSearchText } =
  gptSlice.actions;

export default gptSlice.reducer;
