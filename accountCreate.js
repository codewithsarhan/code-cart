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

signupBtn.addEventListener('click', (e) => {

    let userFulName = signupName.value;
    let userEmailNo = signupEmail.value;
    let userPasswrd = signupPassword.value;
    let confirmPassword = signupConfirmPassword.value;


    e.preventDefault();

    if (userFulName === "" || userEmailNo === "" || userPasswrd === "" || confirmPassword === "") {

        alert("Complete All Requirements To Creating Account");

    } else if (userPasswrd.length < 8) {

        alert('Password Set Minimum 8 characters');

    }else if (userPasswrd === confirmPassword) {

        let loggedIn = true ;

     Swal.fire({
            icon: "success",
            title: "Good Job!",
            text: "Your Account Create Sucessfully!",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html'
            }
        });
     
        const userLoginDetails = [
            
            {'userFulName' : userFulName , 'userEmailNo' : userEmailNo , 'userPasswrd' : userPasswrd , 'loggedIn' : loggedIn}
        ]

        localStorage.setItem('userLoginDetails' , JSON.stringify(userLoginDetails))


    }else{

        alert('Password Or Confirm Pasword Its Totally Diffrent')

    }

})

