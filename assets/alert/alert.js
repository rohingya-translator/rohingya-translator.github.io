    document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById("modal");
        var closeButton = document.getElementById("close-button");

        modal.style.display = "flex";

        closeButton.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
