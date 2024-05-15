import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlaying : null,
        trailer : null,
        popularMovies : null,
        upcommingMovies : null,
        topRatedMovies : null,
        castDetails : null,
        crewDetails : null,
        movieId : null,
        player : null,
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
        addCastDetails : (state, action) => {
            state.castDetails = action.payload;
        },
        addCrewDetails : (state, action) => {
            state.crewDetails = action.payload;
        },
        addMovieId : (state, action) => {
            state.movieId = action.payload;
        },
        addPlayer : (state, action) => {
            state.player = action.payload;
        },
    }
});


export const {addNowPlaying, addTrailer, addPopularMovies, addUpcommingMovies, addTopRatedMovies, addCastDetails, addCrewDetails, addMovieId, addPlayer} = moviesSlice.actions;

export default moviesSlice.reducer;