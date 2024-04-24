import { API_OPTIONS } from "../utils/Constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import openai from "../utils/openai";

//import { genAI } from "../utils/gemAI";
import model from "../utils/gemAI";
import { addSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {

    const config = useSelector((store) => store.lang.optLanguage);

    const searchText = useRef(null);

    const dispatch = useDispatch();

    
    //Search movies in TMDB
    const searchMoviesTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();

        return json.results;
    }
    
    
    const handleSearchSuggestions = async () => {
        //console.log(searchText.current.value);

        // make API call to GPT API to get movie suggestions

        const prompt = "Act as a movie recommendation system and suggest some movies for query :" + searchText.current.value + "only give me names of 7 movies, comma seperated like the example given ahead. Example Results : Koi mil gaya, Golmaal, 3 Idiots, Gadar";

        const result = await model.generateContent(prompt);
        const gptResponse = await result.response;
        const text = gptResponse.text();
        //console.log(text);

        const recommendedMovies = text.split(",");  //array

        const data = recommendedMovies.map((movie) => searchMoviesTMDB(movie));   // Promise Array

        const searchResults = await Promise.all(data);

        //console.log(searchResults);

        dispatch(addSearchResults({moviesName : recommendedMovies , moviesResult : searchResults}));

    }

    return (  
             <div className = "flex justify-center p-[10%]">
                 <form className = "grid grid-cols-12 bg-black w-1/2" onSubmit = {(e) => e.preventDefault()}>
                     <input 
                        ref = {searchText}
                        type = "text" 
                        placeholder= {lang[config].gptPlaceholder} 
                        className = "p-2 m-2 border text-black col-span-9 rounded-sm" />
                        
                        <button className = "border border-red-700 bg-red-700 text-black font-semibold px-6 m-2 col-span-3 rounded-lg " 
                        onClick = {handleSearchSuggestions}>{lang[config].search}</button>
                    </form>
                </div>
    )
}


export default GptSearchBar;