function unidades(entradaUnidades){
    let unidadesRomanas = "";
    switch (entradaUnidades){
        case '1':
            unidadesRomanas += "I";
            break;
        case '2':
            unidadesRomanas += "II";
            break;
        case '3':
            unidadesRomanas += "III";
            break;
        case '4':
            unidadesRomanas += "IV";
            break;
        case '5':
            unidadesRomanas += "V";
            break;
        case '6':
            unidadesRomanas += "VI";
            break;
        case '7':
            unidadesRomanas += "VII";
            break;
        case '8':
            unidadesRomanas += "VIII";
            break;
        case '9':
            unidadesRomanas += "IX";
            break;
        default:
            console.log("opción equivocada para las unidades ");
    }
    return unidadesRomanas;
}

function decenas(entradaDecenas){
    let decenasRomanas = "";
    switch (entradaDecenas){
        case '1':
            decenasRomanas += "X";
            break;
        case '2':
            decenasRomanas += "XX";
            break;
        case '3':
            decenasRomanas += "XXX";
            break;
        case '4':
            decenasRomanas += "IL";
            break;
        case '5':
            decenasRomanas += "L";
            break;
        case '6':
            decenasRomanas += "LX";
            break;
        case '7':
            decenasRomanas += "LXX";
            break;
        case '8':
            decenasRomanas += "LXXX";
            break;
        case '9':
            decenasRomanas += "XC";
            break;
        default:
            console.log("opción equivocada para las decenas ");
    }
    return decenas;
}

function centenas(entradaCentenas){
    let centenasRomanas = "";
    switch (entradaCentenas){
        case '1':
            centenasRomanas += "C";
            break;
        case '2':
            centenasRomanas += "CC";
            break;
        case '3':
            centenasRomanas += "CCC";
            break;
        case '4':
            centenasRomanas += "CD";
            break;
        case '5':
            centenasRomanas += "D";
            break;
        case '6':
            centenasRomanas += "DC";
            break;
        case '7':
            centenasRomanas += "DCC";
            break;
        case '8':
            centenasRomanas += "DCCC";
            break;
        case '9':
            centenasRomanas += "CM";
            break;
        default:
            console.log("opción equivocada para las centenas ");
    }
    return centenasRomanas;
}

function miles(entradaMiles){
    let milesRomanas = "";
    switch (entradaMiles){
        case '1':
            milesRomanas += "M";
            break;
        case '2':
            milesRomanas += "MM";
            break;
        case '3':
            milesRomanas += "MMM";
            break;
        case '4':
            milesRomanas += "MV";
            break;
        case '5':
            milesRomanas += "V";
            break;
        case '6':
            milesRomanas += "VI";
            break;
        case '7':
            milesRomanas += "VII";
            break;
        case '8':
            milesRomanas += "VIII";
            break;
        case '9':
            milesRomanas += "IX";
            break;
        default:
            console.log("opción equivocada para los Miles ");
    }
    return milesRomanas;
}

function diezMiles(entradaDiezMiles){
    let diezMilesRomanos = "";
    switch (entradaDiezMiles){
        case '1':
            diezMilesRomanos += "X";
            break;
        case '2':
            diezMilesRomanos += "XX";
            break;
        case '3':
            diezMilesRomanos += "XXX";
            break;
        // case 4:
        //     diezMilesRomanos += "MV";
        //     break;
        // case 5:
        //     diezMilesRomanos += "V";
        //     break;
        // case 6:
        //     diezMilesRomanos += "VM";
        //     break;
        // case 7:
        //     diezMilesRomanos += "VMM";
        //     break;
        // case 8:
        //     diezMilesRomanos += "VMMM";
        //     break;
        // case 9:
        //     diezMilesRomanos += "MX";
        //     break;
        default:
            console.log("opción equivocada para los DiezMiles ");
    }
    return diezMiles;
}

function  separaUnidades(divi){

    for (let i = 0; i <= divi.length; i++){

    }
}

function convertToRoman(num) {

    let digito = "";
    let digitoRomano = "";
    let numEnString = num.toString();

    for(let i = 0; i <= numEnString.length; i++){

        digito = numEnString.substr(num.length-1, 1);
        console.log('i vale     =   ' + i + '\n' +
                    'digito vale=   ' + digito);

        if(i = 0){
            console.log("num");
            digitoRomano  += unidades(digito);
        }
        if(i = 1){
            digitoRomano  = decenas(digito) + digitoRomano;
        }
        if(i = 2){
            digitoRomano  = centenas(digito + digitoRomano);
        }
        if(i = 3){
            digitoRomano  = miles(digito) + digitoRomano;
        }
        if(i = 4){
            digitoRomano  = diezMiles(digito) + digitoRomano;
        }

        // console.log("numEnString es: " + numEnString + " y digito romano es: " + digitoRomano);
    }

    num = digitoRomano;
    console.log("el número romano es: " + digitoRomano);
    return num;
   }

   convertToRoman(36);