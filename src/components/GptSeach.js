import GptMoviesRecommendation from "./GptMoviesRecommendation";
import GptSearchBar from "./GptSearchBar";
import { BG_IMAGE } from "../utils/Constants";

const GptSearch = () => {
    return (
        <div>
            <div>
                <img src = {BG_IMAGE} className = "w-screen h-screen object-cover opacity-95 fixed -z-20" />
            </div>
            <div className = "pt-[50%] md:pt-[5%] sm:pt-[35%]">
                <GptSearchBar />
                <GptMoviesRecommendation />
            </div>
        </div>
    )
}


export default GptSearch;