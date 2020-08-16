function unidades(entradaUnidades){
    let unidadesRomanas = "";
    switch (entradaUnidades){
        case '1':
            unidadesRomanas = "I";
            break;
        case '2':
            unidadesRomanas = "II";
            break;
        case '3':
            unidadesRomanas = "III";
            break;
        case '4':
            unidadesRomanas = "IV";
            break;
        case '5':
            unidadesRomanas = "V";
            break;
        case '6':
            unidadesRomanas = "VI";
            break;
        case '7':
            unidadesRomanas = "VII";
            break;
        case '8':
            unidadesRomanas = "VIII";
            break;
        case '9':
            unidadesRomanas = "IX";
            break;
        case '10':
            unidadesRomanas = "X";
            break;
        default:
            console.log("opción equivocada para las unidades ");
            break;
    }
    return unidadesRomanas;
}

function decenas(entradaDecenas){
    let decenasRomanas = "";
    switch (entradaDecenas){
        case '1':
            decenasRomanas = "X";
            break;
        case '2':
            decenasRomanas = "XX";
            break;
        case '3':
            decenasRomanas = "XXX";
            break;
        case '4':
            decenasRomanas = "XL";
            break;
        case '5':
            decenasRomanas = "L";
            break;
        case '6':
            decenasRomanas = "LX";
            break;
        case '7':
            decenasRomanas = "LXX";
            break;
        case '8':
            decenasRomanas = "LXXX";
            break;
        case '9':
            decenasRomanas = "XC";
            break;
        case '10':
            decenasRomanas =  "C";
            break;
        default:
            console.log("opción equivocada para las decenas ");
            break;
    }
    return decenasRomanas;
}

function centenas(entradaCentenas){
    let centenasRomanas = "";
    switch (entradaCentenas){
        case '1':
            centenasRomanas = "C";
            break;
        case '2':
            centenasRomanas = "CC";
            break;
        case '3':
            centenasRomanas = "CCC";
            break;
        case '4':
            centenasRomanas = "CD";
            break;
        case '5':
            centenasRomanas = "D";
            break;
        case '6':
            centenasRomanas = "DC";
            break;
        case '7':
            centenasRomanas = "DCC";
            break;
        case '8':
            centenasRomanas = "DCCC";
            break;
        case '9':
            centenasRomanas = "CM";
            break;
        default:
            console.log("opción equivocada para las centenas ");
            break;
    }
    return centenasRomanas;
}

function miles(entradaMiles){
    let milesRomanas = "";
    switch (entradaMiles){
        case '1':
            milesRomanas = "M";
            break;
        case '2':
            milesRomanas = "MM";
            break;
        case '3':
            milesRomanas = "MMM";
            break;
        case '4':
            milesRomanas = "MV";
            break;
        case '5':
            milesRomanas = "V";
            break;
        case '6':
            milesRomanas = "VI";
            break;
        case '7':
            milesRomanas = "VII";
            break;
        case '8':
            milesRomanas = "VIII";
            break;
        case '9':
            milesRomanas = "IX";
            break;
        default:
            console.log("opción equivocada para los Miles ");
            break;
    }
    return milesRomanas;
}

function diezMiles(entradaDiezMiles){
    let diezMilesRomanos = "";
    switch (entradaDiezMiles){
        case '1':
            diezMilesRomanos = "X";
            break;
        case '2':
            diezMilesRomanos = "XX";
            break;
        case '3':
            diezMilesRomanos = "XXX";
            break;
        default:
            console.log("opción equivocada para los DiezMiles ");
            break;
    }
    return diezMilesRomanos;
}

function  separaUnidades(divi){

    for (let i = 0; i <= divi.length; i++){

    }
}

function convertToRoman(num) {

    let digito = "";
    let digitoRomano = "";
    let numEnString = num.toString();


    if(num > 0 && num <= 10){
        digitoRomano += unidades(numEnString);
    }

    if(num > 10 && num <= 100){
        if(numEnString.length === 3){
            digitoRomano = 'C';
        }
        else{
            digitoRomano += decenas(numEnString.substr(0, 1)) +
            unidades(numEnString.substr(1, 1));
        }
    }

    if(num > 100 && num <= 1000){
        if(numEnString.length === 4){
            digitoRomano = 'M';
        }
        else{
            digitoRomano += centenas(numEnString.substr(0, 1)) +
                            decenas(numEnString.substr(1, 1)) +
                            unidades(numEnString.substr(2, 1));
        }
    }

    if (num > 1000 && num <= 10000){
        digitoRomano += miles(numEnString.substr(0, 1)) +
                        centenas(numEnString.substr(1, 1)) +
                        decenas(numEnString.substr(2, 1)) +
                        unidades(numEnString.substr(3, 1));
    }

    if (num > 10000 && num <= 30999){
        digitoRomano += diezMiles(numEnString.substr(0, 1)) +
                        miles(numEnString.substr(1, 1)) +
                        centenas(numEnString.substr(2, 1)) +
                        decenas(numEnString.substr(3, 1)) +
                        unidades(numEnString.substr(4, 1));
    }

    num = digitoRomano;
    console.log("el número romano es: " + digitoRomano);
    return num;
   }

   convertToRoman(44);