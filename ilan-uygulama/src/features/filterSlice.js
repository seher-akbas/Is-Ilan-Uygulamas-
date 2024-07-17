import { createSlice } from '@reduxjs/toolkit';
import { is_ilanlari_veriler } from '../components/IlanKartları';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        items: is_ilanlari_veriler,
        searchTerm: '',
        category: '',
        location: ''
    },
    reducers: {
        filter: (state, action) => {
            state.searchTerm = action.payload;
            state.items = is_ilanlari_veriler.filter(item =>
                item.location.toLowerCase().includes(action.payload.toLowerCase()) ||
                item.job_title.toLowerCase().includes(action.payload.toLowerCase()) ||
                item.category.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        filterByCategory: (state, action) => {
            state.category = action.payload;
            state.items = is_ilanlari_veriler.filter(item =>
                item.category === state.category
            );
        },
        filterByLocation: (state, action) => {
            state.location = action.payload;
            state.items = is_ilanlari_veriler.filter(item =>
                item.location === state.location
            );
        },
        filterByCategoryAndLocation: (state, action) => {
            const { category, location } = action.payload;
            state.category = category;
            state.location = location;
            state.items = is_ilanlari_veriler.filter(item =>
                (category === '' || item.category === category) &&
                (location === '' || item.location === location)
            );
        },
        resetFilter: (state) => {
            state.items = is_ilanlari_veriler;
            state.searchTerm = '';
            state.category = '';
            state.location = '';
        }
    }
});

export const { filter, filterByCategory, filterByLocation, filterByCategoryAndLocation, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
