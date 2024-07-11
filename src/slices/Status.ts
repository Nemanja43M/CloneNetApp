import { createSlice } from "@reduxjs/toolkit";
import { ActionStatus, Status } from "../interfaces/interfaces";

const initialState: Status = {
    isLoading: true,
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        setLoading: (state, action: ActionStatus) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoading } = favoritesSlice.actions;

export default favoritesSlice.reducer;
