import { auth } from "../utils/firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";

import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {LOGO} from "../utils/Constants";
import { addGptToggleView } from "../utils/gptSlice";
import { STD_LANGUAGE } from "../utils/Constants";
import { addLanguageSelection } from "../utils/langSlice";
import lang from "../utils/languageConstants";


const Header = () => {

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);

    const check = useSelector(store => store.gpt.showGptSearchToggle);

    const config = useSelector(store => store.lang.optLanguage);

    const handleSearchPage = () => {
      dispatch(addGptToggleView());
    }

    const langHandler = (e) => {
      dispatch(addLanguageSelection(e.target.value));
    }

    useEffect(() => {
       const Unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is logged in or Signed up
              const {uid, email, displayName} = user;
               dispatch(addUser({uid : uid, email: email, name: displayName}));
               Navigate("/browse");
            } else {
              // User is signed out
             dispatch(removeUser());
             Navigate("/");
            }
          });
          return () => Unsubscribe() ;
    }, []);


    const signOutFunction = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
      
        }).catch((error) => {
          // An error happened.
            Navigate("/error");
        });
    }


    return(
        <div className = "absolute font-extrabold px-8 bg-gradient-to-br from-black z-10 w-full py-3 justify-between flex">
            <img className = "w-52"
            src = {LOGO}
            alt = "logo"></img>

            
            {user && (
                <div className = "justify-evenly flex p-2">
                    
                   {check && (<select className = " bg-transparent pl-2 border-collapse rounded-sm text-white font-normal" onClick = {langHandler}>
                      {STD_LANGUAGE.map((lan) => (
                        <option key = {lan.identifier} 
                            value = {lan.identifier} 
                            className = "bg-black text-white bg-opacity-80">{lan.name}</option>
                      ))}
                    </select> )}
                    
                    
                    <button 
                      className = "rounded-md bg-purple-700 text-black italic font-medium m-4 px-6"
                      onClick = {handleSearchPage}>{check? lang[config].homePage : lang[config].search}</button>
                    
                    <span className = "p-2 m-4 font-bold text-red-600 text-xl">{user?.name}</span>
                    
                    <button 
                        className = "border border-red-700 bg-gradient-to-b from-red-800 to-red-950 text-justify text-white font-medium p-2 my-4 rounded-xl flex"
                        onClick = {signOutFunction}>{lang[config].signOut}</button>
                </div>
            )}
        </div>

     
    );
}


export default Header;