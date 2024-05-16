import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addHorrorMovies } from "../utils/moviesSlice";


export const useHorror = () => {
    
    const dispatch = useDispatch();

    const horror = useSelector(store => store.movies.horrorMovies);

   //  if(!nowPlaying ) return null;      (or)

    const getHorrorMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key='+ process.env.REACT_APP_TMDB_KEY + '&language=en-US&sort_by=release_date.desc&page=1&with_genres=27', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addHorrorMovies(json.results));
    };

    useEffect(() => {
        !horror && getHorrorMovies();
    }, []); 

};
