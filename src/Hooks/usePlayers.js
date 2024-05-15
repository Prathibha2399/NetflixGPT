import React from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../utils/moviesSlice";


const usePlayer = () => {

    const dispatch = useDispatch();
    const movId = useSelector(store => store.movies.movieId);

    const getVideoPlayers = async () => {
        const player = await fetch('https://api.themoviedb.org/3/movie/' + movId + '/videos?language=en-US', API_OPTIONS);

        const json = await player.json();

        console.log(json);

        const trailers = json.results.filter(video => video.type === "Trailer");
        //const trailer = trailers.length ? trailers[0] : json.results[0];
        
        console.log(trailers);

       dispatch(addPlayer(trailers));

    }
    
    
    useEffect(() => {
        getVideoPlayers();
    },[]) 
}


export default usePlayer;

