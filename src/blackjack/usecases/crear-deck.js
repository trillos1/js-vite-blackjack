import _ from 'underscore';

/**
 * Esta funcion crear un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns  {Array<String>} retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length===0) 
    throw new Error('Tiposdecarta es obligatorio como arreglo de string')
    if (!tiposEspeciales || tiposEspeciales.length===0) 
    throw new Error('tiposespeciales es obligatorio como arreglo de string')
   
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    // return ['2D','QD','AH','QH','AD'];
    //return ['2D','QD','AH','AH','AD'];
    return deck
}

// export default crearDeck;