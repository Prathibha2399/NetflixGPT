import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearchToggle : false,
        moviesName : null,
        moviesResult : null,
    },
    reducers : {
        addGptToggleView : (state, action) => {
            state.showGptSearchToggle = !state.showGptSearchToggle;
        },

        addSearchResults : (state, action) => {
            const {moviesName, moviesResult} = action.payload;
            state.moviesName = moviesName;
            state.moviesResult = moviesResult;
        }
    }
});



export const {addGptToggleView, addSearchResults} = gptSlice.actions;

export default gptSlice.reducer;