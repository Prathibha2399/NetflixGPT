import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constants";
import backIcon from "../utils/icons8-back-arrow-60.png";
import { useNavigate } from "react-router-dom";


const MovieDetails = () => {

    const Navigate = useNavigate();

    const details = useSelector(store => store.movies);

    const cast = details.castDetails;
    const crew = details.crewDetails;

    if(!details.crewDetails && !details.castDetails) return null;

    const moveToPrevious = () => {
        Navigate("/browse")
    }

    return (

        <div className = "bg-black bg-opacity-95 text-white w-screen h-screen p-2">

            <img src={backIcon} alt="icon" className = "bg-white rounded-full w-10" onClick={moveToPrevious}/>

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