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