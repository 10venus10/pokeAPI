let button = document.querySelector("#submitButton");


async function getData(event){
    event.preventDefault();
    
let textInput = document.querySelector('#inputBar').value

let url= `https://pokeapi.co/api/v2/pokemon/${textInput}`

fetch(url)
.then(res =>{
    return res.json();
})
.then(res => {
    console.log("Success", res)
    const pokePic = document.querySelector('#pokemonImg')
    pokePic.src = res.sprites.front_default
    const pokemonHeader = document.querySelector('#pokemonName')
    pokemonHeader.innerText = res.name
    const pokeIdNum = document.querySelector('#pokemonIdNumber')
    pokeIdNum.innerText = ("ID: ") + res.id
    const pokeType = document.querySelector('#pokemonType')
    pokeType.innerText = ('Type: ') + res.types[0].type.name
    const pokeHit = document.querySelector('#pokemonFirstMove')
    pokeHit.innerText = ('Attack: ') + res.moves[0].move.name
    
})
.catch(err => {
    console.log("error!", err)
    alert("Pokemon Not Found")
})
}

button.addEventListener('click', getData)
//to get image- res.sprites

/*style in css then use javascript to tell it where to place the script*/