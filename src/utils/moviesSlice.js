import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlaying : null,
        trailer : null,
        popularMovies : null,
        upcommingMovies : null,
        topRatedMovies : null,
        horrorMovies : null,
        adventureMystryMovies : null,
        castDetails : null,
        crewDetails : null,
        movieId : null,
        player : null,
        movDetails : null,
        fictionMovies : null,
        historyMovies : null,
        animationMovies : null,
        fantasyMovies : null,
        romanceMovies : null,
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

        addHorrorMovies : (state, action) => {
            state.horrorMovies = action.payload;
        },

        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },

        addAdventureandMystryMovies : (state, action) => {
            state.adventureMystryMovies = action.payload;
        },

        addFictionMovies : (state, action) => {
            state.fictionMovies = action.payload;
        },

        addHistoryMovies : (state, action) => {
            state.historyMovies = action.payload;
        },

        addAnimationMovies : (state, action) => {
            state.animationMovies = action.payload;
        },

        addFantasyMovies : (state, action) => {
            state.fantasyMovies = action.payload;
        },

        addRomanceMovies : (state, action) => {
            state.romanceMovies = action.payload;
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

        addDetails : (state, action) => {
            state.movDetails = action.payload;
        },
    }
});


export const {addNowPlaying, addTrailer, addPopularMovies, addUpcommingMovies, addTopRatedMovies, addCastDetails, addCrewDetails, addMovieId, addPlayer, addDetails, addHorrorMovies, addAdventureandMystryMovies, addFictionMovies, addFantasyMovies, addAnimationMovies, addHistoryMovies, addRomanceMovies} = moviesSlice.actions;

export default moviesSlice.reducer;