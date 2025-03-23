window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
 import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import * as bootstrap from 'bootstrap';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click" , () =>{
        alert("أضيف المنتج إلى عربة الشراء")
    })
})

document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('chang', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('chang', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

// document.querySelectorAll('.quantity').
// document.querySelectorAll('#product-quantity').
// document.querySelectorAll('[data-product-quantity]').

// حساب سعر اجمالي المنتج 
document.querySelectorAll('[data-product-quantity]').forEach(item =>{
    item.addEventListener('change', () =>{
        const newQuantity = item.value;
        const Parent = item.closest('[data-product-info]');
        const PricePerubit = Parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * PricePerubit
        Parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$";


         calculateTotalPrice()


    })
})


document.querySelectorAll('[data-remove-from-card]').forEach( item => {
    item.addEventListener('click' , () => {
        item.closest('[data-product-info]').remove()

         calculateTotalPrice()


    })
})



function calculateTotalPrice(){
    let totalPriceForAllProduct = 0 ;
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const priceperUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value
        const totalPriceForProduct = priceperUnite * quantity 

        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + '$' ;
}




document.getElementById("coptright").innerHTML  =   "جميع الحقوق محفوظة للمتجر سنة "  +  new Date().getFullYear()


console.log ("اهلا بك في متجر عربي");
console.log ("اهلا بك في اكاديمية حسوب");