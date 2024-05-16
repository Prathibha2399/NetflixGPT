import { useDispatch } from "react-redux";
import { addDetails } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useMoviesDetails = () => {
    const dispatch = useDispatch();
    const movId = useSelector(store => store.movies.movieId);

    const getVideoDetails = async () => {
        const requirement = await fetch('https://api.themoviedb.org/3/movie/'+ movId + '?language=en-US', API_OPTIONS);

        const details = await requirement.json();

        console.log(details);

       dispatch(addDetails(details));
    }
    
    
    useEffect(() => {
        getVideoDetails();
    },[]) 
}