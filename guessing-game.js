function guessingGame () {
	let rand = Math.floor(Math.random() * 100);
	let guessCount = 0;
	let youWon = false;
	return function (num) {
		if (youWon === true) return "The game is over, you already won!";
		if (rand > num) {
			guessCount++;
			return `${num} is too low!`;
		} else if (rand < num) {
			guessCount++;
			return `${num} is too high!`;
		} else {
			guessCount++;
			youWon = true;
			return `You win! You found ${num} in ${guessCount} guesses.`;
		}
	};
}

module.exports = { guessingGame };
