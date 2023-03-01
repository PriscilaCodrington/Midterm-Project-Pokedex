

//Array of objects (It has all the pokemons)

const pokemonsarray = [
  {
    thumbnail: 'assets/001.png',
    id:'N°01' ,
    name: 'bulbasaur',
    type: ['plant', 'poison'],
  },
  {
    thumbnail: 'assets/002.png',
    id:'N°02',
    name: 'charmander',
    type: ['fire'],
  },
  {
    thumbnail: 'assets/003.png',
    id:'N°03',
    name: 'caterpie',
    type: ['bug'],
  },
  {
    thumbnail: 'assets/004.png',
    id:'N°04',
    name: 'kaluna',
    type: ['bug', 'poison'],
  },
  {
    thumbnail: 'assets/005.png',
    id:'N°05',
    name: 'ratata',
    type: ['plant'],
  },
  {
    thumbnail: 'assets/006.png',
    id:'N°06',
    name: 'pikachu',
    type: ['electrical'],
  },
  {
    thumbnail: 'assets/007.png',
    id:'N°07',
    name: 'vulpix',
    type: ['fire', 'plant'],
  },
  {
    thumbnail: 'assets/008.png',
    id:'N°08',
    name: 'jigglypuff',
    type: ['normal', 'fairy'],
  },
  {
    thumbnail: 'assets/009.png',
    id:'N°09',
    name: 'ice',
    type: ['bug'],
  },
  {
    thumbnail: 'assets/010.png',
    id:'N°10',
    name: 'ground',
    type: ['normal'],
  },
  {
    thumbnail: 'assets/011.png',
    id:'N°11',
    name: 'ghost',
    type: ['poison'],
  },
  {
    thumbnail: 'assets/012.png',
    id:'N°12',
    name: 'deer',
    type: ['fire'],
  },
  {
    thumbnail: 'assets/013.png',
    id:'N°13',
    name: 'dark',
    type: ['fairy'],
  },
  {
    thumbnail: 'assets/014.png',
    id:'N°14',
    name: 'stell',
    type: ['normal', 'electrical'],
  },
  {
    thumbnail: 'assets/015.png',
    id:'N°15',
    name: 'cat',
    type: ['fire'],
  },
  {
    thumbnail: 'assets/016.png',
    id:'N°16',
    name: 'rock',
    type: ['fairy', 'poison'],
  }
]


//Function to iterated the array
pokemonsarray.forEach(pokemon => {singlePokemonCard(pokemon)
    })
//Function to print a Card
function singlePokemonCard (pokemon) {

    let card = document.createElement("div");
    document.querySelector(".all-pokemons-cards").appendChild(card);
    card.className = "poke-card";

    let pokeImg = document.createElement("img");
    pokeImg.src = pokemon.thumbnail;
    pokeImg.className = "poke-img";
    card.appendChild(pokeImg);


    let pokeId = document.createElement("p");
    pokeId.innerHTML= pokemon.id;
    card.appendChild(pokeId);

    let pokeName = document.createElement("h2");
    pokeName.innerHTML= pokemon.name;
    card.appendChild(pokeName);
  
    printTypes(pokemon.type, card);

    console.log(pokemon.type);

}

// Print Type and Adding a new class for every span Function

function printTypes(typesElement, card){

    for(let i=0; i<typesElement.length; i++){
        let pokeType = document.createElement("span");
        pokeType.innerHTML = typesElement[i];
        pokeType.className = "poke-type";
        card.appendChild(pokeType);
    
    switch(typesElement[i]){
      case 'fairy':
        pokeType.classList.add('fairy');
      break;
      case 'poison':
        pokeType.classList.add('poison');
      break;
      case 'fire':
        pokeType.classList.add('fire');
      break;
      case 'normal':
        pokeType.classList.add('normal');
      break;
      case 'electrical':
        pokeType.classList.add('electrical'); 
      break;
      case 'plant':
        pokeType.classList.add('plant'); 
      break;
      case 'bug':
        pokeType.classList.add('bug'); 
      break;
    }
}
}

