// console.log('hello');

/*
Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.

BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
0 = l'intervallo di numeri possibili è tra 1 e 100
1 = l'intervallo di numeri possibili è tra 1 e 80
2 = l'intervallo di numeri possibili è tra 1 e 50
In ogni caso, le mine sono sempre 16.
*/


// CREIAMO UN PRIMO CICLO PER FAR SCEGLIERE IL LIVELLO E IMPOSTARE I PRIMI VALORI A SECONDA DEL LIVELLO


var numeroCasualeMin;
var numeroCasualeMax;

do {
    var livello = parseInt(prompt('scegli il livello di difficoltà. 0=facile 1=medio 2=difficile'));
    console.log(livello);
    if (livello == 0 ) {
        numeroCasualeMax = 100;
        numeroCasualeMin = 1;
        alert('su 100 numeri 16 possono farti perdere');
        alert('puoi inserire solo numeri da 1 a 100');
    } else if (livello == 1) {
        numeroCasualeMax = 80;
        numeroCasualeMin = 1;
        alert('su 80 numeri 16 possono farti perdere');
        alert('puoi inserire solo numeri da 1 a 80');
    } else if (livello == 2) {
        numeroCasualeMax = 50;
        numeroCasualeMin = 1;
        alert('su 50 numeri 16 possono farti perdere');
        alert('puoi inserire solo numeri da 1 a 50');
    } else {
        alert('valore non valido');
    }

} while (livello != 0 && livello !=1 && livello !=2);


// CREIAMO DELLE VAR IN MODO DA NON TOCCARE NEL CODICE IN FUTURO MA MODIFICARE QUESTE PER MODIFICARE IL GIOCO

var leMiePosizioni = [];
var quantitaBombe = 16;
var maxPoint = numeroCasualeMax - quantitaBombe;
var isBombaTrovata = false;

// GENERIAMO 16 NUMERI CASUALI (MINE) CON CICLO WHILE PER EVITARE CHE SI RIPETANO


var listaMine = generaNumero(quantitaBombe, numeroCasualeMin, numeroCasualeMax);
console.log(listaMine);


// CHIEDIAMO ALL'UTENTE DI INSERIRE UN NUMERO ALLA VOLTA (CICLO FOR O WHILE O DO WHILE)

// DIRE SE IL NUMERO DELL'UTENTE CORRISPONDE A UN NUMERO DELLE MINE OPPURE NO

// SE CORRISPONDE AD UN NUMERO DELLE MINE IL GIOCO/CICLO FINISCE ALTRIMENTI SI VA AVANTI

// SE ANDIAMO AVANTI CHIEDIAMO UN ALTRO NUMERO

// ALLA FINE DEL GIOCO DICIAMO QUANTI NUMERI è RIUSCITO A INSERIRE SENZA SBAGLIARE (QUANTI CICLI) = PUNTEGGIO

/*

 do {
     var sceltaUtente = parseInt(prompt('inserisci un numero'));
     if (listaMine.includes(sceltaUtente) == false) {
         leMiePosizioni.push(sceltaUtente);

     } else {
         isBombaTrovata = true;
     }

 } while (isBombaTrovata == false);

 // ATTENZIONE!! ALCUNI PROGRAMMI NON VOGLIONO CHE LA VARIABILE INTERNA AL CICLO SIA NELLA CONDIZIONE PERCHE' LA VISIBILITA' DELLE VARIABILI E' LIMITATA ALLE PARENTESI GRAFFE
 // QUINDI FACCIAMO IN UN ALTRO METODO
*/

do {
    var sceltaUtente = parseInt(prompt('inserisci un numero'));

    var isGameOver = isUnaMina(sceltaUtente, listaMine);

    if (isGameOver == true) {

        isBombaTrovata = true;

        alert('hai perso! hai totalizzato ' + leMiePosizioni.length + 'punti');
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
