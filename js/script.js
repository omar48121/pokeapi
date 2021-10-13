let input = document.getElementById("number");

const consultar = () => {

    for (let i = 0; i < input.value; i++) {
        let rndNumber = () => Math.floor(Math.random() * 100 ) + 1;

        fetch('https://pokeapi.co/api/v2/pokemon/' + rndNumber())
        .then(response => response.json())
        .then(data => {

        let pokemon = {
            "imagen": data.sprites.front_default,
            "nombre": data.name,
            "habilidad": data.abilities[1].ability.name,
            "movimiento": data.moves[1].move.name
        }
    
        let card = `<div class="card1">
                        <img width="300px" class="imagen" src="${pokemon.imagen}" alt="">
                        <h5 class="nombre">Nombre: ${pokemon.nombre}</h5>
                        <h5 class="habilidad">Habilidad: ${pokemon.habilidad}</h5>
                        <h5 class="movimiento"> Movimiento: ${pokemon.movimiento}</h5>
                    </div>`;

        document.querySelector(".root").innerHTML += card;
    })
}
}

