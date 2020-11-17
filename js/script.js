
function playGame(playerInput){
  
let playerMove = playGame(playerInput);
  if(playerInput == '1'){
  playerMove =  'kamień';
  } else if (playerInput == '2') {
  playerMove =  "papier";
  } else if (playerInput == "3") {
  playerMove =  "nożyce";
  }

  

 
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function getMoveName(randomNumber) {
    if (randomNumber == '1'){
    return 'kamień';
    } else if (randomNumber == '2'){
    return "papier";
    } else if (randomNumber == '3'){
    return "nożyce";
    }
  }

  function displayResult(computerMove, playerMove){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
    if(computerMove == 'kamień' && playerMove == 'papier'){
    } else if (computerMove == "papier" && playerMove == "nożyce") {
    printMessage('Ty wygrywasz!');
    } else if (computerMove == "nożyce" && playerMove == "kamień") {
    printMessage('Ty wygrywasz!');
    } else if (playerMove == "nieznany ruch") {
    printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
    } else if (computerMove == playerMove){
    printMessage('Remis!')
    } else {
    printMessage('Niestety przegrywasz')
    } 
  }
  displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', playGame(playerInput));

document.getElementById('play-paper').addEventListener('click', playGame(playerInput));

document.getElementById('play-scrissors').addEventListener('click', playGame(playerInput));
playGame;
