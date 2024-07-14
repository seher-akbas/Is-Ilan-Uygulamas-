import { createSlice } from "@reduxjs/toolkit";
import { is_ilanlari_veriler } from "../components/IlanKartları";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        items: is_ilanlari_veriler,
    },
    reducers: {
        filter: (state, action) => {
            state.items = state.items.filter(item =>
                item.location.toLowerCase().includes(action.payload.toLowerCase()) ||
                item.job_title.toLowerCase().includes(action.payload.toLowerCase()) ||
                item.category.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        resetFilter: (state) => {
            state.items = is_ilanlari_veriler;
        },
    },
});

export const { filter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
