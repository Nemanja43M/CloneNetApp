import { createSlice } from "@reduxjs/toolkit";
import { ActionFavorites, Favorites } from "../interfaces/interfaces";

const initialState: { list: Favorites[] } = {
    list: [],
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        setFavorites: (state, action: ActionFavorites) => {
            const isInFavorites = !!state.list.find((favorite) => favorite.id === action.payload.id);
            if (isInFavorites) {
                state.list = state.list?.filter((favorite) => favorite.id !== action.payload.id);
            } else {
                state.list = [...state.list, { ...action.payload, inFavorites: true }];
            }
            const favoriteIdList = state.list.map((favorite) => favorite.id);

            sessionStorage.setItem("favorites", JSON.stringify(favoriteIdList));
        },
    },
});

export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
