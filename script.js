
var pokemon;

// async/await
// Javascript object notation is JSON
async function calling(){
    let results = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log(results)
    let res = await results.json()
    console.log(pokemon)
    pokemon = res.sprites

    document.querySelector('.image').src = res.sprites.front_shiny
    document.querySelector('p').innerText = res.name

}
function over(tag){
    tag.src = pokemon.back_shiny
}

function out(tag){
    tag.src = pokemon.front_shiny
}

calling()


async function getPokemon(){
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch.value}`)
    var _data = await response.json()
    console.log(_data)
    poke.innerHTML = `
    <h1> ${_data.name} </h1>
    <img src="${_data.sprites.front_default}" alt="">
    `
}

