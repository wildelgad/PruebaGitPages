function esAlfaNumerico(letra){
    let letraComprobada = false;
    let abecedario = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890#*';
    let i = 0;
    while((i < abecedario.length)){
        
        if(letra === abecedario.substr(i, 1)){
            letraComprobada = true;
        }
        i++;
    }
    return letraComprobada;
}

// esAlfaNumerico("*");

// ************************************************************************
// ************************************************************************

function invierte(palabra){
    let nuevaPalabra = "";
    for(let i = palabra.length -1; i >= 0; i--){
        nuevaPalabra = nuevaPalabra + palabra.substr(i, 1);
    }
    return nuevaPalabra;
}

// console.log(invierte('jeii'));


// ************************************************************************
// ************************************************************************

function eliminarUnCaracterDeUnString(cruda){
    let letra;
    let nuevaCruda = "";

    for(let i = 0; i < cruda.length; i++){
        letra = esAlfaNumerico(cruda.substr(i, 1));
        if(letra){
            nuevaCruda = nuevaCruda + cruda.substr(i, 1);
        }
    }
    return nuevaCruda;
}

// eliminarUnCaracterDeUnString(" K   /6");


// ************************************************************************
// ************************************************************************

function convertirAMinuscula(mayus){
    let minusculas = "abcdefghijklmnñopqrstuvwxyz";
    let mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let subCadenaIzquierda;
    let subCadenaDerecha;

    for(let i = 0; i <= mayus.length-1; i++){
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
    return mayus;
}

// ************************************************************************
// ************************************************************************

function palindrome(str){
    let strAlfanumerico = eliminarUnCaracterDeUnString(str);
    let strEnMinuscula = convertirAMinuscula(strAlfanumerico);
    let strInvertida = invierte(strEnMinuscula);

    if(strEnMinuscula === strInvertida){
        return true;
    }
    else return false;
}


console.log("la palindrome es: " + palindrome("race car"));