import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constants";
import backIcon from "../utils/icons8-back-arrow-60.png";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import  usePlayer  from "../Hooks/usePlayers";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const MovieDetails = () => {

    const Navigate = useNavigate();

    const details = useSelector(store => store.movies);
    const movId = useSelector(store => store.movies.movieId);

    const cast = details.castDetails;
    const crew = details.crewDetails;

   usePlayer(movId);

   const trailerVideos = useSelector((store) => store.movies.player);
   

    if(!details.crewDetails && !details.castDetails) return null;
    
    const moveToPrevious = () => {
        Navigate("/browse")
    }

    return (

        <div className = "bg-black bg-opacity-95 text-white w-screen h-screen p-2">

            <img src={backIcon} alt="icon" className = "bg-white rounded-full w-10" onClick={moveToPrevious}/>
            
        
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                 {trailerVideos.map(trailerVideo => (<iframe 
                className="w-screen aspect-video p-2"
                src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?autoplay=1&loop=1&modestbranding=1&mute=1&rel=0"}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin">
            </iframe>))}
            </Carousel>

            

           <h1 className = "font-serif font-semibold text-[30px]">Cast</h1>
           
           <div className = "flex p-2 overflow-x-auto no-scrollbar">
                {cast.map(casts => (
                    <div key= {casts.id} className = "text-center">
                        <div className = "w-32 md:w-40 m-2"><img src = {IMG_CDN_URL + casts.profile_path} alt="cast" className = "rounded-md"/></div>
                        <h3 className = "text-xl font-bold">{casts.original_name}</h3>
                        <h3 className = "font-serif text-lg text-lime-400">{casts.character}</h3>
                        <h4>{casts.known_for_department}</h4>
                    </div>
                ))}
           </div>


           <h1 className = "font-serif font-semibold text-[30px]">Crew</h1>
           <div className = "flex p-2 overflow-x-auto no-scrollbar"> 
                {crew.map(crews => (
                    <div key= {crews.id} className = "text-center">
                        <div className = "w-32 md:w-40 m-2"><img src = {IMG_CDN_URL + crews.profile_path} alt="cast" /></div>
                        <h3 className = "text-xl font-bold text-lime-400">{crews.original_name}</h3>
                        <h3 className = "font-serif text-lg">{crews.department}</h3>
                        <h4>{crews.known_for_department}</h4>
                    </div>
                ))}
           </div>
        </div>
    )
}


export default MovieDetails;