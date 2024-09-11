import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearchReducer from "./gptSlice";
import appConfigReducer from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    appConfig: appConfigReducer,
  },
});

export default appStore;
