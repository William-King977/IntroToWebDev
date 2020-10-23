// These elements will be used in both functions.
var displayEvens = document.forms["displayEvens"];
var startNum = document.getElementById("startNum");
var endNum = document.getElementById("endNum");
var step = document.getElementById("step");
var submitButton = document.getElementById("submitButton");

// Validate the form inputs.
function validate() {
    displayEvens.className = "needs-validation";
    endNum.setCustomValidity("");
    endNum.reportValidity();

    // Validate using bootstrap (provides basic validation).
    if (!displayEvens.checkValidity()) {
        displayEvens.className = "was-validated";
        return false;
    }
    
    // Converts input to base 10 integer.
    var start = parseInt(startNum.value, 10);
    var end = parseInt(endNum.value, 10);
    var steps = parseInt(step.value, 10);

    // Checks if the starting number is bigger than the ending number.
    // A seperate message will display.
    if (start >= end) {
        endNum.setCustomValidity("Ending Number must be greater than Starting Number.");
        endNum.reportValidity();
        return false;
    } 

    // Use innerHTML to modify the results (visually).
    document.getElementById("results").innerHTML = "Here are the even numbers between " + start + 
                                                    " and " + end + " by " + steps + "'s: <br />";
    for (var i = start; i <= end; i+= steps) {
        if (i % 2 == 0) {
            document.getElementById("results").innerHTML += i + "<br />";
        }
    }

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

function getNum() {
    return parseInt(startNum.value, 10);
}