import GptMoviesRecommendation from "./GptMoviesRecommendation";
import GptSearchBar from "./GptSearchBar";
import { BG_IMAGE } from "../utils/Constants";

const GptSearch = () => {
    return (
        <div>
            <div>
                <img src = {BG_IMAGE} className = "w-screen opacity-95 fixed -z-20" />
            </div>

            <GptSearchBar />
            <GptMoviesRecommendation />
        </div>
    )
}


export default GptSearch;