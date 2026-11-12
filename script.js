// Profile Open ===

let userIcn = document.querySelector('#userIcn');

let login = false;

userIcn.addEventListener('click', () => {

    if (login === false) {


        window.location.href = 'http://127.0.0.1:5500/profile.html'


    }

})

let cartIcn = document.querySelector('#cartIcn');

cartIcn.addEventListener('click', () => {

window.location.href = 'http://127.0.0.1:5500/cartItem.html'

})


let productMainCn = document.querySelector('#productMainCn')

productMainCn.addEventListener('click' , (e) => {


if (e.target.tagName === 'BUTTON') {

    window.location.href = 'http://127.0.0.1:5500/orderForm.html'
    
}


})


