// import { showError,showSuccess } from "./errorHandling.js";

import ErrorHandling from "./errorHandling.js";

const isRequired = value => value === ''? false: true;

const isBetween = (length,min,max) => length< min || length > max ? false : true;

const isEmailValid = (email) =>{
    // const regEx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regEx.test(email);
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const isPasswordSecure = (password) =>{
    const regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return regEx.test(password);
}


//Validate the Username field
export const checkUsername = (usernameEl) =>{
    let valid = false;
    const min = 3,max= 25;
    const username = usernameEl.value.trim();

    if(!isRequired(username)){
        ErrorHandling.showError(usernameEl,'Username cannot be blank.');
    }else if(!isBetween(username.length,min,max)){
        ErrorHandling.showError(usernameEl,`Username must be between ${min} and ${max} characters.`);
    }else{
        ErrorHandling.showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}

//Validate the Email field
export const checkEmail= (emailEl)=>{
    let valid = false;
    const email = emailEl.value.trim();
    if(!isRequired(email)){
        ErrorHandling.showError(emailEl,'Email connot be blank.');
    }else if(!isEmailValid(email)){
        ErrorHandling.showError(emailEl,'Email is not valid');
    }else{
        ErrorHandling.showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

//Validate the password field
export const checkPassword = (passwordEl)=>{
    let valid = false;
    const password = passwordEl.value.trim();
    if(!isRequired(password)){
        ErrorHandling.showError(passwordEl,'Password cannot be blank.');
    }else if(!isPasswordSecure(password)){
        ErrorHandling.showError(passwordEl,'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character in (!@#$%^&*)');
    }else{
        ErrorHandling.showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}


//Validate the confirm password field
export const checkConfirmPassword = (passwordEl,confirmPasswordEl) =>{
    let valid = false;
    //check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if(!isRequired(confirmPassword)){
        ErrorHandling.showError(confirmPasswordEl,'Please enter the password again');
    }else if(password !== confirmPassword){
        ErrorHandling.showError(confirmPasswordEl,'Confrim password does not match');
    }else{
        ErrorHandling.showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
}