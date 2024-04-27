// When the user clicks on <span> (x), close the modal
function closeModal() {
    var modal = document.getElementById("warningModal");
    modal.style.display = "none";
}

// When the site loads, open the warning modal
window.onload = function() {
    var modal = document.getElementById("warningModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        closeModal();
    }

    // Also close if anywhere outside of the modal content is clicked
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}
