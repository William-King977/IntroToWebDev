// Rolls a die based on the number of sides.
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

// Ask the user for number of sides and the amount of rolls.
var numSides = prompt("How many sides does the die have?"); 
var numDice = prompt("How many dice are you using?");

for (var i = 0; i < numDice; i++) {
    console.log(rollDice(numSides));
}