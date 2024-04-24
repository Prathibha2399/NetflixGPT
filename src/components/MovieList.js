import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    //console.log(movies);
    
    if(movies === null) return;

   // const poster = movies[0]?.poster_path;     // needs to check for nullity

    return (
        <div className = "py-3 overflow-x-scroll no-scrollbar">
            <h1 className = "text-2xl font-bold text-white  mx-4">{title}</h1>
            <div className = "flex p-2 m-4">
                <div className = "flex">
                    {movies?.map(movie => 
                    <MovieCard key = {movie.id} poster_path = {movie.poster_path}/>)}
                </div>
            </div>
        </div>
    );
}


export default MovieList;

