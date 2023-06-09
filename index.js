import shopProductsData from "./products.js"

const shopEl = document.getElementById('shop')
const cartAmount = document.querySelector('.cartAmount')
const cartEl = document.querySelector('.cart')

function generateShopContent(){
    return shopEl.innerHTML = shopProductsData.map(product => {
        const {id, name, price, description, img} = product
        return `
        <div id='product-id-${id}' class="item">
            <img width="247" src="${img}" alt="long sleeve">
            <div class="details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i id='decrease-${id}' class="bi bi-dash-lg"></i>
                        <div id='quantity-${id}' class="quantity">0</div>
                        <i id='increase-${id}' class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>    
    `
    }).join('')
}

generateShopContent()

shopProductsData.forEach(product => {
    const {id} = product

    let increaseBtn = document.getElementById(`increase-${id}`)
    let decreaseBtn = document.getElementById(`decrease-${id}`)
    let quantityEl = document.getElementById(`quantity-${id}`)

    increaseBtn.addEventListener('click', ()=> {
        quantityEl.innerText ++
        cartAmount.innerText ++
        updateCartInLocalStorage(id, quantityEl.innerText)
    })

    decreaseBtn.addEventListener('click', () => {
        if (quantityEl.innerText > 0) {
            quantityEl.innerText --
            cartAmount.innerText --
            updateCartInLocalStorage(id, quantityEl.innerText)
        }   
    })
})

function updateCartInLocalStorage(productId, quantity) {
    const cart = getCartFromLocalStorage()
    cart[productId] = parseInt(quantity)
    localStorage.setItem('cart', JSON.stringify(cart))
}

function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : {}
}

cartEl.addEventListener('click', () => {
    window.location.href = 'cart.html'
})



// modal offer popup
const modalEl = document.querySelector('.modal')
const inputEl = document.querySelector('.input')
const closeBtn = document.querySelector('.close-btn')

function displayModal() {
    modalEl.classList.add('visible')
}

function hideModal() {
    modalEl.classList.remove('visible')
}

window.onload = () => {
    setTimeout(displayModal, 2000)
}

closeBtn.addEventListener('click', hideModal)

inputEl.addEventListener('click', () => {
    inputEl.placeholder = ''
})

inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault()
        sendDiscount()
    }
})

function sendDiscount() {
    const divContent = document.createElement('div')
    divContent.classList.add('.content')
    

   const div = document.createElement('div')
   div.classList.add('close-btn')
   const icon = document.createElement('i')
   icon.classList.add('bi', 'bi-x')
   div.appendChild(icon)

   const h3 = document.createElement('h3')
   h3.innerText = 'Thank you! Your discount will arrive shortly!'
   divContent.appendChild(h3)
   divContent.appendChild(div)
   
   modalEl.innerHTML = ''
   modalEl.appendChild(divContent)
   document.querySelector('.close-btn').addEventListener('click', hideModal)
}