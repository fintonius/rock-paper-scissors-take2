function game() {

	let playerChoice = '';
	let roundResult = document.getElementById('round-result');

	let rockBtn = document.getElementById('rock');
	rockBtn.addEventListener('click', () => {
		playerChoice = 'rock';
		playGame();
	});

	let paperBtn = document.getElementById('paper');
	paperBtn.addEventListener('click', () => {
		playerChoice = 'paper';
		playGame();
	});

	let scissorBtn = document.getElementById('scissors');
	scissorBtn.addEventListener('click', () => {
		playerChoice = 'scissors';
		playGame();
	});

	let winner = document.getElementById('winner');

	let playerScore = 0;
	let playerPoints = document.getElementById('player-score');

	let compScore = 0;
	let compPoints = document.getElementById('comp-score');

	function playGame () {
		const choices = [`rock`, `paper`, `scissors`];
		let compChoice = choices[Math.floor(Math.random() * 3)];

		if (playerScore < 5 && compScore < 5) {
	
		if ((playerChoice === `rock` && compChoice === `scissors`) ||
				(playerChoice === `paper` && compChoice === `rock`) || 
				(playerChoice === `scissors` && compChoice === `paper`)) {
	
					roundResult.textContent = `${playerChoice.toUpperCase()} beats ${compChoice}, you win`;
					playerPoints.textContent = `${playerScore+=1}`;
					return playerScore
					
		} else if (playerChoice === compChoice ) {
			roundResult.textContent = `${playerChoice} and ${compChoice} are the same, it's a draw`;
		} else {
			roundResult.textContent = `${compChoice.toUpperCase()} beats ${playerChoice} - you lose, loser`;
			compPoints.textContent = `${compScore+=1}`;
			return compScore;
		}
	} else if (playerScore === 5) {
					winner.textContent = `Your score is ${playerScore} vs. the comp's score of ${compScore}, you win ye lucky prick`;
				} else {
					winner.textContent = `The comp has kicked your ass ${compScore} to ${playerScore}! You lose, chump`;
				};
	};
};

game();

