import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    console.log(movies);
    
    if(movies === null) return;

   // const poster = movies[0]?.poster_path;     // needs to check for nullity

    return (
        <div >
            <h1 className = "md:text-2xl md:font-bold text-white text-xl font-semibold md:mx-5 mx-1 my-1 w-6/12">{title}</h1>
            <div className = "py-3 overflow-x-scroll no-scrollbar">
            <div className = "flex p-2">
                <div className = "flex">
                    {movies?.map(movie => 
                    <MovieCard key = {movie.id} poster_path = {movie.poster_path}/>)}
                </div>
            </div>
            </div>
        </div>
    );
}


export default MovieList;

