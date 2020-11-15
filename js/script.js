let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber); 
if (randomNumber == '1'){
  getMoveName = 'kamień';
} else if (randomNumber == '2'){
  getMoveName = "papier"
} else if (randomNumber == '3'){
  getMoveName = "nożyce"
}
/*
if(randomNumber == '1'){
  computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = "papier"
} else if (randomNumber == '3') {
    computerMove = "nożyce"
}
*/
printMessage('Mój ruch to: ' + getMoveName);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = "papier"
} else if (playerInput == "3") {
  playerMove = "nożyce"
}
*/
printMessage('Twój ruch to: ' + getMoveName);



