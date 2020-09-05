const submit = document.querySelector('#enter');
const lowOrHi = document.querySelector('#lowOrHi');
const userInput = document.querySelector('#guessForm');
const remainingGuess = document.querySelector('#rGuess');
const prevGuess = document.querySelector('#pGuess');
const form = document.getElementById('gameForm');

let randonNumber = Math.floor(Math.random() * 100 + 1);
let nGuess = 1;
let playGame = true;
let previousGuess = [];

if (playGame === true) {
	submit.addEventListener('click', function(e){
	e.preventDefault();
	const guess = parseInt(userInput.value);
	confirmGuess(guess);
	console.log(randonNumber);
	});
}
confirmGuess = (guess) => {
	if (isNaN(guess)) {
		alert("Not even a real number dum dum");
	}
	else if (guess < 1) {
		alert("This is a game from 1 to 100 only")
	}
	else if (guess > 100) {
		alert("wow that is a big number, Ain't nobody got time for that!")
	}
	else {
		displayGuesses(guess);
		checkGuess(guess);
	}
}

checkGuess = (guess) => {
	if (guess === randonNumber) {
		displayMessage(`You guessed it correctly!`);
		endGame();
	}
	else if (guess < randonNumber) {
		displayMessage(`Touch on the low side ol chap`)
	}
	else if (guess > randonNumber) {
		displayMessage('Too high, can I recommend a number smaller in value than your last guess?')
	}
}
displayGuesses = (guess) => {
	userInput.value = '';
	prevGuess.innerHTML += `${guess}  `;
	nGuess++
	remainingGuess.innerHTML = `${10 - nGuess}  `;
}

displayMessage = (message) => {
	lowOrHi.innerHTML = `<label>${message}</label>`;
}

endGame = () => {
	userInput.value = '';
	userInput.setAttribute('disabled', '');
	submit.disabled = true;
	playGame = false;
	let restartBtn = document.createElement("button");
	restartBtn.classList.add("restartStyle");
	form.appendChild(restartBtn);
	restartBtn.textContent = "Restart";	
	restartBtn.width = "25px";
	restartBtn.height = "100px";
}
