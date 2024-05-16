import Header from "./Header";
import { useNowPlaying } from "../Hooks/useNowPlaying";
import {MainContainer} from "./MainContainer";
import {SecondaryContainer} from "./SecondaryContainer";
import { usePopular } from "../Hooks/usePopular";
import { useTopRated } from "../Hooks/useTopRated";
import { useUpcomming } from "../Hooks/useUpcomming";
import { useSelector } from "react-redux";
import GptSearch from "./GptSeach";
import { useHorror } from "../Hooks/useHorror";
import { useAdvnMystry } from "../Hooks/useAdvn&Mystry";
import { useAnimation } from "../Hooks/useAnimation";
import { useFantasy } from "../Hooks/useFantasy";
import { useFiction } from "../Hooks/useFiction";
import { useRomance } from "../Hooks/useRomance";
import { useHistory } from "../Hooks/useHistory";


const Browse = () => {

    const searchPageView = useSelector(state => state.gpt.showGptSearchToggle); 

    useNowPlaying();
    usePopular();
    useUpcomming();
    useTopRated();
    useHorror();
    useAdvnMystry();
    useFantasy();
    useFiction();
    useAnimation();
    useHistory();
    useRomance();

    return(
        <div className = "h-screen bg-gradient-to-b from-black-400 to-transparent">
            <Header />
            {searchPageView ? (<GptSearch />) : (
                    <>
                    <MainContainer />
                    <SecondaryContainer /></>)}
            
        </div>
    )
}


export default Browse;