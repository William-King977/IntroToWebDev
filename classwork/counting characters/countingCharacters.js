// Counts number of characters in a string.
function countingCharacters(stringToCount) {
    console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

// Counts number times a character appears in a string.
function countingCharacters2(stringToCount, characterToFind) {
    var characterCount = 0;
    for (var position = 0; position < stringToCount.length; position++) {
        if (stringToCount[position] === characterToFind) {
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}

// Counts the number of times a substring occurs in a string.
// WORKS FOR SINGLE CHARACTERS AS WELL.
// str - The substring, search - The string being searched.
function countingCharacters3(str, search) {
    var count = 0;
    var numChar = search.length;

    // Used to prevent looping past the end of the string.
    var lastIndex = str.length - numChar;

    for (var index = 0; index <= lastIndex; index++) {
        var current = str.substring(index, index + numChar);
        if (current == search) {
            count++;
        }
    }
    return count;
}