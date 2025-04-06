window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import './sass/custom.scss';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
// import * as bootstrap from 'bootstrap';
import './sass/style.scss';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click" , () =>{
        alert("أضيف المنتج إلى عربة الشراء")
    })
})
// اختيار القياس واللون 
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
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


const citiesByCountry = {
    sa:[' جدة ' , ' الرياض '],
    eg:['الاسكندرية' , ' القاهرة'],
    jo:['الزرقاء' , 'عمان'],
    sy:['دمشق' , 'حماة' , 'حلب' ]

}
document.querySelectorAll('select[name="country"]').forEach (item =>{
    item.addEventListener('change' , () => {
        const country = item.value

        const cities = citiesByCountry[country]

        document.querySelectorAll('#paymentcities option').forEach(option => option.remove() )

        const firstoption = document.createElement('option')
        const textoption = document.createTextNode('اختر المدينة')
        firstoption.appendChild(textoption)
        firstoption.setAttribute('value' , '')
        firstoption.setAttribute('disabled' , 'true')
        firstoption.setAttribute('selected' , 'true')

        const city_option = document.getElementById('paymentcities')
        city_option.appendChild(firstoption)

        cities.forEach(city =>{
            const newoption = document.createElement('option')
            const textoption = document.createTextNode( city)
            newoption.appendChild(textoption)
            firstoption.setAttribute('value' , city)
            city_option.appendChild(newoption)


        })
    })
})

//  اخفاء و اظهار حقول البطاقة الإئتمانية  في صفحة payment


document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach (item => {
    item.addEventListener('change' , () => {
        const paymentmethod = item.value ;
        const ceaditCardInputs = document.querySelectorAll('#credit-card-info input');
        if(paymentmethod === 'on-delivery') {
            ceaditCardInputs.forEach(input => {
                input.style.display='none'
            })
        }
        else{
            ceaditCardInputs.forEach(input => {
                input.style.display='block'
            })
        }
    })
})






document.getElementById("coptright").innerHTML  =   "جميع الحقوق محفوظة للمتجر سنة "  +  new Date().getFullYear()


