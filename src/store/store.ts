import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "../slices/Favorites";

export const store = configureStore({
    reducer: {
        [favoritesSlice.name]: favoritesSlice.reducer,
    },
});
