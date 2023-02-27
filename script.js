

//Array of objects (It has all the pokemons)

const pokemonsarray = [
  {
    thumbnail: 'media/001.png',
    id:'N°01' ,
    name: 'bulbasaur',
    type: ['plant', 'poison'],
  },
  {
    thumbnail: 'media/002.png',
    id:'N°02',
    name: 'charmander',
    type: ['fire'],
  },
  {
    thumbnail: 'media/003.png',
    id:'N°03',
    name: 'caterpie',
    type: ['bug'],
  },
  {
    thumbnail: 'media/004.png',
    id:'N°04',
    name: 'kaluna',
    type: ['bug', 'poison'],
  },
  {
    thumbnail: 'media/005.png',
    id:'N°05',
    name: 'ratata',
    type: ['plant'],
  },
  {
    thumbnail: 'media/006.png',
    id:'N°06',
    name: 'pikachu',
    type: ['normal'],
  },
  {
    thumbnail: 'media/007.png',
    id:'N°07',
    name: 'vulpix',
    type: ['fire', 'plant'],
  },
  {
    thumbnail: 'media/008.png',
    id:'N°08',
    name: 'jigglypuff',
    type: ['normal', 'fairy'],
  },
  {
    thumbnail: 'media/009.png',
    id:'N°09',
    name: 'ice',
    type: ['bug'],
  },
  {
    thumbnail: 'media/010.png',
    id:'N°10',
    name: 'ground',
    type: ['electrical'],
  },
  {
    thumbnail: 'media/011.png',
    id:'N°11',
    name: 'ghost',
    type: ['poison'],
  },
  {
    thumbnail: 'media/012.png',
    id:'N°12',
    name: 'deer',
    type: ['fire'],
  },
  {
    thumbnail: 'media/013.png',
    id:'N°13',
    name: 'dark',
    type: ['fairy'],
  },
  {
    thumbnail: 'media/014.png',
    id:'N°14',
    name: 'stell',
    type: ['normal', 'electrical'],
  },
  {
    thumbnail: 'media/015.png',
    id:'N°15',
    name: 'cat',
    type: ['fire'],
  },
  {
    thumbnail: 'media/016.png',
    id:'N°16',
    name: 'rock',
    type: ['fairy', 'poison'],
  }
]



pokemonsarray.forEach(pokemon => {singlePokemonCard(pokemon)})

function singlePokemonCard (pokemon) {

    let card = document.createElement("div");
    document.querySelector(".all-pokemons-cards").appendChild(card);
    card.className = "pokeCard";

    let pokeImg = document.createElement("img");
    pokeImg.src = pokemon.thumbnail;
    pokeImg.className = "pokeImg";
    document.querySelector(".pokeCard").appendChild(pokeImg);

    let pokeId = document.createElement("p");
    pokeId.innerHTML= pokemon.id;
    document.querySelector(".pokeCard").appendChild(pokeId);

    let pokeName = document.createElement("h2");
    pokeName.innerHTML= pokemon.name;
    document.querySelector(".pokeCard").appendChild(pokeName);



}


/*thumbnail: 'media/001.png',
    id:'N°01' ,
    name: 'bulbasaur',
    type: ['plant', 'poison'], */