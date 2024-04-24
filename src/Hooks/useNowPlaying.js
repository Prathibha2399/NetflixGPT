import {useEffect} from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/Constants";
import { addNowPlaying } from "../utils/moviesSlice";


export const useNowPlaying = () => {
    
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        console.log(json);

        dispatch(addNowPlaying(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

};