let coustumerName = localStorage.getItem("userName");
let userEmail = localStorage.getItem("userEmail");
let userPhoneNo = localStorage.getItem("userPhoneNo");
let productPrice = localStorage.getItem("productPrice");
let productName = localStorage.getItem("productName");
let productDisc = localStorage.getItem("productDisc");

let username = document.querySelector('.user-name');
let orderemail = document.querySelector('.order-email');
let userphone = document.querySelector('.user-phone');
let producttitle = document.querySelector('.product-title-span');
let productdisc = document.querySelector('.product-disc');
let productprice = document.querySelector('.product-price');
let statusValue = document.querySelector('.status-value');


username.textContent = coustumerName;
orderemail.textContent = userEmail;
userphone.textContent = userPhoneNo;
productprice.textContent = productPrice;
productdisc.textContent = productDisc;
producttitle.textContent = productName;

console.log();


if (productDisc == undefined) {
    
    statusValue.textContent = "buyfirst"
    statusValue.style.color = "red"

}else {

statusValue.textContent = "Pending"
statusValue.style.color = "Orange"

}


let btnremove = document.querySelector('.btn-remove');

btnremove.addEventListener('click' , () => {

localStorage.clear()
location.reload()

})