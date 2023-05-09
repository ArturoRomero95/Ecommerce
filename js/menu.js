document.getElementById("Tienda").innerText= "Chenson's Comics"

let inicio = document.getElementById("inicio");
let catalogo = document.getElementById("catalogo");
let votaciones = document.getElementById("votaciones");

inicio.innerHTML = "<li>Inicio</li>"
catalogo.innerHTML = "<li>Comics Disponibles</li>"
votaciones.innerHTML = "<li>Buscador y votaciones</li>"

const btnCart = document.querySelector('.containerCartIcon')

const containerCartProduct = document.querySelector('.containerCartProducts')

btnCart.addEventListener('click', () => {
    containerCartProduct.classList.toggle('hiddenCart')
})


const cartInfo = document.querySelector('.cartProduct')
const rowProduct = document.querySelector('.rowProduct')

const productsList = document.querySelector('.comicContainer')

let allProducts = []

const valorTotal = document.querySelector('.totalPagar')

const countProducts = document.querySelector('#contadorProductos')

const cartEmpty = document.querySelector('.cartEmpty');
const cartTotal = document.querySelector('.cartTotal');


productsList.addEventListener('click', e => {
    if(e.target.classList.contains('botonPop')){
        const product = e.target.parentElement

        const infoProduct ={
            quantity: 1,
            title: product.querySelector('.titulo').textContent,
            price: product.querySelector('.costo').textContent,
        }
        
        const exists = allProducts.some(product => product.title === infoProduct.title)

        if (exists){
            const products = allProducts.map(product =>{
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                } else{
                    return product;
                }
            });
            allProducts = [...products];
        }else {
            allProducts = [...allProducts, infoProduct];
        }    

        showHTML();
    }

});

rowProduct.addEventListener('click', (e) => {
    if(e.target.classList.contains('iconClose')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );
        
        showHTML()
    }
});


const showHTML = () =>{

    if(!allProducts.length){
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else{
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }


    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
            <div class="cartProduct">

                <div class="infoCartProduct">
            
                    <span class="cantidadProductoCarrito">${product.quantity}</span>

                    <p class="tituloProductoCarrito">${product.title}</p>

                    <span class="precioProductoCarrito">${product.price}</span>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="iconClose">

                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />

                </svg>

            </div>
        `

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));

        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

}

let buttonPop = function (e) {
    Swal.fire(
        '¡LISTO!',
        '¡Agregado a tu carrito!',
        'success'
      )
}

let botonPop0 = document.getElementById("Boton0");
botonPop0.addEventListener("click", buttonPop);

let botonPop1 = document.getElementById("Boton1");
botonPop1.addEventListener("click", buttonPop);

let botonPop2 = document.getElementById("Boton2");
botonPop2.addEventListener("click", buttonPop);

let botonPop3 = document.getElementById("Boton3");
botonPop3.addEventListener("click", buttonPop);

let botonPop4 = document.getElementById("Boton4");
botonPop4.addEventListener("click", buttonPop);

let botonPop5 = document.getElementById("Boton5");
botonPop5.addEventListener("click", buttonPop);

let botonPop6 = document.getElementById("Boton6");
botonPop6.addEventListener("click", buttonPop);

let botonPop7 = document.getElementById("Boton7");
botonPop7.addEventListener("click", buttonPop);

let botonPop8 = document.getElementById("Boton8");
botonPop8.addEventListener("click", buttonPop);

let botonPop9 = document.getElementById("Boton9");
botonPop9.addEventListener("click", buttonPop);