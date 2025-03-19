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


document.getElementById("coptright").innerHTML  =   "جميع الحقوق محفوظة للمتجر سنة "  +  new Date().getFullYear()


console.log ("اهلا بك في متجر عربي");
console.log ("اهلا بك في اكاديمية حسوب");