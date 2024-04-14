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

// working with the dropdown
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn") && event.target == modal) {
        modal.style.display = "none";
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};
