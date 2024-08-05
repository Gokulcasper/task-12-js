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

// =========== Select Your Pet =============
// let petSelect = document.getElementById('petSelect');
// let petImg = document.getElementById('petImg');

// function updatePetImage() {
//     let selectedPet = petSelect.value;
//     let imgUrl = '';
//     switch (selectedPet) {
//         case 'dog':
//             imgUrl = 'https://static.vecteezy.com/system/resources/thumbnails/020/899/513/small_2x/happy-dog-transparent-background-png.png';
//             break;
//         case 'cat':
//             imgUrl = 'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-cat-animal-png-image_10149335.png';
//             break;
//         case 'parrot':
//             imgUrl = 'https://png.pngtree.com/png-clipart/20230307/ourmid/pngtree-realistic-beautiful-orignal-nature-red-parrot-png-image_6636296.png';
//             break;
//         case 'spider':
//             imgUrl = 'https://static.vecteezy.com/system/resources/previews/032/058/600/non_2x/black-spider-on-transparent-background-free-png.png';
//             break;
//         case 'rabbit':
//             imgUrl = 'https://png.pngtree.com/png-clipart/20230528/ourmid/pngtree-funny-bunny-or-baby-rabbit-for-easter-day-on-isolated-background-png-image_7110369.png';
//             break;
//         default:
//             imgUrl = '';
//     }
//     petImg.src = imgUrl;
// }
// petSelect.addEventListener('change', updatePetImage);

// ========== Answer the Question ================

let questionForm = document.getElementById('questionForm');
function handleFormSubmit(event) {
    event.preventDefault(); 
    const selectedCity = document.querySelector('input[name="city"]:checked');
    const resultMsg = document.getElementById('resultMsg');

    if (!selectedCity) {
        resultMsg.textContent = 'Please select the answer.';
        return;
    }

    if (selectedCity.value === 'Delhi') {
        resultMsg.textContent = 'Correct answer.';
        resultMsg.style.color = 'green';
    } else {
        resultMsg.textContent = 'Wrong answer.';
        resultMsg.style.color = 'red';
    }
}
questionForm.addEventListener('submit', handleFormSubmit);
