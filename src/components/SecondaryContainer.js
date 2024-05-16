import MovieList from "./MovieList";
import {useSelector} from "react-redux";

export const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return(
        <div className = " bg-black w-screen">
            <div className = "-mt-5 md:-mt-60 relative z-50 pl-5">
                <MovieList title = {"Now Playing"} movies = {movies.nowPlaying}/>

                <MovieList title = {"Top Rated Movies"} movies = {movies.topRatedMovies}/>
                
                <MovieList title = {"Popular Movies"} movies = {movies.popularMovies}/>

                <MovieList title = {"Upcoming Movies"} movies = {movies.upcommingMovies}/>

                <MovieList title = {"Horror"} movies = {movies.horrorMovies}/>

                <MovieList title = {"Adventure & Mystrery"} movies = {movies.adventureMystryMovies}/>

                <MovieList title = {"Comedy"} movies = {movies.fantasyMovies}/>

                <MovieList title = {"Science Fiction"} movies = {movies.fictionMovies}/>

                <MovieList title = {"History"} movies = {movies.historyMovies}/>

                <MovieList title = {"Animations"} movies = {movies.animationMovies}/>

                <MovieList title = {"Romance"} movies = {movies.romanceMovies}/>
            </div>
        </div>
    )
};

