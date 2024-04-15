export const checkValidDataSignUp = (email, password, name, cnfPassword) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);

    const isName = /^([a-zA-Z][a-zA-Z0-9_]{7,})$/.test(name);

    const iscnfPassword = cnfPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);

    if(!isEmailValid) return "Email Id is not valid";

    if(!isPasswordValid) return "Invalid password";

    if(!isEmailValid && !isPasswordValid) return "Email and Passwords are Invalid";

    if(!isName) return "Invalid User name";

    if(isPasswordValid !== iscnfPassword) return "Password not matching"

    return null;

}