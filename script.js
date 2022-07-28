function getComputerChoice () { //randomly selects 1 of 3 options
	const choices = [`rock`, `paper`, `scissors`];
	return choices[Math.floor(Math.random() * 3)];
}



// playGame();

function game() {

	// need a loop for 5 rounds, 2 vars to keep score
	// return a win||lose point per `if` scenario that can be stored in score vars
	let playerScore = 0;
	let compScore = 0;
	let round = 5;

	function playGame () {

		let compChoice = getComputerChoice();
		let playerChoice = prompt(`Player, pick your weapon: rock, paper or scissors`, ``).toLowerCase();
	
		console.log(compChoice, playerChoice);
	
		if ((playerChoice === `rock` && compChoice === `scissors`) ||
				(playerChoice === `paper` && compChoice === `rock`) || 
				(playerChoice === `scissors` && compChoice === `paper`)) {
	
					console.log(`${playerChoice.toUpperCase()} beats ${compChoice}, you win`);
	
		} else if (playerChoice === compChoice ) {
			console.log(`${playerChoice} and ${compChoice} are the same, it's a draw`);
		} else {
			console.log(`${compChoice.toUpperCase()} beats ${playerChoice} - you lose, loser`);
		}
	};

	for (let i = 1; i <= round; i++) {
		playGame();
	};

};

game();
