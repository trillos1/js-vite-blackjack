import { pedirCarta, valorCarta,crearCartaHTML } from './'


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora HTML para mostrar los puntos 
 * @param {Array<String> deck} 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [] ) => {

    
    if( !puntosMinimos) throw new Error('Puntos mínimos son necesario');
    if( !puntosHTML) throw new Error('argumento puntosHTML es necesario');
   
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
       
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

       
        if (puntosComputadora===21){
            break;
        }

    } while(  (puntosComputadora <= puntosMinimos)  && (puntosMinimos <= 21 ) );

    
        if( puntosComputadora === puntosMinimos ) {
            // alert('Nadie gana :(');
            return 'Nadie gana :(';
        } else if ( puntosMinimos > 21 ) {
            // alert('Computadora gana')
            return 'Computadora gana';
        } else if( puntosComputadora > 21 ) {
            // alert('Jugador Gana');
            return 'Jugador Gana';
        } else {
            // alert('Computadora Gana')
            return 'Computadora Gana';
        }
   
}
