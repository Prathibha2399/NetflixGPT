import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { addCastDetails,addCrewDetails } from "../utils/moviesSlice";

export const useDetails = (id) => {

    console.log(id);

    const dispatch = useDispatch();

    const getDetails = async () => {
        const datas = await fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?language=en-US', API_OPTIONS);
        const json = await datas.json();
        console.log(json);

        dispatch(addCastDetails(json.cast));
        dispatch(addCrewDetails(json.crew));
    }

    useEffect(() => {
        getDetails(id);
    }, []);
}