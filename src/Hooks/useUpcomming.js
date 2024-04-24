import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import {addUpcommingMovies} from "../utils/moviesSlice";



export const useUpcomming = () => {
    
    const dispatch = useDispatch();

    const upcommingMovies = useSelector(store => store.movies.upcommingMovies);

    const getUpcommingMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addUpcommingMovies(json.results));
    };

    useEffect(() => {
        !upcommingMovies && getUpcommingMovies();
    }, []);

};