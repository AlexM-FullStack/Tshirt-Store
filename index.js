const shopEl = document.getElementById('shop')
const cartAmount = document.querySelector('.cartAmount')

let shopProductsData = [
    {
        id: 1,
        name: 'American T',
        price: 25,
        description: 'USA flag t shirt',
        img: 'images/american.png'
    },
    {
        id: 2,
        name: 'Mountain Bear',
        price: 25,
        description: 'Mountain landscape with bear tshirt',
        img: 'images/bear.png'

    }, 
    {
        id: 3,
        name: 'Guitar T',
        price: 31,
        description: 'Guitar logo tshirt',
        img: 'images/guitar.png'
    }, 
    {
        id: 4,
        name: 'Sullen T',
        price: 27,
        description: 'Classic fit navy tshirt',
        img: 'images/flying.png'
    }]

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
    })

    decreaseBtn.addEventListener('click', () => {
        if (quantityEl.innerText > 0) {
            quantityEl.innerText --
            cartAmount.innerText --
        }
       
    })
})