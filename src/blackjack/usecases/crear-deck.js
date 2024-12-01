
//? ===============
//? IMPORTACIONES
//? ===============
import _ from 'underscore';


//? ========
//? EJEMPLO
//? ========
const miNombre = 'Sebastián';


//? =====================================
//? FUNCIÓN PARA CREAR EL DECK DE CARTAS
//? =====================================

// ----------------------------
// documentación de la función
// ----------------------------
/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
	
	// --------------------------------------
	// evaluación de los datos de la función
	// --------------------------------------
	if ( !tiposDeCarta || tiposDeCarta.length === 0 )
		throw new Error('tiposDeCarta es obligatorio como un arreglo de String');
	
	if ( !tiposEspeciales || tiposEspeciales.length === 0 )
		throw new Error('tiposEspeciales es obligatorio como un arreglo de String');
	
    // ----------------------
    // reinicializar el deck
    // ----------------------
    let deck = [];

    // ------------------------------------------------------
    // crear con for las cartas del 2 al 10 para C, D, H, S
    // ------------------------------------------------------
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    // ------------------------------------------------
    // crear cartas restantes: AS, J, Q, K con C,D,H,S
    // ------------------------------------------------

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    // ------------------------------------
    // barajar el deck - ponerlo al azar
    // ------------------------------------
    // - el problema hasta aquí es que el deck de cartas me viene ordenado
    // - necesito una función para barajar (poner las cartas al azar)
    // - librería underscore de JS (MUY FAMOSA)
    // - ofrece muchas funciones que JS debería incorporar
    // - vamos a utilizar el _.shuffle() => recibe un arreglo y lo regresa al azar
    // - https://underscorejs.org/
    // - podemos usarlo de varias maneras:
    //	 --- CDN: host de contenido => utilizar la libería de manera externa (como hacemos con el bootstrap)
    //   --- descargar y utilizar localmente => //! usar la Product Version

    return _.shuffle(deck); // retornar el deck ya barajeado
};


// * solo como ejemplo
export default miNombre; // exportación por defecto - sólamente 1