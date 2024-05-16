import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addRomanceMovies } from "../utils/moviesSlice";


export const useRomance = () => {
    
    const dispatch = useDispatch();

    const romance = useSelector(store => store.movies.romanceMovies);

   //  if(!nowPlaying ) return null;      (or)

    const getRomanticMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key='+ process.env.REACT_APP_TMDB_KEY + '&language=en-US&sort_by=release_date.desc&page=1&with_genres=10749', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addRomanceMovies(json.results));
    };

    useEffect(() => {
        !romance && getRomanticMovies();
    }, []); 

};
