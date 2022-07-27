console.log(getComputerChoice());

function getComputerChoice () { //randomly selects 1 of 3 options
	const choices = [`rock`, `paper`, `scissors`];
	return choices[Math.floor(Math.random() * 3)];
}

// const playerChoice = prompt(`Player, pick your weapon: rock, paper or scissors`, ``);
