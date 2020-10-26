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

	return false; // Doesn't actually submit the form.
}