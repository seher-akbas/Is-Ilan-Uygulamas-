import { createSlice } from "@reduxjs/toolkit";
import { is_ilanlari_veriler } from "../components/IlanList";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        items: is_ilanlari_veriler,
    },
    reducers: {
        filter: (state, action) => {
            state.items = state.items.filter(item =>
                item.location.toLowerCase().includes(action.payload.toLowerCase()) ||
                item.job_title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
});

export const { filter } = filterSlice.actions;
export default filterSlice.reducer;
