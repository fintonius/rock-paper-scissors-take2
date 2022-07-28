function getComputerChoice () { //randomly selects 1 of 3 options
	const choices = [`rock`, `paper`, `scissors`];
	return choices[Math.floor(Math.random() * 3)];
}

function playGame () {

	let compChoice = getComputerChoice();
	let playerChoice = prompt(`Player, pick your weapon: rock, paper or scissors`, ``).toLowerCase();

	console.log(compChoice, playerChoice);

	if ((playerChoice === `rock` && compChoice === `scissors`) ||
			(playerChoice === `paper` && compChoice === `rock`) || 
			(playerChoice === `scissors` && compChoice === `paper`)) {

				console.log(`you win`);

	} else if (playerChoice === compChoice ) {
		console.log(`it's a draw`);
	} else {
		console.log(`you lose`);
	}
};

playGame();
