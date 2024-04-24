import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name : "lang",
    initialState : {
        optLanguage : "en",
    },
    reducers : {
        addLanguageSelection : (state, action) => {
            state.optLanguage = action.payload;
        }
    }
});


export const {addLanguageSelection} = langSlice.actions;

export default langSlice.reducer;