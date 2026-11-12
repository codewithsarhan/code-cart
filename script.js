// Profile Open ===

let userIcn = document.querySelector('#userIcn');

let login = false;

userIcn.addEventListener('click', () => {

    if (login === false) {


        window.location.href = 'profile.html'


    }

})

let cartIcn = document.querySelector('#cartIcn');

cartIcn.addEventListener('click', () => {

window.location.href = 'cartItem.html'

})


let productMainCn = document.querySelector('#productMainCn')

productMainCn.addEventListener('click' , (e) => {


if (e.target.tagName === 'BUTTON') {

    window.location.href = 'orderForm.html'
    
}


})


