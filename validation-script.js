
import { checkUsername, checkEmail, checkPassword,checkConfirmPassword } from "./Validation/field_validation.js";

const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#password-confirm');

const form = document.querySelector('#signup');

//the submit event handler
form.addEventListener('submit',function(e){

    //prevent the form from submitting
    e.preventDefault();

    //Console All fields Data
  
    //validate forms
    let isUsernameValid = checkUsername(usernameEl);
    let isEmailValid = checkEmail(emailEl);
    let isPasswordValid = checkPassword(passwordEl);
    let isConfirmPasswordValid = checkConfirmPassword(passwordEl,confirmPasswordEl);

    let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

    //submit to the server if the form is valid
    if(isFormValid){
        const newObj ={
            username:usernameEl.value.trim(),
            email:emailEl.value.trim(),
            password:passwordEl.value.trim(),
            confrimPassword:confirmPasswordEl.value.trim()
        }
        let readData = localStorage.getItem('form-data-save');
        if(readData !== "null" && readData !== "undefined"){
            
            readData = JSON.parse(readData);
            readData.push(newObj);
            localStorage.setItem('form-data-save',JSON.stringify(readData));
        }else{

            localStorage.setItem('form-data-save',JSON.stringify(readData));
        }
    }
    
});


