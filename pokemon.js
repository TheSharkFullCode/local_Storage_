export const pokemons = [
  { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
  { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
  { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
  { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
  { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
  { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
  { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
  { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
  { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
  { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
  { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
  { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
  { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
  { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
  { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
  { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
];

// const pokeMon = pokemons.map((cardpokemon)=>{
//     const img = document.createElement("img");
//     img.src = cardpokemon.img
//     document.body.appendChild(img);


// });
let arrayObj = [];
for (let i = 0; i < pokemons.length; i++) {
    const elementpokemon = pokemons[i];
    
    
    const cardsPokemons = document.createElement("div");
    cardsPokemons.style.width = '150px';
    cardsPokemons.style.height = "200px";
    cardsPokemons.style.border = 'solid blue';
    cardsPokemons.style.display = "flex"
    cardsPokemons.style.flexDirection = "column"
    cardsPokemons.style.justifyContent = 'space-around'
    document.body.appendChild(cardsPokemons)

    const imgpokemon = document.createElement("img");
    imgpokemon.src = elementpokemon.img;

    const buttons = document.createElement("button");
    buttons.textContent="agregar compra";
    buttons.style.width = '100px'
    cardsPokemons.appendChild(buttons);

    cardsPokemons.appendChild(imgpokemon)

    buttons.addEventListener('click',()=>{
        // console.log("🚀 ~ file: pokemon.js:34 ~ elementpokemon:", elementpokemon)
        // localStorage.setItem("buysCards",JSON.stringify(elementpokemon));
        //a mi nuevo array de objetos de pokemos, le aplico una porpiedad unshift y entre(), el objeto a agregar: elementpokemon
        //y voy a convertir a cadena json, mi array de objetos que antes estaba vacio.
        arrayObj.unshift(elementpokemon)

        localStorage.setItem("buysCards",JSON.stringify(arrayObj));
      })
    }
   

// const pokeJSON = JSON.stringify(pokemons)
// console.log("🚀 ~ file: pokemon.js:61 ~ pokeJSON:", pokeJSON)


// const pokeMon2 = pokemons.forEach((cardpokemon)=>{
//     const img = document.createElement("img");
//     img.src = cardpokemon.img
//     document.body.appendChild(img);


// });

   















