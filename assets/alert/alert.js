document.addEventListener("DOMContentLoaded", function() {
var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-button");

// Show the modal when the page loads
modal.style.display = "flex";

// Close the modal when the close button is clicked
closeButton.onclick = function() {
modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
});
