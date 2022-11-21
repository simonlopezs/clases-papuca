import { pokemones } from "./pokemones.js";

const pokemonesElegidos = [];
const N = 8;

function elegir() {
    while (pokemonesElegidos.length < N) {
        const indice = Math.round(Math.random() * pokemones.length);
        const pokemon = pokemones[indice];
        if (!pokemonesElegidos.find((p) => p.id === pokemon.id)) {
            pokemonesElegidos.push(pokemon);
        }
    }
}

function duplicar() {
    pokemonesElegidos.push(...pokemonesElegidos);
}

function revolver() {
    pokemonesElegidos.sort(() => Math.random() - 0.5);
}

function crearTarjetas() {
    const cuadricula = document.querySelector("#cuadricula");
    pokemonesElegidos.forEach((pokemon) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("item");
        const img = document.createElement("img");
        img.src = pokemon.imagen;
        tarjeta.appendChild(img);
        cuadricula.appendChild(tarjeta);
    })
}


elegir();
duplicar();
revolver();
crearTarjetas();



console.log(pokemonesElegidos);