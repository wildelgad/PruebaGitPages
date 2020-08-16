function comprobarLetraAlfabeto(comp){;
    let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let estado = false;

    for(let i = 0; i <= alfabeto.length-1; i++){
        if(alfabeto.substr(i, 1) === comp){
            estado = true;
        }
    }
    return estado;
}

// console.log("compruebo si letra es alfabetica: " + comprobarLetraAlfabeto('I'));

function convertirAMayuscula(minus){
    let minusculas = "abcdefghijklmnñopqrstuvwxyz";
    let mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let subCadenaIzquierda;
    let subCadenaDerecha;

    for(let i = 0; i <= minus.length-1; i++){
        let j = 0;
        while(j <= minusculas.length -1){
            if(minus.substr(i, 1) === minusculas.substr(j, 1)){
                subCadenaIzquierda = minus.substr(0, i);
                subCadenaDerecha = minus.substr(i+1, minus.length - (i+1));
                minus = subCadenaIzquierda + mayusculas.substr(j, 1) + subCadenaDerecha;
            }
            j++;
        }
    }
    return minus;
}

// console.log(convertirAMayuscula("!% s=DfnAs¿Ui  9r"));

function calculoLetraOriginal(letraAEncontrar){
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let posicionLetraAEncontrar;
    let posicionDescriptada;

    let i = 0;
    while(i <= mayusculas.length-1){
        if(letraAEncontrar === mayusculas.substr(i, 1)){
            posicionLetraAEncontrar = i;
            i = mayusculas.length;
        }else i++;
    }


    if(posicionDescriptada < 0){
        posicionDescriptada = mayusculas.length - posicionDescriptada;
    }
    posicionDescriptada = posicionLetraAEncontrar - 13;
    let letraTransformada = mayusculas.substr(posicionDescriptada, 1);
    return  letraTransformada
}

// console.log(`transformo e en ${calculoLetraOriginal("E")}`);

function rot13(str) {
    let strMayuscula = convertirAMayuscula(str);
    let provisional = "";

    for (let i = 0; i <= str.length-1; i++){
        if(comprobarLetraAlfabeto(strMayuscula.substr(i, 1))){
            provisional += calculoLetraOriginal(strMayuscula.substr(i, 1));
        }
        else{
            provisional += strMayuscula.substr(i, 1);
        }

    }
    console.log("la provisional final es: " + provisional);
    str = provisional;
    return str;
}

rot13("SERR CVMMN!");