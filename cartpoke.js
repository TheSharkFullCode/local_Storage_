// alert("hello")
// import { pokemons } from "./pokemon.js";

// console.log("🚀 ~ file: cardpoke.js:25 ~ pokemons:", pokemons)

let addBuycard = JSON.parse(localStorage.getItem('buysCards'))
console.log("🚀 ~ file: cardpoke.js:27 ~ addBuycard:", addBuycard)



let getBuycartd = addBuycard.map((carrito)=>{
    const cardsPokemons = document.createElement("div");
    cardsPokemons.style.width = '150px';
    cardsPokemons.style.height = "200px";
    cardsPokemons.style.border = 'solid blue';
    cardsPokemons.style.display = "flex"
    cardsPokemons.style.flexDirection = "column"
    cardsPokemons.style.justifyContent = 'space-around'
    document.body.appendChild(cardsPokemons)

    const imgpokemon = document.createElement("img");
    imgpokemon.src = carrito.img;

    const buttons = document.createElement("button");
    buttons.textContent="Delete cart";
    buttons.style.width = '100px'
    cardsPokemons.appendChild(buttons);

    cardsPokemons.appendChild(imgpokemon)

        //devuelve el id del pokemon en la pos
    
    console.log("🚀 ~ file: cartpoke.js:15 ~ getBuycartd ~ addBuycard:", carrito)
})









