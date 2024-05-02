import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
//import { checkValidDataSignUp } from "../utils/validatecnf";

import {useNavigate} from "react-router-dom";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
import { BG_IMAGE } from "../utils/Constants";

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errMessage, setErrMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const name = useRef(null);
    const cnfPassword = useRef(null);
    

    const ToggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const HandleForm = () => {
        // Form validation

        //const message = (isSignInForm) ? checkValidData(email.current.value , password.current.value) : checkValidDataSignUp(email.current.value , password.current.value, name.current.value , cnfPassword.current.value);

        const message = checkValidData(email.current.value , password.current.value);
        setErrMessage(message);

        if(message) return;

    //SignIn or SignUp logic
        
        if(!isSignInForm){
            // Sign-up
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
               const user = userCredential.user; 
               console.log(user);
               // Update users profile
               updateProfile(user, {
                    displayName: name.current.value
                    }).then(() => {
                    // Profile updated!
                        const {uid, email, displayName} = auth.currentUser;
                        dispatch(addUser({uid : uid, email: email, name: displayName}));
                        navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                        setErrMessage(error.message);
                    })
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrMessage(errorCode + " - " + errorMessage);
            });

        }else{
            // Sign-In
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                setErrMessage(errorCode + " - " + errorMessage);
            });

            navigate("/browse")
        }
       
        
    }

    return (
        <div>
            <Header />

            <div className = "absolute">
                <img className = "h-screen w-screen object-cover"
                src = {BG_IMAGE} 
                alt = "logo"></img>
            </div>

        
            <form onSubmit = {(e) => e.preventDefault()} 
            className = "w-9/12 md:w-3/12 md:p-12 p-6 absolute my-40 mx-auto right-0 left-0 text-white bg-black bg-opacity-80">
                <h1 className = "font-bold md:text-3xl text-2xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input 
                    ref = {name}
                    type="text" 
                    placeholder="Full Name" 
                    className = "md:p-4 md:my-4 p-3 my-2 rounded-md w-full bg-gray-800"
                    ></input>)}

                <input 
                    ref = {email}
                    type = "text" 
                    placeholder = "Email or Phone number" 
                    className = "md:p-4 md:my-4 p-3 my-3 rounded-md w-full bg-gray-800"></input>

                <input 
                    ref = {password}
                    type = "password" 
                    placeholder ="Password" 
                    className = "md:p-4 md:my-4 p-3 my-3 rounded-md w-full bg-gray-800"></input>

                {!isSignInForm && (<input 
                    ref = {cnfPassword}
                    type="password" 
                    placeholder="Confirm Password" 
                    className="md:p-4 md:my-4 p-3 my-3 rounded-md w-full bg-gray-800"></input>)}

                <p className = "text-red-500 p-2 font-semibold text-lg">{errMessage}</p>

                <button 
                    className = "md:p-4 md:my-6 p-2 my-2 bg-red-700 rounded-md w-full cursor-pointer"
                    onClick = {HandleForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className = "p-4 cursor-pointer" onClick = {ToggleForm}>{isSignInForm? "New to Netflix? Sign up now." : "Already registered? Sign In."}</p>
            </form>
    

        </div>
    );
}


export default Login;