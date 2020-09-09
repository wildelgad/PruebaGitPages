function caracterValido(forma){
    simbolos='()- ';
    estado = false;

    let i = 0;
    while(i <= simbolos.length-1){
        if(simbolos.substr(i, 1) === forma){
            estado = true;
        }
        i++;
    }
    return estado;
}

// console.log("validando caracter: " + caracterValido('('));

function esNumero(forma){
    simbolos='0123456789';
    estado = false;

    let i = 0;
    while(i <= simbolos.length-1){
        if(simbolos.substr(i, 1) === forma){
            estado = true;
        }
        i++;
    }
    return estado;
}

// console.log("validando numero: " + esNumero('0'));

function cantidadNumeros(cant){
    let qDeNumero = 0;

    let i = 0;
    while(i <= cant.length-1){
        if(esNumero(cant.substr(i, 1))){
            qDeNumero += 1;
        }
        i++;
    }
    return qDeNumero;
}

// console.log(`cantidad de numero es: ${cantidadNumeros("329884klbnjhgosa9")}`)

function todosLosDigitosValidos(digivali){
    validadorDigitos = false;

    let i = 0;
    while(i <= digivali.length-1){
        if(esNumero(digivali.substr(i, 1)) || caracterValido(digivali.substr(i, 1))){
            validadorDigitos = true;
            i++;
        }
        else {
            validadorDigitos = false;
            i = digivali.length;
        }
    }
    return validadorDigitos;
}

// console.log(`la validación de todos lo números da: ${todosLosDigitosValidos("6788")}`);

//+++++ FORMA 1: "5555555555"
function forma1(term){
    let resultadoForma1 = false;
    if(cantidadNumeros(term) === 10 && term.length === 10){
        resultadoForma1 = true;
    }
    return resultadoForma1
}

//+++++ FORMA 2: "555-555-5555"
function forma2(term2){
    let resultadoForma2 = false;
    if(cantidadNumeros(term2) === 10    &&
        term2.length === 12             &&
        term2.substr(3, 1) === '-'      &&
        term2.substr(7, 1) === '-'
      ){
        resultadoForma2 = true;
      }
      return resultadoForma2;
}

//+++++ FORMA 3: "1 555-555-5555"
function forma3(term3){
    let resultadoForma3 = false;

    if(cantidadNumeros(term3) === 11    &&
        term3.length === 14             &&
        term3.substr(0, 1) === '1'      &&
        term3.substr(1, 1) === ' '      &&
        (
            term3.substr(5, 1) === '-'  ||
            term3.substr(5, 1) === ' '
        )                               &&
        (
            term3.substr(9, 1) === '-'  ||
            term3.substr(9, 1) === ' '
        )
      ){
        resultadoForma3 = true;
    }
    return resultadoForma3;
}

//+++++ FORMA 4: "1(555)555-5555"
function forma4(term4){
    let resultadoForma4 = false;
    if(cantidadNumeros(term4) === 11    &&
        term4.length === 14             &&
        term4.substr(0, 1) === '1'      &&
        term4.substr(1, 1) === '('      &&
        term4.substr(5, 1) === ')'      &&
        term4.substr(9, 1) === '-'
      ){
        resultadoForma4 = true;
    }
    return resultadoForma4;
}

//+++++ FORMA 5: "1 (555) 555-5555"  ó   "1 (555) 555 5555"
function forma5(term5){
    let resultadoForma5 = false;
console.log("substring 0,1 " + term5.substr(11, 1));
    if(
        cantidadNumeros(term5) === 11   &&
        term5.length === 16             &&
        term5.substr(0, 1) === '1'      &&
        term5.substr(1, 1) === ' '      &&
        term5.substr(2, 1) === '('      &&
        term5.substr(6, 1) === ')'      &&
        term5.substr(7, 1) === ' '      &&
        (term5.substr(11, 1) === '-' || term5.substr(11, 1) === ' ')
      ){
        resultadoForma5 = true;
    }
    return resultadoForma5;
}


function telephoneCheck(str){
    let variable = false;

    // if(forma1(5<0)){
    //     return true;
    //     console.log("hey" + str);
    //   }

    if(
        forma1(str)     ||
        forma2(str)     ||
        forma3(str)     ||
        forma4(str)     ||
        forma5(str)
    ){
        variable = true;
    }
    console.log(variable + " si si");
    return variable;
}
// console.log(`El telephoneCheck da: ${telephoneCheck("(555)5(55?)-5555")}`);
telephoneCheck("555-555-5555");