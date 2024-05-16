import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addAnimationMovies } from "../utils/moviesSlice";


export const useAnimation = () => {
    
    const dispatch = useDispatch();

    const animation = useSelector(store => store.movies.animationMovies);

   //  if(!nowPlaying ) return null;      (or)

    const getAnimationMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key='+ process.env.REACT_APP_TMDB_KEY + '&language=en-US&sort_by=release_date.desc&page=1&with_genres=16', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addAnimationMovies(json.results));
    };

    useEffect(() => {
        !animation && getAnimationMovies();
    }, []); 

};
