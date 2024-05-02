import { useLocation } from "react-router-dom";
import { useDetails } from "../Hooks/useDetails";


const MovieDetails = () => {

   /*  const location = useLocation();
    const data = location.state;

    const details = useDetails({data}); 
    console.log(details); */

    useDetails();

    return (

        <div className = "bg-black bg-opacity-95">
           
        </div>
    )
}


export default MovieDetails;