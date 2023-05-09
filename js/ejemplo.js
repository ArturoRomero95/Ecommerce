const cartInfo = document.querySelector('.cartProduct')
const rowProduct = document.querySelector('.rowProduct')

const productsList = document.querySelector('.container-items')

let allProducts = []


productsList.addEventListener('click', e => {
    if(e.target.classList.contains('.btn-add-cart')){
        const product = e.target.parentElement

        const infoProduct ={
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        }
        
        allProducts = [...allProducts, infoProduct]
    }

    console.log(allProducts)

})