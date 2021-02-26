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

        <span style="   -webkit-text-stroke: 1px black;
                        color: rgb(255, 203, 5);
                        font-size: 40px;"> Um ${Nome} selvagem apareceu na sua frente! 
        </span>

        <div style="padding-top: 10px">
        <img src='${data.sprites.other.dream_world.front_default}' height=300px alt="Opa! Esse pokemón ainda não está na minha pokedex :(")>
        </div>
        <div>
        <span style="   color: white;
                        line-height: 5vw;
                        -webkit-text-stroke: 3px black;
                        font-size: 100px;"> ${Grito} ${Grito}!!! 
        </span>
        </div>
        `
        
    })
    .catch (erro => {
        console.log(erro);
        let elemento = document.getElementById ('meu_pokemon');
        elemento.innerHTML = `

        <span style="   -webkit-text-stroke: 1px black;
                        color: rgb(255, 203, 5);
                        font-size: 70px;"> Opa! Esse pokemón ainda não está na minha pokedex :( 
        </span>`
    })
    
}


