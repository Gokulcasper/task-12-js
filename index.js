// let nameInputEl = document.getElementById("name");
// let emailInputEl = document.getElementById("email");
// let nameErrMsg = document.getElementById("nameErrMsg");
// let emailErrMsg = document.getElementById("emailErrMsg");

// nameInputEl.addEventListener("blur",function(){
//     if(nameInputEl.value.trim()==='')
//     {
//         nameErrMsg.textContent="Required*";
//     }else{
//         nameErrMsg.textContent='';
//     }
// });
// emailInputEl.addEventListener("blur",function(){
//     if(emailInputEl.value.trim()==='')
//     {
//         emailErrMsg.textContent="Required*";
//     }else{
//         emailErrMsg.textContent='';
//     }
// });


// ================ Update Password =============

// let newPassword = document.getElementById('newPassword');
// let confirmPassword = document.getElementById('confirmPassword');
// let updatePasswordForm = document.getElementById('updatePasswordForm');
// let newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
// let confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');
// let checkPasswordErrMsg = document.getElementById('checkPasswordErrMsg');

// function validateNewPassword() {
//     let newPassword1 = newPassword.value;
    
//     if (newPassword1 === '') {
//         newPasswordErrMsg.textContent = 'Enter New Password ';
//     } else {
//         newPasswordErrMsg.textContent = '';
//     }
// }
// function validateConfirmPassword() {
//     let confirmPassword1 = confirmPassword.value;
    
//     if (confirmPassword1 === '') {
//         confirmPasswordErrMsg.textContent = 'Confirm Password cannot be empty';
//     }
//     else {
//         confirmPasswordErrMsg.textContent = '';
//     }
// }
// function handleFormSubmit(event) {
//     event.preventDefault(); 

//     validateNewPassword();
//     validateConfirmPassword();
// if(newPassword.value === confirmPassword.value)
// {
//     checkPasswordErrMsg.textContent="Password Matched";
//     checkPasswordErrMsg.style.color="Green";
// }else{
//     checkPasswordErrMsg.textContent="Confirm Password is Not Matched";
//     checkPasswordErrMsg.style.color="red";
// }
// }
// newPassword.addEventListener('blur', validateNewPassword);
// confirmPassword.addEventListener('blur', validateConfirmPassword);
// updatePasswordForm.addEventListener('submit', handleFormSubmit);

// ================ Add User ==================

// let addUserForm = document.getElementById("addUserForm");
// let nameEl = document.getElementById("name");
// let nameErrMsg = document.getElementById("nameErrMsg");
// let emailEl = document.getElementById("email");
// let emailErrMsg = document.getElementById("emailErrMsg");

// function addUserName(){
//     if(nameEl.value === '')
//     {
//         nameErrMsg.textContent='Name Cannot be Empty'
//     }else{
//         nameErrMsg.textContent='';
//     }
// }
// function addUserEmail(){
//     if(emailEl.value === '')
//     {
//         emailErrMsg.textContent='Email Cannot be Empty'
//     }else{
//         emailErrMsg.textContent='';
//     }
// }

// function formSubmit(event){
// event.preventDefault();   
// addUserName();
// addUserEmail();
// }
// addUserForm.addEventListener('submit',formSubmit);
// nameEl.addEventListener('blur',addUserName);
// emailEl.addEventListener('blur',addUserEmail);