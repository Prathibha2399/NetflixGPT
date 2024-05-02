import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/moviesSlice";



export const useTopRated = () => {
    
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const getTopRatedMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        //console.log(json);

        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, []);

};