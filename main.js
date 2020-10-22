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

var listaMine = [];
var leMiePosizioni = [];
var quantitaBombe = 16;
var numeroBombeMax = 100;
var numeroBombeMin = 1;
var maxPoint = numeroBombeMax - quantitaBombe;
var isBombaTrovata = false;
// GENERIAMO 16 NUMERI CASUALI (MINE) CON CICLO WHILE PER EVITARE CHE SI RIPETANO

i = 0;

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

    } else if (leMiePosizioni.includes(laMiaScelta) == false) {

        leMiePosizioni.push(laMiaScelta);

     } else {
         alert('numero gia inserito');
     }

 } while (isBombaTrovata == false && leMiePosizioni.length < maxPoint);

 console.log(laMiaScelta);

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
