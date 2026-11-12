let fullNameInput = document.querySelector('#fullName');
let emailInput = document.querySelector('#email');
let phoneInput = document.querySelector('#phone');

let cardContent = document.querySelectorAll('.card-content');
let servicesGrid = document.querySelector('.services-grid')
let productPrice = document.querySelectorAll('.price');
let totalPrice = document.querySelector('#totalPrice')

servicesGrid.addEventListener('click', (e) => {



    if (e.target.closest('.card-content')) {

        let crd = e.target.closest('.card-content')
        console.log(crd);
        let prPrice = crd.querySelector('.price');
        let prdctPrice = prPrice.textContent;
        console.log(prPrice);

        totalPrice.textContent = prdctPrice

        let submitBtn = document.querySelector('.submit-btn');

        submitBtn.addEventListener('click', (e) => {

            e.preventDefault();

            let userName = fullNameInput.value ; 
            let userEmail = emailInput.value ;
            let userPhoneNo = phoneInput.value ;

            let orderDiv = document.createElement('div')
            let user_Name = document.createElement('h1')
            let 


            

        })


    }



})

