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

// Get the dot element
const dot = document.querySelector(".dot");
// Get the dropdown menu
const dropdown = document.querySelector(".dropdown2");

// Toggle dropdown visibility when dot is clicked
dot.addEventListener("click", function () {
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown when user clicks outside of it
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !dot.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

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
