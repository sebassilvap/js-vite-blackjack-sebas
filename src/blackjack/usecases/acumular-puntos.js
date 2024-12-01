//? ==============
//? IMPORTACIONES
//? ==============
import { valorCarta } from './';


//? ========================
//? FUNCIÓN ACUMULAR PUNTOS
//? ========================

/**
 * Esta función acumula los puntos sumados tras cada carta por parte del jugador y la computadora
 * @param {Array<HTMLCollection>} puntosHTML es un arreglo de las etiquetas small del HTML que muestran los puntos del jugador y de la computadora
 * @param {Array<Number>} puntosJugadores es un arreglo de valores numéricos donde se tiene el score de los jugadores. El último elemento es el score de la computadora
 * @param {String} carta es el String representativo de la carta del deck
 * @param {Number} turno turno: 0 = primer jugador, último = la computadora
 * @returns {Number} Retorna los puntos del jugador indicado en el turno
 */
export const acumularPuntos = (puntosHTML, puntosJugadores, carta, turno) => {
    // - acumular puntos pero en la respectiva posición del arreglo
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
	
    return puntosJugadores[turno];
};