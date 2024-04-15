import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {useEffect} from "react";


const Body = () => {
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element : <Login />
        },
        {
            path:"/browse",
            element : <Browse />
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is logged in or Signed up
              const {uid, email, dispName} = user;
               dispatch(addUser({uid : uid, email: email, name: dispName}));
               // navigate("/browse")
            } else {
              // User is signed out
             dispatch(removeUser());
             //navigate("/");
            }
          });
    }, []);



    return(
        <div>
            <RouterProvider router = {appRouter}/>
        </div>
    );
}


export default Body;