const cipher = {
    encode: function (code, text) {
        
        if (((code === null) || (code === 0)) || (code === isNaN)){       // errores
            throw new TypeError();
        }

        let message = '';

        for (let i = 0; i < text.length; i++) {

            let posicion = text.charCodeAt(i)
            // Recorre c/u caracteres - Codigo ASCII

            // console.log(posicion);

            // A = (65) - Z = (90)

            if (posicion >= 65 && posicion <= 90) {  // Mayuscula
                
                // cod. ASCII, se realiza el desplazamiento deseado.
                let formulaEncode = (((posicion - 65 + parseInt(code)) % 26) + 65);

                // console.log(formulaEncode);

                // retorna la letra cifrada
                message += String.fromCharCode(formulaEncode);


            }
            else if (posicion >= 97 && posicion <= 122) {   //minuscula

                let formulaEncode2 = (((posicion - 97 + parseInt(code)) % 26) + 97);

                // retorna la letra cifrada
                message += String.fromCharCode(formulaEncode2);

                // console.log(message);

            }           
            else {

                //aplica el cifrado solo a los caracteres, no modifica los espacio ni simbolos
                message += String.fromCharCode(posicion);
            }
        }
        
        return message;
    },


    decode: function (code, text) {

        if (((code === null) || (code === 0)) || (code === isNaN)) {
            throw new TypeError();
        }
    
        let message = '';

        for (let i = 0; i < text.length; i++) {

            let posicion = text.charCodeAt(i);

            if (posicion >= 65 && posicion <= 90) {

                let formulaDecode = (((posicion - 90 - parseInt(code)) % 26 ) + 90);

                message += String.fromCharCode(formulaDecode);

                // console.log(formulaEncode);

            }
            else if (posicion >= 97 && posicion <= 122) {

                let formulaDecode2 = (((posicion - 122 - parseInt(code)) % 26) + 122);

                // retorna la letra cifrada
                message += String.fromCharCode(formulaDecode2);

            }
            else {

                message += String.fromCharCode(posicion);

            }
          }
        return message;
    }
}

    export default cipher;