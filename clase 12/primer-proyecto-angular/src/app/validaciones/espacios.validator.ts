import {AbstractControl} from '@angular/forms'

export function VerificarEspacios (c:AbstractControl) { //pasa como c al string
    if(c.value == null) return null; //retornar null significa que no hay nada
    if(c.value.indexOf(' ') >= 0) { //busca espacio, y si encuentra que es mayor que 0, da error. Si no encuentra espacio va a retornar -1 y retornar null, va a significar que está todo bien. Se pueden chequear otras cosas, por ej que la primera sea mayuscula
        return {conEspacios: true}
    } 
    return null;
}