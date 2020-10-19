var testArray = [];
var sum = 0;

// Ask the user for five numbers and store them in an arry.
for (var i = 0; i < 5; i++) {
    var newElement = prompt("Enter a number of your choice: ");
    newElement = parseInt(newElement);
    testArray.push(newElement);
}

// Add the five numbers together from the array.
for (var position = 0; position < testArray.length; position++) {
    sum += testArray[position];
}

console.log("The sum of " + testArray + " is " + sum);