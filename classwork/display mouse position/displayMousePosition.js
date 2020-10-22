var tracking = false;
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");
var btnStartTrack = document.getElementById("btnStartTrack");
var btnStopTrack = document.getElementById("btnStopTrack");

// Adjusts the page when tracking is enabled.
function toggleStartTrack() {
    // 'this' here is the HTML element that triggered the event (i.e. the button).

    // classList is an array-like collection of CSS class names:
    // (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    // It allows us to treat class names individually 
    // instead of setting all classes at once:
    // element.className = "btn btn-default btn-lrg"

    // Disable the other button and highlight this one.
    if (!tracking) {
        btnStopTrack.classList.remove("btn-success");
        btnStopTrack.classList.add("btn-default");

        this.classList.add("btn-success");
        this.innerText = "Start mouse tracking.";

        tracking = true;
    }
    // Nothing happens if the button is clicked on while it's active.
}

// Adjusts the page when tracking is disabled.
function toggleStopTrack() {
    
    if (tracking) {
        btnStartTrack.classList.remove("btn-success");
        btnStartTrack.classList.add("btn-default");

        this.classList.add("btn-success");
        this.innerText = "Start mouse tracking.";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
        tracking = false;
    }
}

function updateMousePosition(evt) {
    // If tracking is enabled, update the view.
    if (tracking) {
        // 'evt' is a JavaScript event object.
        // It contains different properties depending on the type of event:
        // click, submit, mouseover, even media playback 
        // (https://developer.mozilla.org/en-US/docs/Web/Events).
        // Our mouse's position in X and Y coordinates is clientX, clientY.
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }
}

// Add listeners to the HTML elements.
btnStartTrack.addEventListener("click", toggleStartTrack);
btnStopTrack.addEventListener("click", toggleStopTrack);
document.addEventListener("mousemove", updateMousePosition);