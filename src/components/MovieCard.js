import {IMG_CDN_URL} from "../utils/Constants";

import {useNavigate} from "react-router-dom";

const MovieCard = ({poster_path}) => {

    const navigate = useNavigate();

    const displayPoster = () => {
        //console.log("hello")
        //navigate("/card");
        navigate("/card");
   }

    if(!poster_path) return null;  // can use error handlings
    
    return (
        <div className = "w-32 md:w-40 m-2 cursor-pointer hover:scale-110 transition duration-300 ease-in">
            <img 
                alt="Movie Card"
                src = {IMG_CDN_URL + poster_path}
                onClick = {displayPoster} />
        </div>
    );
}


export default MovieCard;