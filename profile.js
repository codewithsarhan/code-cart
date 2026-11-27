let loginBtn = document.querySelector('#loginBtn');
let loginEmail = document.querySelector('#login-email');
let loginPassword = document.querySelector('#login-password');

let dta = localStorage.getItem('userLoginDetails')
let parsed = dta ? JSON.parse(dta) : [];
console.log(parsed);

if (parsed.length > 0) {
    
    
if (parsed[0].loggedIn == true) {

    let loginbox = document.querySelector('#login-box');

    loginbox.classList.add = 'hidden';

    console.log("Hsh");


} else {

    loginBtn.addEventListener('click', (e) => {

        e.preventDefault()

        let lgEmail = loginEmail.value;
        let lgpassword = loginPassword.value;

        if (lgEmail === parsed[0].userEmailNo && lgpassword === parsed[0].userPasswrd) {

            Swal.fire({
                icon: "success",
                title: "Good Job!",
                text: `Your Account Login Sucessfully!`,
                confirmButtonText: "Confirm"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "index.html";
                }
            });

        } else {

            alert('Not Account Found First Check Or Create')

        }

    })

}


}else{

    console.log("Check First Not Account Found");
    

}
