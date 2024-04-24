import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlaying : null,
        trailer : null,
        popularMovies : null,
        upcommingMovies : null,
        topRatedMovies : null,
    },
    reducers : {
        addNowPlaying : (state, action) => {
            state.nowPlaying = action.payload;
        },

        addTrailer : (state, action) => {
            state.trailer = action.payload;
        },

        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },

        addUpcommingMovies : (state, action) => {
            state.upcommingMovies = action.payload;
        },

        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
    }
});


export const {addNowPlaying, addTrailer, addPopularMovies, addUpcommingMovies, addTopRatedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;