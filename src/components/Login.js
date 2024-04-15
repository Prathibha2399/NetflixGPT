import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
//import { checkValidDataSignUp } from "../utils/validatecnf";

import {useNavigate} from "react-router-dom";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {

    const navigate = useNavigate();

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
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrMessage(errorCode + " - " + errorMessage);
            });

            navigate("/browse")

        }else{
            // Sign-In
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMessage(errorCode + " - " + errorMessage);
            });

            navigate("/browse")
        }
       
        
    }

    return (
        <div>
            <Header />

            <div>
                <img className = "w-screen absolute"
                src = "https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                alt = "logo"></img>
            </div>

        
            <form onSubmit = {(e) => e.preventDefault()} 
            className = "w-3/12 p-12 absolute my-40 mx-auto right-0 left-0 text-white bg-black bg-opacity-80">
                <h1 className = "font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input 
                    ref = {name}
                    type="text" 
                    placeholder="Full Name" 
                    className = "p-4 my-4 rounded-md w-full bg-gray-800"
                    ></input>)}

                <input 
                    ref = {email}
                    type = "text" 
                    placeholder = "Email or Phone number" 
                    className = "p-4 my-4 rounded-md w-full bg-gray-800"></input>

                <input 
                    ref = {password}
                    type = "password" 
                    placeholder ="Password" 
                    className = "p-4 my-4 rounded-md w-full bg-gray-800"></input>

                {!isSignInForm && (<input 
                    ref = {cnfPassword}
                    type="password" 
                    placeholder="Confirm Password" 
                    className="p-4 my-4 rounded-md w-full bg-gray-800"></input>)}

                <p className = "text-red-500 p-2 font-semibold text-lg">{errMessage}</p>

                <button 
                    className = "p-4 my-6 bg-red-700 rounded-md w-full cursor-pointer"
                    onClick = {HandleForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className = "p-4 cursor-pointer" onClick = {ToggleForm}>{isSignInForm? "New to Netflix? Sign up now." : "Already registered? Sign In."}</p>
            </form>
    

        </div>
    );
}


export default Login;