import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addHistoryMovies } from "../utils/moviesSlice";


export const useHistory = () => {
    
    const dispatch = useDispatch();

    const history = useSelector(store => store.movies.historyMovies);

   //  if(!nowPlaying ) return null;      (or)

    const getHistoryMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key='+ process.env.REACT_APP_TMDB_KEY + '&language=en-IN&sort_by=release_date.desc&page=1&with_genres=36', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addHistoryMovies(json.results));
    };

    useEffect(() => {
        !history && getHistoryMovies();
    }, []); 

};
