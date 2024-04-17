// Get the modal element
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("openModalBtn");

// Get the close button element
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// reset the screen everytime the refresh button is clicked
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function () {
    location.reload();
});

// Function to scroll the page to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

document.querySelector(".addb").addEventListener("click", scrollToTop);
