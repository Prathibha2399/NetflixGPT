import { useSelector } from "react-redux";
import { useTrailers } from "../Hooks/useTrailers";

const VideoBg = ({movieID}) => {

    const trailerVideo = useSelector((store) => store.movies.trailer);

    useTrailers(movieID);

    return (
        <div className = "w-screen">
            <iframe 
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?autoplay=1&loop=1&modestbranding=1&mute=1&rel=0"}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    );
};


export default VideoBg;