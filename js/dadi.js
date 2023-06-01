//JS RESET
console.log('JS OK')

/* Generare un numero random da 1 a 6 per l'utente e per la CPU,
   stabilire il vincitore, in base a chi fa il punteggio più alto */

const displayElement = document.getElementById('display');

const playerNumber = Math.floor(Math.random()* 6) + 1;
const cpuNumber = Math.floor(Math.random()* 6) + 1;

let result = 'Pareggio!';

//controlla chi ha vinto

if (playerNumber > cpuNumber) { 
    result = 'Ha vinto il giocatore';
} else if (playerNumber < cpuNumber) { 
    result = 'Ha vinto la CPU';
}
//console.log(result);|

displayElement.innerHTML = `
<p>Tiro Giocatore: ${playerNumber}</p> 
<p>Tiro CPU: ${cpuNumber}</p> 
<p><strong>${result}</strong></p> `