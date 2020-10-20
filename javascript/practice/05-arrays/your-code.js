// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// 1. FIND MAX
// ============
// Create a function named `findMax` that takes one parameter: an array of numbers named `numbers`.
// Find the maximum number in the array and return it.
// Tip: Start with 2 numbers in the array. Once the function works with 2 numbers, add a third, and so on.
// Write your code here:
function findMax(numbers) {
    var maxNum;

    for (var i = 0; i < numbers.length; i++) {
        if (maxNum === undefined) {
            maxNum = numbers[i];
        } else if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}

// Open index.html in your browser, open the JavaScript console, confirm the result.

// Uncomment the code below to verify your function is working.
console.log("findMax =====");
var numbers = [46, 3, 40, 74, 63];
var actual = findMax(numbers);
console.log("[46, 3, 40, 74, 63] -> expected: 74, actual: %s", actual);
numbers = [3, 3, 3, 3];
actual = findMax(numbers);
console.log("[3, 3, 3, 3] -> expected: 3, actual: %s", actual);
numbers = [-1];
actual = findMax(numbers);
console.log("[-1] -> expected: -1, actual: %s", actual);


// 2. COMBINE ARRAYS
// =================
// Create a function named `combine` that takes two array parameters. Any type of array will do.
// The function should create a new, empty array and then add all elements from each parameter array to it.
// The function should NOT alter either parameter.
// Write your code here:
function combine(array1, array2) {
    var newArray = Array();

    for (var i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
    }

    for (var i = 0; i < array2.length; i++) {
        newArray.push(array2[i]);
    }
    // console.log(newArray);
    return newArray;
}


// Uncomment the code below to verify your function is working.
// NOTE: Changed the console logs to show array contents instead of "Array(ARRAY LENGTH)".
console.log("combine =====");
var merged = combine(["Oak", "Maple", "Birch"], ["Hydrogen", "Helium"]);
console.log("expected: Oak,Maple,Birch,Hydrogen,Helium\nactual: " + merged);
merged = combine([12.5, 3, 855], [true, false, true]);
console.log("expected: 12.5,3,855,true,false,true\nactual: " + merged);
merged = combine(["Saturn"], ["Black Lab", "Borzoi", "Pug"]);
console.log("expected: Saturn,Black Lab,Borzoi,Pug\nactual: " + merged);


// 3. CHALLENGE: SUBTRACT AN ARRAY
// ====================
// Create a function named `subtractArray` that takes two array parameters.
// The function should return a new array that includes all elements from the first array
// that do not exist in the second array. In effect, we "subtract" the elements in the second array
// from the first and return the result.
// The function should NOT alter either parameter.
// Write your code here:
function subtractArray(mainArray, removeArray) {
    var newArray = Array();

    // Copy contents of the main array to the newArray. 
    for (var i = 0; i < mainArray.length; i++) {
        newArray.push(mainArray[i]);
    }

    // Remove any matching elements from the newArray.
    for (var i = 0; i < removeArray.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
            if (newArray[j] === removeArray[i]) {
                // Remove the matching element using slicing.
                // Basically making two slices without the matching element
                // and then putting the slices back together.
                firstHalf = newArray.slice(0, j);
                secondHalf = newArray.slice(j + 1, newArray.length);
                newArray = firstHalf

                // Add elements of the second half of newArray.
                for (var k = 0; k < secondHalf.length; k++) {
                    newArray.push(secondHalf[k]);
                }
                // Reset the index to the previous to re-iterate the current index.
                // NOTE: It's possible to skip an element without resetting the index.
                j--; 
            }
        }
    }
    return newArray;
}


// Uncomment the code below to verify your function is working.
// NOTE: Changed the console logs to show array contents instead of "Array(ARRAY LENGTH)".
console.log("subtractArray =====");
var result = subtractArray([1, 2, 3, 4, 5], [2, 4, 6]);
console.log("expected: 1,3,5\nactual: " + result);
result = subtractArray(["Neptune", "Uranus", "Saturn", "Pluto"], ["Pluto"]);
console.log("expected: Neptune,Uranus,Saturn\nactual: " + result);
result = subtractArray([1, 1, 2, 3, 1, 2, 3, 1, 2, 3], [1, 3]);
console.log("expected: 2,2,2\nactual: " +  result);





/**********************************
 * The Software Guild
 * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
 *********************************/