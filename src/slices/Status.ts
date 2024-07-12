import { createSlice } from '@reduxjs/toolkit';
import { ActionStatus, Status } from '../interfaces/interfaces';

const initialState: Status = {
    isLoading: false,
};

export const statusSlice = createSlice({
    name: 'status',
    initialState: initialState,
    reducers: {
        setLoading: (state, action: ActionStatus) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoading } = statusSlice.actions;

export default statusSlice.reducer;
