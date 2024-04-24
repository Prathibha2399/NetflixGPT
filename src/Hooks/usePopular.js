import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import {addPopularMovies} from "../utils/moviesSlice";



export const usePopular = () => {
    
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

};