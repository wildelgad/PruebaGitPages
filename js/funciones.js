
function esAlfaNumerico(letra){
    let letraComprobada = false;
    let abecedario = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890#*';
    let i = 0;
    while(letra != abecedario.substr(i, 1)){
      i++;
    }
    if(letra === abecedario.substr(19, 1)){
        letraComprobada = true;

    }
    console.log("estoy revisando si es alfanumerico con: " + letraComprobada)
    return letraComprobada;
}


// console.log(esAlfaNumerico('s'));

function invierte(palabra){
    let nuevaPalabra = "";
    console.log("la palabra ingresada es: " + palabra)
    console.log("La longitud es: " + palabra.length);
    for(let i = palabra.length -1; i >= 0; i--){
        console.log("hola for");
        console.log(palabra.substr(i, 1));
        nuevaPalabra = nuevaPalabra + palabra.substr(i, 1);
    }
    return nuevaPalabra;
}
// let c = invierte('adan');
// console.log(c);



function eliminarCaracterDeUnString(cruda){
    let minusculas = "abcdefghijklmnñopqrstuvwxyz";
    let mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let subCadenaIzquierda;
    let subCadenaDerecha;
    let verificada = false;

    let letra;
    let nuevaCruda = "1";
    console.log("la palabra ingresada es: " + cruda);
    console.log("hola nueva cruda: " + nuevaCruda);
    nuevaCruda = cruda.substr(3, 1);
    console.log("el cambio de nuevaCruda es: " + nuevaCruda);
    for(let i = 0; i < cruda.length; i++){
        letra = esAlfaNumerico(cruda.substr(i, 1));
        console.log("hola for " + cruda.substr(i, 1) + letra)
        if(letra){

            nuevaCruda  = nuevaCruda + "heyheyhey";
            console.log("hola nueva cruda: " + nuevaCruda);
        }
    }
    return nuevaCruda;
}

eliminarCaracterDeUnString("huyYijo");

function convertirAMinuscula(mayus){
    let minusculas = "abcdefghijklmnñopqrstuvwxyz";
    let mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let subCadenaIzquierda;
    let subCadenaDerecha;

    let nuevaMayus = mayus;
    let cantidadLetras = mayusculas.length;

    console.log("la canti es: " + cantidadLetras);
    console.log("antes del for, y: " + mayus.length);

    for(let i = 0; i <= mayus.length-1; i++){

        console.log("hola forr")
        let j = 0;

        while(j <= mayusculas.length -1){
            if(mayus.substr(i, 1) === mayusculas.substr(j, 1)){
                subCadenaIzquierda = mayus.substr(0, i);
                subCadenaDerecha = mayus.substr(i+1, mayus.length - (i+1));
                mayus = subCadenaIzquierda + minusculas.substr(j, 1) + subCadenaDerecha;
            }
            j++;
        }
    }
    console.log("La palabra en minúscula es: " + mayus);
}

// convertirAMinuscula('KjiLalalAla');

// function (){}