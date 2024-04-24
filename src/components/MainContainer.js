import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

export const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlaying);

    if(movies === null) return; //early return 

    const mainMovie = movies[0]; 
    console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;

    return(
        <div>
            <VideoTitle title = {original_title} overview = {overview} />
            <VideoBg movieID = {id}/>
        </div>
    )

}


//export default MainContainer;