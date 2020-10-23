

var leMiePosizioni = [];
var quantitaBombe = 16;
var maxPoint = numeroCasualeMax - quantitaBombe;
var isBombaTrovata = false;


var numeroCasualeMin = 100;
var numeroCasualeMax = 1;



var livelloDifficolta = scegliLivello(numeroCasualeMin, numeroCasualeMax, quantitaBombe);
console.log(livelloDifficolta);
console.log(numeroCasualeMax);
console.log(numeroCasualeMin);

function scegliLivello(nMin, nMax, nBombe) {

    do {
        var livello = parseInt(prompt('scegli il livello di difficoltà. 0=facile 1=medio 2=difficile'));
        console.log(livello);

        var nMax;
        var nMin;
        var nBombe;

        switch (livello) {
            case 0:
            nMax = nMax;
            nMin = nMin;
            alert(' su ' + nMax + ' numeri ' + nBombe + ' possono farti perdere')
            alert('puoi inserire solo numeri da ' + nMin + ' a ' + nMax);
            console.log('funziona 0');
            break;
            case 1:
            nMax = nMax - 20;
            nMin;
            alert(' su ' + nMax + ' numeri ' + nBombe + ' possono farti perdere')
            alert('puoi inserire solo numeri da ' + nMin + ' a ' + nMax);
            console.log('funziona 1');
            break;
            case 2:
            nMax = nMax - 50;
            nMin;
            alert(' su ' + nMax + ' numeri ' + nBombe + ' possono farti perdere')
            alert('puoi inserire solo numeri da ' + nMin + ' a ' + nMax);
            console.log('funziona 2');
            break;

            default:
            alert('valore non valido');

        }

    } while (livello != 0 && livello !=1 && livello !=2);

    return livello;
}



var listaMine = generaNumero(quantitaBombe, numeroCasualeMin, numeroCasualeMax);
console.log(listaMine);




do {
    var sceltaUtente = parseInt(prompt('inserisci un numero'));

    var isGameOver = isUnaMina(sceltaUtente, listaMine);

    if (isGameOver == true) {

        isBombaTrovata = true;

        alert('hai perso! hai totalizzato ' + leMiePosizioni.length + ' punti');
        // console.log(leMiePosizioni);

    } else if (isNumeroValido(leMiePosizioni, sceltaUtente, numeroCasualeMin, numeroCasualeMax)) {

        leMiePosizioni.push(sceltaUtente);

    } else {
        alert('numero gia inserito o valore non valido');
    }

} while (isBombaTrovata == false && leMiePosizioni.length < maxPoint);

console.log(leMiePosizioni);

if (leMiePosizioni.length == maxPoint) {
    alert('hai vinto! hai totalizzato ' + maxPoint + ' punti');
}


// ________________FUNZIONI_________________

function getRandomNumbers(min, max) {
    var random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    return random_number;
}

// FUNZIONE PER VERIFICARE SE UN NUMERO UTENTE E' UGUALE A UN NUMERO MINA
function isUnaMina(numeroUtente, arrayMine) {
    var controllo = false;
    if (arrayMine.includes(numeroUtente) == true) {
        controllo = true;
    }
    return controllo;
}

// FUNZIONE PER GENERARE(IN QUESTO CASO 16 ( 16=quantitaBombe)) NUMERI CASUALI DIVERSI TRA LORO
function generaNumero(nBombe, nMin, nMax) {
    var listaBombe = [];

    while (listaBombe.length < nBombe) {
        var minaRandom = getRandomNumbers(nMin, nMax);
        // console.log(mine);
        if (listaBombe.includes(minaRandom) == false) {
            // se mine non è già incluso in array_mine allora lo pushamo
            listaBombe.push(minaRandom);
        }
    }
    return listaBombe;
}

// FUNZIONE PER VERIFICARE CONDIZIONE DI PUSHAGGIO SCELTA UTENTE
function isNumeroValido(arrayUtente, numero, numeroMin, numeroMax) {
    if (arrayUtente.includes(numero) == false && numero <= numeroMax && numero >= numeroMin) {
        return true;
    } else {
        return false;
    }
}
