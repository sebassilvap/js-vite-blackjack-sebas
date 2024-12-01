//? ===========================
//? FUNCIÓN PARA CREAR CARTA
//? ===========================

/**
 * Esta función inserta las cartas del deck en el div de cada jugador
 * @param {Array<HTMLCollection>} divCartasJugadores Es un arreglo de los contenedores div que muestran las cartas para el jugador y la computadora
 * @param {String} carta es el String representativo de la carta del deck
 * @param {Number} turno turno: 0 = primer jugador, último = la computadora 
 * @returns {Number} Retorna los puntos del jugador indicado en el turno
 */
export const crearCarta = (divCartasJugadores, carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta); // añadimos carta al contenedor de computadora
};