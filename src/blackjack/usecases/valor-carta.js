//? ========================================
//? FUNCIÓN PARA SABER EL VALOR DE LA CARTA
//? ========================================

/**
 * Determina el valor numérico de la carta para el puntaje
 * @param {String} carta
 * @returns {Number} valor de la carta para el juego
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor)
        ? valor === 'A'
            ? 11
            : 10 // si es J, Q, K, A
        : valor * 1; // cuando es una carta de 2 al 10
};