let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(argComputerMove);

function getMoveName(argComputerMove) {
  if (argComputerMove == '1'){
  return 'kamień';
  } else if (argComputerMove == '2'){
  return "papier" ;
  } else if (argComputerMove == '3'){
  return "nożyce";
  }
}

/*
if (randomNumber == '1'){
computerMove = 'kamień';
} else if (randomNumber == '2'){
computerMove = "papier"
} else if (randomNumber == '3'){
computerMove = "nożyce"
}
*/

printMessage('Mój ruch to: ' + getMoveName);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

  if(playerInput == '1'){
  playerMove =  'kamień';
  } else if (playerInput == '2') {
  playerMove =  "papier";
  } else if (playerInput == "3") {
  playerMove =  "nożyce";
  }

printMessage('Twój ruch to: ' + getMoveName);

function displayResult(argComputerMove, argPlayerMove){
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
  } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
  printMessage('Ty wygrywasz!');
  } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
  printMessage('Ty wygrywasz!');
  } else if (argPlayerMove == "nieznany ruch") {
  printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
  } else if (argComputerMove == argPlayerMove){
  printMessage('Remis!')
  } else {
  printMessage('Niestety przegrywasz')
  } 
}
