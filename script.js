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

productMainCn.addEventListener('click', (e) => {


    if (e.target.tagName === 'BUTTON') {

        window.location.href = 'orderForm.html'

    }


})




let cartItem = localStorage.getItem('cartItem');

console.log(cartItem);


let reddot = document.querySelector('.red-dot');


function reddotFunc(cartValue) {

    if (cartValue = true) {

        reddot.style.removeProperty('display')
reddot.style.display = 'block'        

    } 
}
reddotFunc(cartItem)