//? =============================
//? FUNCIÓN PARA TOMAR UNA CARTA
//? =============================
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} etorna la carta del deck
 */
export const pedirCarta = ( deck ) => {
    // - validación
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck'; 
    }

    return deck.pop(); 
};