//? ==============
//? IMPORTACIONES
//? ==============
import { acumularPuntos, crearCarta, determinarGanador, pedirCarta } from './';

//? ========================
//? TURNO DE LA COMPUTADORA
//? ========================

/**
 * El turno de la computadora se dispara cuando: A) el jugador pierde, ó llega a 21 B) cuando aplastamos el botón "Detener"
 * @param {Array<HTMLCollection>} divCartasJugadores Es un arreglo de los contenedores div que muestran las cartas para el jugador y la computadora
 * @param {Array<HTMLCollection>} puntosHTML es un arreglo de las etiquetas small del HTML que muestran los puntos del jugador y de la computadora
 * @param {Array<Number>} puntosJugadores es un arreglo de valores numéricos donde se tiene el score de los jugadores. El último elemento es el score de la computadora
 * @param {Array<String>} deck es un arreglo con las cartas
 * @returns {undefined} no retorna nada, sirve para cálculos internos
 */
export const turnoComputadora = (divCartasJugadores, puntosHTML, puntosJugadores, deck) => {
	let puntosMinimos = puntosJugadores[0];
    let puntosComputadora = 0;
	
    // - necesito ejecutar el ciclo al menos 1 vez (do-while)
    do {
        // --------------------------
        // MOSTRAR PUNTOS DE JUGADOR
        // --------------------------
        const carta = pedirCarta( deck ); // computadora pide carta
        puntosComputadora = acumularPuntos(puntosHTML, puntosJugadores, carta, puntosJugadores.length - 1); // última posición de la computadora

		// -----------------------------------
        // CREAR CARTAS EN EL DIV COMPUTADORA
        // -----------------------------------
        crearCarta(divCartasJugadores, carta, puntosJugadores.length - 1);
    } while (
        puntosComputadora < puntosMinimos && // puntosMinimos = los que obtuvo el jugador
        puntosMinimos <= 21
    );

    // - mostrar quien ganó
    determinarGanador( puntosJugadores );
};