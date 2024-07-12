import { configureStore } from '@reduxjs/toolkit';
import { favoritesSlice } from '../slices/Favorites';
import { statusSlice } from '../slices/Status';

export const store = configureStore({
    reducer: {
        [favoritesSlice.name]: favoritesSlice.reducer,
        [statusSlice.name]: statusSlice.reducer,
    },
});
