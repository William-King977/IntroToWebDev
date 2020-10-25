var luckySevens = document.forms["luckySevens"];
var resultsTable = document.getElementById("results-table");
var startBet = document.getElementById("startBet");

// Validates the inputted bet.
function validate() {
	luckySevens.className = "needs-validation";

	// Validate using bootstrap.
	if (!luckySevens.checkValidity()) {
		luckySevens.className = "was-validated";
		return false
	}

	playLuckySevens();
	return false;
}

// Runs the lucky sevens game.
function playLuckySevens() {
	var startBetNum = parseInt(startBet.value, 10);
	var highestWon = startBetNum;
	var rollsAtHighestWon = 0;
	var totalRolls = 0;
	var bet = startBetNum;

	// Run until there's no money left.
	while (bet > 0) {
		var rollTotal = rollDice(2);
		totalRolls += 2; // Rolling two dice at a time.

		if (rollTotal == 7) {
			bet += 4;
			// Update highest winnings if needed.
			if (bet > highestWon) {
				highestWon = bet;
				rollsAtHighestWon = totalRolls;
			}
		} else {
			bet--;
		}
	}

	// Putting results on the table.
	document.getElementById("startingBet").innerText = "$" + startBetNum;
	document.getElementById("rollsBeforeBroke").innerText = totalRolls;
	document.getElementById("highestWon").innerText = "$" + highestWon;
	document.getElementById("rollsAtHighestWon").innerText = rollsAtHighestWon;

	// Adjust button text and show the results section.
	document.getElementById("submitButton").innerText = "Play Again";
	document.getElementById("results-section").style.display = "block";
}

// Rolls a die based on the number of dice and returns the total.
function rollDice(numDice) {
	var rollTotal = 0;

	for (var i = 0; i < numDice; i++) {
		rollTotal += Math.floor(Math.random() * 6) + 1;
	}
	return rollTotal;
}