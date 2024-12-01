/**
* NOMENCLATURA DE LAS CARTAS
* 2C = Two of Clubs (Tréboles)
* 2D = Two of Diamonds (Diamantes)
* 2H = Two of Hearts (Corazones)
* 2S = Two of Spades (Espadas)
*/


//? ===============
//? IMPORTACIONES
//? ===============
import _ from 'underscore'; // importar todo del paquete de underscore y llamarlo _

// * formas de importación
//import { crearDeck as crearNuevoDeck } from './usecases/crear-deck'; // se puede poner otro nombre a la exportación
//import cualquierNombre from './usecases/crear-deck'; // de la exportación por efecto

// * vamos a cambiar todo esto por un archivo de barrido
/*
import { crearDeck } from './usecases/crear-deck';
import { pedirCarta } from './usecases/pedir-carta';
import { valorCarta } from './usecases/valor-carta';
*/

// * importación con archivo de barrido
import { acumularPuntos, crearCarta, crearDeck, pedirCarta, turnoComputadora } from './usecases'


//? =======================
//? VARIABLES DEL PROGRAMA
//? =======================
let   deck       = [];
const tipos      = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

// - el último jugador siempre va a ser la computadora
let puntosJugadores = [];


//? ======================
//? REFERENCIAS DEL HTML
//? ======================
const btnPedir   = document.querySelector('#btnPedir'),
      btnNuevo   = document.querySelector('#btnNuevo'),
      btnDetener = document.querySelector('#btnDetener');

const divCartasJugadores = document.querySelectorAll('.divCartas'), // clase contiene el div de los jugadores
      puntosHTML         = document.querySelectorAll('small');

	  
//? ==================================
//? FUNCIÓN PARA INICIALIZAR EL JUEGO
//? ==================================
export const inicializarJuego = (numJugadores = 2) => {
    // por defecto 1 jugador

    deck = crearDeck( tipos, especiales );
    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0); // al final añadimos a la computadora
    }

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
};
	  
//? ===================
//? BOTÓN: PEDIR CARTA
//? ===================
btnPedir.addEventListener('click', () => {
    // --------------------------
    // MOSTRAR PUNTOS DE JUGADOR
    // --------------------------
    const carta = pedirCarta( deck );
    const puntosJugador = acumularPuntos(puntosHTML, puntosJugadores, carta, 0);

    // -------------------------------
    // CREAR CARTAS EN EL DIV JUGADOR
    // -------------------------------
    // - elemento a crear en el html, ejemplo:
    // <img class='carta' src='assets/cartas/2C.png' />
    crearCarta(divCartasJugadores, carta, 0);

    // ----------------------------------------------------------
    // EVALUAR SI EL JUGADOR TIENE MÁS DE 21 PUNTOS (HA PERDIDO)
    // ----------------------------------------------------------
    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');

        // - bloquear botones pedir y detener
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        // - turno de la computadora
        turnoComputadora(divCartasJugadores, puntosHTML, puntosJugadores, deck);
    } else if (puntosJugador === 21) {
        console.warn('21, genial!');

        // - bloquear botones pedir y detener
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        // - turno de la computadora
        turnoComputadora(divCartasJugadores, puntosHTML, puntosJugadores, deck);
    }
});



//? ================
//? BOTÓN: DETENER
//? ================
btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    // - llamar al turno de la computadora
    turnoComputadora(divCartasJugadores, puntosHTML, puntosJugadores, deck); // posición del 1er jugador
});



//? ====================
//? BOTÓN: NUEVO JUEGO
//? ====================
// - básicamente este botón va a resetear todo

btnNuevo.addEventListener('click', () => {
    console.clear(); // para limpiar la consola
    inicializarJuego();
});
