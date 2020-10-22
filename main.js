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

do {
    var livello = parseInt(prompt('scegli il livello di difficoltà. 0=facile 1=medio 2=difficile'));
    console.log(livello);
    if (livello == 0 ) {
        var numeroBombeMax = 100;
        var numeroMinimoLivello = 1;
        var numeroMassimoLivello = 101;
        alert('su 100 numeri 16 possono farti perdere');
        alert('puoi inserire solo numeri da 1 a 100');
    } else if (livello == 1) {
        var numeroBombeMax = 80;
        var numeroMinimoLivello = 1;
        var numeroMassimoLivello = 81;
        alert('su 80 numeri 16 possono farti perdere');
        alert('puoi inserire solo numeri da 1 a 80');
    } else if (livello == 2) {
        var numeroBombeMax = 50;
        var numeroMinimoLivello = 1;
        var numeroMassimoLivello = 51;
        alert('su 50 numeri 16 possono farti perdere');
        alert('puoi inserire solo numeri da 1 a 50');
    } else {
        alert('valore non valido');
    }

} while (livello != 0 && livello !=1 && livello !=2);

// CREIAMO DELLE VAR IN MODO DA NON TOCCARE NEL CODICE IN FUTURO MA MODIFICARE QUESTE PER MODIFICARE IL GIOCO
var listaMine = [];
var leMiePosizioni = [];
var quantitaBombe = 16;
var numeroBombeMin = 1;
var maxPoint = numeroBombeMax - quantitaBombe;
var isBombaTrovata = false;

// GENERIAMO 16 NUMERI CASUALI (MINE) CON CICLO WHILE PER EVITARE CHE SI RIPETANO

while (listaMine.length < quantitaBombe) {
    var minaRandom = getRandomNumbers(numeroBombeMin, numeroBombeMax);
    // console.log(mine);
    if (listaMine.includes(minaRandom) == false) {
        // se mine non è già incluso in array_mine allora lo pushamo
        listaMine.push(minaRandom);
    }
}
console.log(listaMine);


// CHIEDIAMO ALL'UTENTE DI INSERIRE UN NUMERO ALLA VOLTA (CICLO FOR O WHILE O DO WHILE)

// DIRE SE IL NUMERO DELL'UTENTE CORRISPONDE A UN NUMERO DELLE MINE OPPURE NO

// SE CORRISPONDE AD UN NUMERO DELLE MINE IL GIOCO/CICLO FINISCE ALTRIMENTI SI VA AVANTI

// SE ANDIAMO AVANTI CHIEDIAMO UN ALTRO NUMERO

// ALLA FINE DEL GIOCO DICIAMO QUANTI NUMERI è RIUSCITO A INSERIRE SENZA SBAGLIARE (QUANTI CICLI) = PUNTEGGIO

/*

 do {
     var laMiaScelta = parseInt(prompt('inserisci un numero'));
     if (listaMine.includes(laMiaScelta) == false) {
         leMiePosizioni.push(laMiaScelta);

     } else {
         isBombaTrovata = true;
     }

 } while (isBombaTrovata == false);

 // ATTENZIONE!! ALCUNI PROGRAMMI NON VOGLIONO CHE LA VARIABILE INTERNA AL CICLO SIA NELLA CONDIZIONE PERCHE' LA VISIBILITA' DELLE VARIABILI E' LIMITATA ALLE PARENTESI GRAFFE
 // QUINDI FACCIAMO IN UN ALTRO METODO
*/

 do {
     var laMiaScelta = parseInt(prompt('inserisci un numero'));

     var isGameOver = isUnaMina(laMiaScelta, listaMine);

     if (isGameOver == true) {

        isBombaTrovata = true;

        alert('hai perso! hai totalizzato ' + leMiePosizioni.length + 'punti');
        // console.log(leMiePosizioni);

    } else if (leMiePosizioni.includes(laMiaScelta) == false && laMiaScelta < numeroMassimoLivello && laMiaScelta >= numeroMinimoLivello) {

        leMiePosizioni.push(laMiaScelta);

     } else {
         alert('numero gia inserito o valore non valido');
     }

 } while (isBombaTrovata == false && leMiePosizioni.length < maxPoint);

 console.log(leMiePosizioni);

if (leMiePosizioni.length == maxPoint) {
    alert('hai vinto! hai totalizzato 84 punti');
}


// ________________FUNZIONI_________________

function getRandomNumbers(min, max) {
    var random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    return random_number;
}


function isUnaMina(sceltaUtente, arrayMine) {
    var controllo = false;
    if (arrayMine.includes(sceltaUtente) == true) {
        controllo = true;
    }
    return controllo;
}
