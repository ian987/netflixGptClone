import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    gptPageLanguage: "en",
  },
  reducers: {
    addGptPageLang: (state, action) => {
      state.gptPageLanguage = action.payload;
    },
  },
});

export const { addGptPageLang } = appConfigSlice.actions;

export default appConfigSlice.reducer;
