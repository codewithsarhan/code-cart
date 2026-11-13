let fullNameInput = document.querySelector('#fullName');
let emailInput = document.querySelector('#email');
let phoneInput = document.querySelector('#phone');

let cardContent = document.querySelectorAll('.card-content');
let servicesGrid = document.querySelector('.services-grid')
let productPrice = document.querySelectorAll('.price');
let totalPrice = document.querySelector('#totalPrice')

let prPrice;
let prName;
let prDisc;

servicesGrid.addEventListener('click', (e) => {

    if (e.target.closest('.card-content')) {

        let crd = e.target.closest('.card-content')
        console.log(crd);
        prPrice = crd.querySelector('.price').textContent;
        prName = crd.querySelector('h3').textContent;
        prDisc = crd.querySelector('.desc').textContent;
        console.log(prName);
        console.log(prDisc);
        console.log(prPrice);


        totalPrice.textContent = prPrice;



    }
})




let submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {

    e.preventDefault();

    let userName = fullNameInput.value;
    let userEmail = emailInput.value;
    let userPhoneNo = phoneInput.value;

    let productPrice = prPrice;
    let productName = prName;
    let productDisc = prDisc;


    if (userName == '' && userEmail == '' && userPhoneNo == '') {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Filled Form First!",
        });


    } else if (productDisc == undefined) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Select Website You Want To Buy",
        });

    } else {


        Swal.fire({
            icon: "success",
            title: "Good Job!",
            text: "Your Order Save Sucessfully!",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "index.html";
            }
        });


        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userPhoneNo", userPhoneNo);
        localStorage.setItem("productPrice", productPrice);
        localStorage.setItem("productName", productName);
        localStorage.setItem("productDisc", productDisc);
        localStorage.setItem('cartItem', true);


    }



})