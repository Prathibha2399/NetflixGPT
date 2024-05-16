import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addFantasyMovies } from "../utils/moviesSlice";


export const useFantasy = () => {
    
    const dispatch = useDispatch();

    const fantasy = useSelector(store => store.movies.fantasyMovies);

   //  if(!nowPlaying ) return null;      (or)

    const getFantasyMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key='+ process.env.REACT_APP_TMDB_KEY + '&language=en-US&sort_by=release_date.desc&page=1&with_genres=35', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addFantasyMovies(json.results));
    };

    useEffect(() => {
        !fantasy && getFantasyMovies();
    }, []); 

};
