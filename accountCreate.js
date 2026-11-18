let showlogin = document.querySelector('#show-login');
showlogin.addEventListener('click', () => {

    window.location.href = 'profile.html'

})

let signupName = document.querySelector('#signup-name');
let signupEmail = document.querySelector('#signup-email');
let signupPassword = document.querySelector('#signup-password');
let signupConfirmPassword = document.querySelector('#signup-confirm-password');
let signupBtn = document.querySelector('#signupBtn');
let signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {

let userFulName = signupName.value;
let userEmailNo = signupEmail.value;
let userPasswrd = signupPassword.value;
let confirmPassword = signupConfirmPassword.value;

    console.log(userFulName);

    e.preventDefault();

    signupBtn.addEventListener('click', () => {

        if (userFulName === "" || userEmailNo === "" || userPasswrd === "" || confirmPassword === "") {

            alert("Complete All Requirements To Creating Account");

        }else {
            
            

        }

    })


})