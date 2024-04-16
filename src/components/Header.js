import { auth } from "../utils/firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

    const Navigate = useNavigate();

    const user = useSelector((store) => store.user);

    const signOutFunction = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          Navigate("/");
        }).catch((error) => {
          // An error happened.
            Navigate("/error");
        });
    }

    return(
        <div className = "absolute font-extrabold px-8 py-2 bg-gradient-to-br from-black z-10 w-screen flex justify-between">
            <img className = "w-48"
            src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            alt = "logo"></img>

            
            {user && (
                <div>
                    <button 
                        className = "border border-red-700 bg-gradient-to-b from-red-800 to-red-950 text-justify text-white font-medium p-2 m-4 rounded-xl flex"
                        onClick = {signOutFunction}>Sign Out</button>
                </div>
            )}
        </div>

     
    );
}


export default Header;