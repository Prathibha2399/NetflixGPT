import { API_OPTIONS } from "../utils/Constants";
import { addCastDetails, addMovieId } from "../utils/moviesSlice";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { addCrewDetails, addPlayer, addDetails } from "../utils/moviesSlice";
import { useNavigate } from "react-router-dom";



const MovieList = ({title, movies}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //console.log(movies);
    
    if(movies === null) return;


   // const poster = movies[0]?.poster_path;     // needs to check for nullity

   const handleMovieCard = async (id) => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US", API_OPTIONS);
        const json = await data.json(); 

        //console.log(json);

        dispatch(addCastDetails(json.cast));
        dispatch(addCrewDetails(json.crew)); 
        dispatch(addMovieId(id));

        const player = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS);

        const json1 = await player.json();
        console.log(json1);
        const trailers = await json1.results.filter(video => video.type === "Trailer" || video.type === "Teaser" );

        dispatch(addPlayer(trailers));

        const requirement = await fetch('https://api.themoviedb.org/3/movie/'+ id + '?language=en-US', API_OPTIONS);

        const details = await requirement.json();

        console.log(details);

       dispatch(addDetails(details));
        
        navigate("/card")
   }

    return (
        <div >
            <h1 className = "md:text-2xl md:font-bold text-white text-xl font-semibold md:mx-5 mx-1 my-1 w-6/12">{title}</h1>
            <div className = "py-3 overflow-x-scroll no-scrollbar">
            <div className = "flex p-2">
            {movies?.map(movie => (
                <div className = "flex" onClick = {(e) => handleMovieCard(movie.id)}>
                    <MovieCard key = {movie.id} poster_path = {movie.poster_path}/>
                </div>))}
            </div>
            </div>
        </div>
    );
}


export default MovieList;
