import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constants";
import backIcon from "../utils/icons8-back-arrow-60.png";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BG_IMAGE } from "../utils/Constants";


const MovieDetails = () => {

    const Navigate = useNavigate();

    const details = useSelector(store => store.movies);
    const movDetails = useSelector(store => store.movies.movDetails);

    const { original_title,tagline, overview, popularity,release_date, original_language, vote_average} = movDetails;

    const cast = details.castDetails;
    const crew = details.crewDetails;

   //usePlayer();

   const trailerVideos = useSelector((store) => store.movies.player);
   
   //useMoviesDetails();

    if(!details.crewDetails && !details.castDetails) return null;

    
    const moveToPrevious = () => {
        Navigate("/browse")
    }

    return (
        <div>

            <div>
                <img src = {BG_IMAGE} className = "w-screen h-screen object-cover opacity-90 fixed -z-20" />
            </div>

            <div className = "text-white w-screen h-screen p-2">

            <img src={backIcon} alt="icon" className = "bg-white rounded-full w-10 cursor-pointer" onClick={moveToPrevious}/>
            
        <div className = "w-[85%] m-4 mx-[5%] text-center bg-black rounded-3xl">
            <Carousel autoplay interval={1000} showThumbs={false} infiniteLoop>
                {trailerVideos.map(trailerVideo => (
                <iframe 
                    className="w-screen aspect-video p-2"    
                    src={"https://www.youtube-nocookie.com/embed/" + trailerVideo?.key} 
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>))}
            </Carousel></div>

        <div className="bg-black p-4">
            <div>
                <h1 className="font-bold text-3xl underline underline-offset-4 pb-5">Title : {original_title}</h1>
                <h2 className="text-lg font-semibold italic">" {tagline} "</h2>
                <p className="font-serif pt-2 pb-3 text-center text-xl">» {overview}</p>
            </div>
            <hr />
            <div className="px-4 p-2">
                <h3>Original Language : {original_language}</h3>
                {/* <h3>About :-</h3>
                <div>
                    <p>Genres : </p>
                    {gen.map(genre => {genre.name})}
                    
                    <p>Origin : </p>
                    {countries.map(country => {country.name})}
              
                    <p>Production : </p>
                    {companies.map(company => {company.name})}

                    <p>Languages : </p>
                    {language.map(lan => {lan.name})}
                </div> */}
                <div>
                    <h3>Released : {release_date}</h3>
                    <h3>Views : {popularity}</h3>
                    <h3>⭐ : {vote_average}</h3>
                </div>
            </div>     
        </div>
            
    <div className = "bg-black pt-[1%]"><h1 className = "font-serif font-semibold text-[40px] m-4"><span className="underline underline-offset-4">Cast</span></h1>
           
           <div className = "flex p-2 m-2 overflow-x-auto no-scrollbar bg-black">
                {cast.map(casts => (
                    <div key= {casts.id} className = "text-center">
                        <div className = "w-32 md:w-40 m-2"><img src = {IMG_CDN_URL + casts.profile_path} alt="cast" className = "rounded-md"/></div>
                        <h3 className = "text-xl font-bold">{casts.original_name}</h3>
                        <h3 className = "font-serif text-lg text-lime-400">{casts.character}</h3>
                        <h4>{casts.known_for_department}</h4>
                    </div>
                ))}
           </div>


           <h1 className = "font-serif font-semibold text-[40px] m-4"><span className="underline underline-offset-4">Crew</span></h1>
           <div className = "flex p-2 m-2 overflow-x-auto no-scrollbar bg-black"> 
                {crew.map(crews => (
                    <div key= {crews.id} className = "text-center">
                        <div className = "w-32 md:w-40 m-2"><img src = {IMG_CDN_URL + crews.profile_path} alt="cast" /></div>
                        <h3 className = "text-xl font-bold text-lime-400">{crews.original_name}</h3>
                        <h3 className = "font-serif text-lg">{crews.department}</h3>
                        <h4>{crews.known_for_department}</h4>
                    </div>
                ))}
           </div></div>
           
        </div></div>
        
    )
}


export default MovieDetails;