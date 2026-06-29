import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import languageReducer from "./slices/languageSlice";
import favoriteReducer from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    favorites: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;