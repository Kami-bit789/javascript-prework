
let computerMove = 'kamień';

printMessage('Zagrałem' + computerMove + '!Jeśli Twój ruch to papier, to wygrywasz!');


let playerMove = 'papier';

printMessage('Zagrałem' + playerMove + '!Jeśli Twój ruch to nożyce, to wygrywasz!');


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
}
else if (randomNumber == 2) {
    computerMove = 'papier';
}
else if (randomNumber == 3) {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
}
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Wgrywasz!');
}
if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Wygrywasz!');
}
if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Wygrywasz!');
}
if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
    printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
}
if (computerMove == playerMove) {
    printMessage('Remis!');
}
else if {
    printMessage('Niestety, przegrywasz');
}
