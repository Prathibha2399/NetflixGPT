import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMoviesRecommendation = () => {
    const {moviesName, moviesResult} = useSelector((store) => store.gpt);

    if  (!moviesResult || !moviesName) return null;

    return(
        <div className = "p-2 bg-black bg-opacity-40 text-white">
            <div>
                {moviesName.map((movieName, index) => (
                    <MovieList 
                        key = {movieName}
                        title = {movieName}
                        movies = {moviesResult[index]}/>))}
            </div>
        </div>
    )
}


export default GptMoviesRecommendation;