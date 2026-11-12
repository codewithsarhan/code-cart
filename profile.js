let loginBtn = document.querySelector('#loginBtn');
let loginEmail = document.querySelector('#login-email');
let loginPassword = document.querySelector('#login-password');


loginBtn.addEventListener('click', (e) => {

    e.preventDefault()

    let login = loginEmail.value

    if (login === '') {
        alert('Enter Email First')

    } else if (!login.includes('@')) {
        alert('Email Format Wrong')
    } else if (login.startsWith('-')) {
        alert('Wrong Email Format')
    } else {
        window.location.href = 'http://127.0.0.1:5500/index.html'

    }


})