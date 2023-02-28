
//Using Class ES6 Modules
export default class ErrorHandling {
 
    static showSuccess(input,message){
        //get the form-field element
        const formField = input.parentElement;

        //remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');

        //hide the error message
        const error = formField.querySelector('small');
        error.textContent ='';

    }
    static showError(input,message){
        //get the form-field element
        const formField = input.parentElement;
    
        //add the error class
        formField.classList.remove('success');
        formField.classList.add('error');
    
        //show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    }

}

//Using function ES6

// export const showError = (input,message) =>{
//     //get the form-field element
//     const formField = input.parentElement;

//     //add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     //show the error message
//     const error = formField.querySelector('small');
//     error.textContent = message;
// }

// export const showSuccess = (input) =>{
//     //get the form-field element
//     const formField = input.parentElement;

//     //remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     //hide the error message
//     const error = formField.querySelector('small');
//     error.textContent ='';
// }