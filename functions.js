function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function printMessage (){
	let computerMove = 'kamień';
	printMessage('Zagrałem' + 'computerMove' + 
	'!Jeśli Twój ruch to papier, to wygrywasz!');
	}
function printMessage (){
let playerMove = 'papier';
printMessage('Zagrałem' + 'playerMove' + 
'!Jeśli Twój ruch to kamień, to wygrywasz!');
}

