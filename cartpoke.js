// alert("hello")
// import { pokemons } from "./pokemon.js";

// console.log("🚀 ~ file: cardpoke.js:25 ~ pokemons:", pokemons)

// let addBuycard = JSON.parse(localStorage.getItem('buysCards'))
// console.log("🚀 ~ file: cardpoke.js:27 ~ addBuycard:", addBuycard)



// let getBuycartd = addBuycard.map((carrito)=>{
//     const cardsPokemons = document.createElement("div");
//     cardsPokemons.style.width = '150px';
//     cardsPokemons.style.height = "200px";
//     cardsPokemons.style.border = 'solid blue';
//     cardsPokemons.style.display = "flex"
//     cardsPokemons.style.flexDirection = "column"
//     cardsPokemons.style.justifyContent = 'space-around'
//     document.body.appendChild(cardsPokemons)

//     const imgpokemon = document.createElement("img");
//     imgpokemon.src = carrito.img;

//     const buttons = document.createElement("button");
//     buttons.textContent="Delete cart";
//     buttons.style.width = '100px'
//     cardsPokemons.appendChild(buttons);

//     cardsPokemons.appendChild(imgpokemon)

//         //devuelve el id del pokemon en la pos
    
//     console.log("🚀 ~ file: cartpoke.js:15 ~ getBuycartd ~ addBuycard:", carrito)
// })

let addBuycard = JSON.parse(localStorage.getItem('buysCards'));

// Verificar si el carrito de compra está vacío o no existe
do {
  if (addBuycard.length === 0 || !addBuycard) {
    alert('El carrito de compra está vacío');
    break;
  }

  let getBuycartd = addBuycard.map((carrito, index) => {

    console.log("🚀 ~ file: cartpoke.js:46 ~ getBuycartd ~ index:", index)
    
    const cardContainer = document.createElement('div');
    cardContainer.style.marginBottom = '10px';
    cardContainer.style.borderRadius = '5px';
    cardContainer.style.display = 'flex';
    cardContainer.style.justifyContent = 'space-between';

    const cardsPokemons = document.createElement('div');
    cardsPokemons.style.width = '150px';
    cardsPokemons.style.height = '200px';
    cardsPokemons.style.border = 'solid #F1C40F';
    cardsPokemons.style.display = 'flex';
    cardsPokemons.style.flexDirection = 'column';
    cardsPokemons.style.justifyContent = 'space-around';

    const imgpokemon = document.createElement('img');
    imgpokemon.src = carrito.img;

    const buttons = document.createElement('button');
    buttons.textContent = 'Eliminar';
    buttons.style.width = '100px';

    // Añadir evento click al botón para eliminar el objeto del localStorage
    

      buttons.addEventListener('click', () => {
        
        const filteredArray = addBuycard.filter((item) => item.id !== carrito.id);

        localStorage.setItem('buysCards', JSON.stringify(filteredArray));

        cardContainer.remove();

      });

    

    cardsPokemons.appendChild(buttons);
    cardsPokemons.appendChild(imgpokemon);
    cardContainer.appendChild(cardsPokemons);
    document.body.appendChild(cardContainer);

    console.log('Elemento del carrito de compra:', carrito);
  });
  console.log("🚀 ~ file: cartpoke.js:85 ~ getBuycartd ~ getBuycartd:", getBuycartd)

  console.log("🚀 ~ file: cartpoke.js:78 ~ getBuycartd ~ getBuycartd:", getBuycartd);
  
} while (false);







