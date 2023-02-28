//Add Instant feedback feature

// form.addEventListener('input',function(e){
//     switch(e.target.id){
//         case 'username':
//             checkUsername();
//             break;
//         case 'email':
//             checkEmail();
//             break;
//         case 'password':
//             checkPassword();
//             break;
//         case 'confirm-password':
//             checkConfirmPassword();
//             break;
//     }
// });


//Debounce form validtion

// const debounce = (fn,delay =500) =>{
//     let timeoutId;
//     return (...args) =>{
//         //cancel the previous timer
//         if(timeoutId){
//             clearTimeout(timeoutId);
//         }
//         //setup a new timer
//         timeoutId = setTimeout(()=>{
//             fn.apply(null,args)
//         },delay)
//     };
// };