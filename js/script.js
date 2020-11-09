
let computerMove = 'kamień';

printMessage('Zagrałem' +  computerMove + '!Jeśli Twój ruch to papier, to wygrywasz!');
	

let playerMove = 'papier';

printMessage('Zagrałem' +  playerMove + '!Jeśli Twój ruch to nożyce, to wygrywasz!');


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch'; 

    if(randomNumber == 1){
    computerMove = 'kamień';
    }
    else if(randomNumber == 2){
        computerMove = 'papier';
    }
    else if(randomNumber ==3){
        computerMove = 'nożyce';
    }
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch'; 

    if(playerInput == '1'){
    playerMove = 'kamień';
    }
    else if(playerInput == '2'){
        playerMove = 'papier';
    }
    else if(playerInput == '3'){
        playerMove = 'nożyce';
    }
printMessage('Twój ruch to: ' + playerMove);

    if(computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }
    if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
    }
    if(computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Niestety, przegrywasz');
    }
    if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
        printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    }
    if(computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Remis!');
    }
    if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Niestety, przegrywasz');
    }
    if(computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Wygrywasz!');
    }
    if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
        printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    }
    if(computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Wygrywasz!');
    }
    if(computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Niestety, przegrywasz');
    }
    if(computerMove == 'nożyce' && playerMove == 'nożyce'){
        printMessage('Remis!');
    }
    if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
        printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    }

