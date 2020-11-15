function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function getMoveName(randomNumber) {
	if (randomNumber == '1'){
	getMoveName = 'kamień';
	} else if (randomNumber == '2'){
	getMoveName = "papier"
	} else if (randomNumber == '3'){
	getMoveName = "nożyce"
	}
}
function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	printMessage('Ty wygrywasz!');
	} else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
	printMessage('Ty wygrywasz!');
	} else if (argComputerMoveMove == "nożyce" && argPlayerMove == "kamień") {
	printMessage('Ty wygrywasz!');
	} else if (argPlayerMove == "nieznany ruch") {
	printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
	} else if (argComputerMove == argPlayerMove){
	printMessage('Remis!')
	} else {
	printMessage('Niestety przegrywasz')
	} 
}
