class Comic {
    constructor (titulo, anio, autor, formato, precio) {
        this.titulo = titulo;
        this.anio = anio;
        this.autor = autor;
        this.formato = formato; 
        this.precio = precio;
    }    

}


const batmanHush = new Comic("Batman Hush", 2002, "Jeph Loeb", "Cartone", 300);
const vVendetta = new Comic("V for Vendetta", 1980, "Alan Moore", "Pasta blanda", 350);
const deathSuperman = new Comic("Death of Superman", 1992, "Louise Simonson", "Cartone", 200);
const judasContract = new Comic("Judas Contract", 1984, "Marv Wolfman", "Cartone", 200);
const watchmen = new Comic("Watchmen", 1986, "Alan Moore", "Pasta blanda", 350);
const killingJoke = new Comic("Killing Joke", 1988, "Alan Moore", "Cartone", 250);
const lastKnight = new Comic("Last Knight on Earth", 2020, "Scott Snyder", "Pasta blanda", 300);
const darkKnight = new Comic("Dark Knights: Metal", 2018, "Scott Snyder", "Cartone", 300);
const returnSuperman = new Comic("Return of Superman", 1993, "Louise Simonson", "Cartone", 300);
const longHalloween = new Comic("The Long Halloween", 1996, "Jeph Loeb", "Pasta blanda", 350);



const listaComics = [batmanHush, vVendetta, deathSuperman, judasContract, watchmen]



const listaComics2 = [ {titulo: "Batman Hush", anio: 2002, autor: "Jeph Loeb", formato: "Cartone", precio: 300},
                       {titulo: "V for Vendetta", anio: 1980, autor: "Alan Moore", formato: "Pasta blanda", precio: 350},
                       {titulo: "Death of Superman", anio: 1992, autor: "Louis Simonson", formato: "Cartone", precio: 200},
                       {titulo: "Judas Contract", anio: 1984, autor: "Marv Wolfman", formato: "Cartone", precio: 200},
                       {titulo: "Watchmen", anio: 1986 , autor: "Alan Moore", formato: "Pasta blanda", precio: 350},
                       {titulo: "Killing Joke", anio: 1988, autor: "Alan Moore", formato: "Cartone", precio: 250},
                       {titulo: "Last Knight on Earth", anio: 2020, autor: "Scott Snyder", formato: "Pasta blanda", precio: 300},
                       {titulo: "Dark Knights: Metal", anio: 2018, autor: "Scott Snyder", formato: "Cartone", precio: 300},
                       {titulo: "Return of Superman", anio: 1993, autor: "Louise Simonson", formato: "Cartone", precio: 300},
                       {titulo: "The Long Halloween", anio: 1996, autor: "Jeph Loeb", formato: "Pasta blanda", precio: 350},

]

const guardarEnLocalStorage = (clave, valor) => {
    localStorage.setItem(clave,valor);
}

guardarEnLocalStorage("carritoActivo", JSON.stringify(listaComics2))


//BOTON VOTACION

let boton1 = document.getElementById("votacion1");
boton1.onclick = () => { console.log ("Injustice")};

let boton2 = document.getElementById("votacion2");
boton2.onclick = () => { console.log ("KingdomCome")};

let voto = function (e) {
    Swal.fire('Tu voto ha sido registrado')
}
let miBoton = document.getElementById("votacion1");
miBoton.addEventListener("click", voto);

let votoDos = function (e) {
    Swal.fire('Tu voto ha sido registrado')
}
let miBotonDos = document.getElementById("votacion2");
miBotonDos.addEventListener("click", voto);

//FORMULARIO

let miFormulario = document.getElementById("formulario1");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    let formulario = e.target;

    if ((formulario.children[0].value) === "Batman Hush"){

        const filtro0 = listaComics2.filter((el) => el.titulo.includes('Batman Hush'))

        const obj0 = filtro0.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container0 = document.getElementById("resultado")

        const key = filtro0[0].titulo

        container0.innerHTML = 
        `<h1>${filtro0[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
        `
        
    } else if ((formulario.children[0].value) === "V for Vendetta"){

        const filtro1 = listaComics2.filter((el) => el.titulo.includes('V for Vendetta'))
        
        const obj0 = filtro1.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container1 = document.getElementById("resultado")

        const key = filtro1[0].titulo

        container1.innerHTML = 
        `<h1>${filtro1[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[0].value) === "Death of Superman"){

        const filtro2 = listaComics2.filter((el) => el.titulo.includes('Death of Superman'))
        
        const obj0 = filtro2.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container2 = document.getElementById("resultado")

        const key = filtro2[0].titulo

        container2.innerHTML = 
        `<h1>${filtro2[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[0].value) === "Judas Contract"){

        const filtro3 = listaComics2.filter((el) => el.titulo.includes('Judas Contract'))
        
        const obj0 = filtro3.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container3 = document.getElementById("resultado")

        const key = filtro3[0].titulo

        container3.innerHTML = 
        `<h1>${filtro3[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `
 
    } else if ((formulario.children[0].value) === "Watchmen"){

        const filtro4 = listaComics2.filter((el) => el.titulo.includes('Watchmen'))
        
        const obj0 = filtro4.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container4 = document.getElementById("resultado")

        const key = filtro4[0].titulo

        container4.innerHTML = 
        `<h1>${filtro4[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[0].value) === "Killing Joke"){

        const filtro5 = listaComics2.filter((el) => el.titulo.includes('Killing Joke'))
        
        const obj0 = filtro5.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container5 = document.getElementById("resultado")

        const key = filtro5[0].titulo

        container5.innerHTML = 
        `<h1>${filtro5[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[0].value) === "Last Knight"){

        const filtro6 = listaComics2.filter((el) => el.titulo.includes('Last Knight'))
        
        const obj0 = filtro6.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container6 = document.getElementById("resultado")

        const key = filtro6[0].titulo

        container6.innerHTML = 
        `<h1>${filtro6[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[0].value) === "Dark Knights"){

        const filtro7 = listaComics2.filter((el) => el.titulo.includes('Dark Knights'))
        
        const obj0 = filtro7.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container7 = document.getElementById("resultado")

        const key = filtro7[0].titulo

        container7.innerHTML = 
        `<h1>${filtro7[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[0].value) === "Return of Superman"){

        const filtro8 = listaComics2.filter((el) => el.titulo.includes('Return of Superman'))
        
        const obj0 = filtro8.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container8 = document.getElementById("resultado")

        const key = filtro8[0].titulo

        container8.innerHTML = 
        `<h1>${filtro8[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[0].value) === "Long Halloween"){

        const filtro9 = listaComics2.filter((el) => el.titulo.includes('Long Halloween'))
        
        const obj0 = filtro9.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container9 = document.getElementById("resultado")

        const key = filtro9[0].titulo

        container9.innerHTML = 
        `<h1>${filtro9[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         `

    } else if ((formulario.children[1].value) === "Jeph Loeb"){

        const filtro10 = listaComics2.filter((el) => el.autor.includes('Jeph Loeb'))

        const obj0 = filtro10.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container10 = document.getElementById("resultado")

        const key = filtro10[0].titulo
        const key0 = filtro10[1].titulo
        

        container10.innerHTML = 
        `<h1>${filtro10[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         <hr/>

         <h1>${filtro10[1].titulo}</h1>
         <p>${obj0[key0].autor}</p>
         <p>${obj0[key0].anio}</p>
         <p>${obj0[key0].formato}</p>
         <p>${obj0[key0].precio}</p>
         `

    } else if ((formulario.children[1].value) === "Alan Moore"){

        const filtro11 = listaComics2.filter((el) => el.autor.includes('Alan Moore'))

        const obj0 = filtro11.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container11 = document.getElementById("resultado")

        const key = filtro11[0].titulo
        const key0 = filtro11[1].titulo
        const key1 = filtro11[2].titulo
        

        container11.innerHTML = 
        `<h1>${filtro11[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         <hr/>

         <h1>${filtro11[1].titulo}</h1>
         <p>${obj0[key0].autor}</p>
         <p>${obj0[key0].anio}</p>
         <p>${obj0[key0].formato}</p>
         <p>${obj0[key0].precio}</p>
         <hr/>
        
         <h1>${filtro11[2].titulo}</h1>
         <p>${obj0[key1].autor}</p>
         <p>${obj0[key1].anio}</p>
         <p>${obj0[key1].formato}</p>
         <p>${obj0[key1].precio}</p>
         `

    } else if ((formulario.children[1].value) === "Louis Simonson"){

        const filtro12 = listaComics2.filter((el) => el.autor.includes('Simonson'))

        const obj0 = filtro12.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container12 = document.getElementById("resultado")

        const key = filtro12[0].titulo
        const key0 = filtro12[1].titulo
        

        container12.innerHTML = 
        `<h1>${filtro12[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         <hr/>

         <h1>${filtro12[1].titulo}</h1>
         <p>${obj0[key0].autor}</p>
         <p>${obj0[key0].anio}</p>
         <p>${obj0[key0].formato}</p>
         <p>${obj0[key0].precio}</p>
         `

    }else if ((formulario.children[1].value) === "Marv Wolfman"){

        const filtro13 = listaComics2.filter((el) => el.autor.includes('Wolfman'))
        console.log(filtro13)

        const obj0 = filtro13.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container13 = document.getElementById("resultado")

        const key = filtro13[0].titulo        

        container13.innerHTML = 
        `<h1>${filtro13[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         <hr/>
         `

    } else if ((formulario.children[1].value) === "Scott Snyder"){

        const filtro14 = listaComics2.filter((el) => el.autor.includes('Snyder'))
        
        const obj0 = filtro14.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container14 = document.getElementById("resultado")

        const key = filtro14[0].titulo
        const key0 = filtro14[1].titulo
        

        container14.innerHTML = 
        `<h1>${filtro14[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         <hr/>

         <h1>${filtro14[1].titulo}</h1>
         <p>${obj0[key0].autor}</p>
         <p>${obj0[key0].anio}</p>
         <p>${obj0[key0].formato}</p>
         <p>${obj0[key0].precio}</p>
         `

    } else if ((formulario.children[2].value) === "Cartone"){

        const filtro15 = listaComics2.filter((el) => el.formato.includes('Cartone'))

        const obj0 = filtro15.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container15 = document.getElementById("resultado")

        const key = filtro15[0].titulo
        const key0 = filtro15[1].titulo
        const key1 = filtro15[2].titulo
        const key2 = filtro15[3].titulo
        const key3 = filtro15[4].titulo
        const key4 = filtro15[5].titulo
        

        container15.innerHTML = 
        `<h1>${filtro15[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         <hr/>

         <h1>${filtro15[1].titulo}</h1>
         <p>${obj0[key0].autor}</p>
         <p>${obj0[key0].anio}</p>
         <p>${obj0[key0].formato}</p>
         <p>${obj0[key0].precio}</p>
         <hr/>
        
         <h1>${filtro15[2].titulo}</h1>
         <p>${obj0[key1].autor}</p>
         <p>${obj0[key1].anio}</p>
         <p>${obj0[key1].formato}</p>
         <p>${obj0[key1].precio}</p>
         <hr/>

         <h1>${filtro15[3].titulo}</h1>
         <p>${obj0[key2].autor}</p>
         <p>${obj0[key2].anio}</p>
         <p>${obj0[key2].formato}</p>
         <p>${obj0[key2].precio}</p>
         <hr/>

         <h1>${filtro15[4].titulo}</h1>
         <p>${obj0[key3].autor}</p>
         <p>${obj0[key3].anio}</p>
         <p>${obj0[key3].formato}</p>
         <p>${obj0[key3].precio}</p>
         <hr/>

         <h1>${filtro15[5].titulo}</h1>
         <p>${obj0[key4].autor}</p>
         <p>${obj0[key4].anio}</p>
         <p>${obj0[key4].formato}</p>
         <p>${obj0[key4].precio}</p>
         <hr/>
         `

    } else if ((formulario.children[2].value) === "Pasta blanda"){

        const filtro16 = listaComics2.filter((el) => el.formato.includes('Pasta blanda'))

        const obj0 = filtro16.reduce((acc,item) =>{
            acc[item.titulo] = item
            return acc
        }, {})

        let container16 = document.getElementById("resultado")

        const key = filtro16[0].titulo
        const key0 = filtro16[1].titulo
        const key1 = filtro16[2].titulo
        const key2 = filtro16[3].titulo
        

        container16.innerHTML = 
        `<h1>${filtro16[0].titulo}</h1>
         <p>${obj0[key].autor}</p>
         <p>${obj0[key].anio}</p>
         <p>${obj0[key].formato}</p>
         <p>${obj0[key].precio}</p>
         <hr/>

         <h1>${filtro16[1].titulo}</h1>
         <p>${obj0[key0].autor}</p>
         <p>${obj0[key0].anio}</p>
         <p>${obj0[key0].formato}</p>
         <p>${obj0[key0].precio}</p>
         <hr/>
        
         <h1>${filtro16[2].titulo}</h1>
         <p>${obj0[key1].autor}</p>
         <p>${obj0[key1].anio}</p>
         <p>${obj0[key1].formato}</p>
         <p>${obj0[key1].precio}</p>
         <hr/>

         <h1>${filtro16[3].titulo}</h1>
         <p>${obj0[key2].autor}</p>
         <p>${obj0[key2].anio}</p>
         <p>${obj0[key2].formato}</p>
         <p>${obj0[key2].precio}</p>
         `

    }

}