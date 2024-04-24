import {IMG_CDN_URL} from "../utils/Constants";

const MovieCard = ({poster_path}) => {

    if(!poster_path) return null;  // can use error handlings
    
    return (
        <div className = "w-44 pr-4 cursor-pointer hover:scale-110 transition duration-300 ease-in">
            <img 
                alt="Movie Card"
                src = {IMG_CDN_URL + poster_path} />
        </div>
    );
}


export default MovieCard;