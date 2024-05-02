import { API_OPTIONS } from "../utils/Constants";
import {useEffect} from "react";

import { useDispatch, useSelector} from "react-redux";
import { addTrailer } from "../utils/moviesSlice";


export const useTrailers = (movieID) => {
    const dispatch = useDispatch();

    const trailerCheck = useSelector(store => store.movies.trailer);

    // to fetch api , need to get ID
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieID + '/videos?language=en-US', API_OPTIONS);

        const json = await data.json();
    
        const trailers = json.results.filter(video => video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];   // if trailer not present, use other videos
        //console.log(trailer);

        dispatch(addTrailer(trailer));
    };

    useEffect(() => {
        !trailerCheck && getMovieVideo();
    }, []);
}