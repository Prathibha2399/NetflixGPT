import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addFictionMovies } from "../utils/moviesSlice";


export const useFiction = () => {
    
    const dispatch = useDispatch();

    const fiction = useSelector(store => store.movies.fictionMovies);

   //  if(!nowPlaying ) return null;      (or)

    const getFictionMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key='+ process.env.REACT_APP_TMDB_KEY + '&language=en-US&sort_by=release_date.desc&page=1&with_genres=878', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addFictionMovies(json.results));
    };

    useEffect(() => {
        !fiction && getFictionMovies();
    }, []); 

};
