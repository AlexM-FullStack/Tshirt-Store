import shopProductsData from "./products.js"

const containerCheckout = document.querySelector('.container-checkout')
console.log(containerCheckout)

function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : {}
}

function calculateCheckoutTotal(cart, products) {
    let totalPrice = 0

    for (let product of products) {
        const quantity = cart[product.id]
        totalPrice += quantity * product.price
    }

    return totalPrice
}

const cart = getCartFromLocalStorage()
const totalPrice = calculateCheckoutTotal(cart, shopProductsData)
console.log(totalPrice)

const h3 = document.createElement('h3')
h3.innerText = totalPrice
containerCheckout.appendChild(h3)