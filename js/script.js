let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove && playerMove = 'nieznany ruch';

if (randomNumber && playerInput == '1') {
    computerMove && playerMove = 'kamień';
}
else if (randomNumber && playerInput == '2') {
    computerMove && playerMove = 'papier';
}
else if (randomNumber && playerInput == '3') {
    computerMove && playerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (computerMove == 'kamień' + 'papier' + 'nożyce' && playerMove == 'papier') {
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


