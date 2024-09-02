import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            categoryId: 1,
            name: 'Highlight',
        },
        {
            categoryId: 2,
            name: 'Environment',
        },
        {
            categoryId: 3,
            name: 'Books and Media',
        },
        {
            categoryId: 4,
            name: 'Health and Beauty Products',
        },
        {
            categoryId: 5,
            name: 'office supplies',
        },
        {
            categoryId: 6,
            name: 'Tools and Hardware',
        },
        {
            categoryId: 7,
            name: 'Art and Craft Supplies',
        },
        {
            categoryId: 8,
            name: 'Education',
        },
        {
            categoryId: 9,
            name: 'Clothing and Equipment',
        }],
    selectedCategoryId: 1,
};

const Categories = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers:{
        resetCategories:()=>{
            return initialState;
        },
        updateSelectedCategoryId:(state, action) => {
            state.selectedCategoryId = action.payload;
        },
    },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;