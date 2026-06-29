import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  projects: string[];
}

const initialState: FavoriteState = {
  projects: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.projects.includes(id)) {
        state.projects = state.projects.filter(
          (projectId) => projectId !== id
        );
      } else {
        state.projects.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;