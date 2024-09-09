import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    trailerVideos: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideos } = moviesSlice.actions;

export default moviesSlice.reducer;
