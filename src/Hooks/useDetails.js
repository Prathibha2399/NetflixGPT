import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

export const useDetails = () => {

    const getDetails = async () => {
        const datas = await fetch('https://api.themoviedb.org/3/movie/823464/credits?language=en-US', API_OPTIONS);
        const json = await datas.json();
        console.log(json);
    }

    useEffect(() => {
        getDetails();
    }, []);
}