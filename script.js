let pokemon
let poke_nome

function Selecionando_pokemon (event){
    event.preventDefault(); //Para que a página não se atualizar quando é feito o submit
    let pokemon_selecionado = document.querySelector ("#poke_input");
    poke_nome = pokemon_selecionado.value;
    pokemon_selecionado.value = "";


    pokemon = `https://pokeapi.co/api/v2/pokemon/${poke_nome}`
let Alldata
let Nome
let Pedaço_do_Nome
let Grito //A coisa mais divertida que já fiz programando




fetch (pokemon)
.then (resposta => resposta.json())
.then (data =>{
    Alldata = data; //Aqui vou salvar tudo por se quero ver depois, a variavel teve que ser definida antes
    Nome = data.forms[0].name;
    Pedaço_do_Nome = Nome.length/1.5
    Grito = Nome.slice(0, Pedaço_do_Nome);
    let elemento = document.getElementById ('meu_pokemon');
    elemento.innerHTML = `
    <p>Um ${Nome} selvagem apareceu na sua frente</p>
    <img src='${data.sprites.other.dream_world.front_default}' width=300px>
    <p>${Grito} ${Grito}!!!</p> 
    `
    
})
.catch (erro => console.log(erro))
}


