//? ==================================================
//? FUNCIÓN PARA MOSTRAR QUIÉN GANA / PIERDE / EMPATA
//? ==================================================
// - esto lo vamos a ejecutar en un hilo diferente
// - caso contrario primero vemos el alert y luego vemos las cartas de resultado
// - lo podemos hacer (NO RECOMENDABLE) => con un setTimeout

/**
 * Esta función se ejecuta en un hilo diferente. Analiza quien gana y presenta el resultado en un alert.
 * @param {Array<Number>} puntosJugadores es un arreglo de valores numéricos donde se tiene el score de los jugadores. El último elemento es el score de la computadora
 * @returns {undefined} No retorna nada. Presenta un "alert" indicando quien ha ganado
 */
export const determinarGanador = ( puntosJugadores ) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora GANA!');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora GANA!');
        }
    }, 100); // se ejecuta en 10 ms después de que lo anterior termine
};