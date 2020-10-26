/*
Name: William King
Restaurant Site
Date Created: 24/10/2020
Most recent revision: 26/10/2020
Submission Date: 26/10/2020
*/

var contactForm = document.forms["contact"];

// Refreshes the page.
function resetForm() {
	contactForm.className = "needs-validation";
}

// Validates the form input.
function validate() {
	contactForm.className = "needs-validation";

	if (!contactForm.checkValidity()) {
		contactForm.className = "was-validated"
		return false;
	}

	alert("The form input is valid.");
	return false; // Doesn't actually submit the form.
}