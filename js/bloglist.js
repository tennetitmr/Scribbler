
bloglist.js

var modal = document.querySelector(".trash-modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

/**
 * function to toggle visibility of modal
 */
function toggleModal() {
    modal.classList.toggle("trash-show-modal");
}

/**
 * function to handle window click
 */
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

/**
 * This will call toggleModal function when trigger class is clicked
 */
$(".trigger").on("click", function (event) {
    toggleModal();
});

/**
 Adding close button event and added window events.
 */
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
