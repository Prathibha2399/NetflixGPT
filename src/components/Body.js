import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieDetails from "./MovieDetails";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element : <Login />
        },
        {
            path:"/browse",
            element : <Browse />
        },
        {
            path:"/card",
            element : <MovieDetails />
        },
    ]);



    return(
        <div>
            <RouterProvider router = {appRouter}/>
        </div>
    );
}


export default Body;