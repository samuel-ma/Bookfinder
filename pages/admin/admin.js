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

// implementing the search functionality
// Sample book data (can be replaced with actual data from a database or API)
let books = [
    {
        id: 0,
        title: "Funny Story",
        img: "/books/book (1).jpg",
        author: "Julia Whelan",
        date: 2018,
        category: "Comedy",
        rating: 5,
    },

    {
        id: 1,
        title: "Happy Place",
        img: "/books/book (2).jpg",
        author: "Emily Henry",
        date: 2002,
        category: "Adventure",
        rating: 3.8,
    },

    {
        id: 2,
        title: "Good to Great",
        img: "/books/book (3).jpg",
        author: "Jim Collins",
        date: 2016,
        category: "Business",
        rating: 4,
    },

    {
        id: 3,
        title: "It Ends With Us",
        img: "/books/book (4).jpg",
        author: "Colleen Hoover",
        date: 2017,
        category: "Adventure",
        rating: 4.5,
    },

    {
        id: 4,
        title: "The Hunger Games",
        img: "/books/book (5).jpg",
        author: "Suzanne Collins",
        date: 2022,
        category: "Action",
        rating: 4,
    },

    {
        id: 5,
        title: "The Hunter",
        img: "/books/book (6).jpg",
        author: "Tana French",
        date: 2016,
        category: "Action",
        rating: 3.9,
    },
    {
        id: 7,
        title: "Funny Story 2",
        img: "/books/book (1).jpg",
        author: "Julia Whelan",
        date: 2018,
        category: "Comedy",
        rating: 5,
    },

    {
        id: 8,
        title: "Happy Hour",
        img: "/books/book (2).jpg",
        author: "Emily Henry",
        date: 2002,
        category: "Adventure",
        rating: 3.8,
    },

    {
        id: 9,
        title: "Good Morning America",
        img: "/books/book (3).jpg",
        author: "Jim Collins",
        date: 2016,
        category: "Business",
        rating: 4,
    },

    {
        id: 10,
        title: "It Starts With Us",
        img: "/books/book (4).jpg",
        author: "Colleen Hoover",
        date: 2017,
        category: "Adventure",
        rating: 4.5,
    },

    {
        id: 11,
        title: "The Games",
        img: "/books/book (5).jpg",
        author: "Suzanne Collins",
        date: 2022,
        category: "Action",
        rating: 4,
    },

    {
        id: 12,
        title: "The Hunter 4",
        img: "/books/book (6).jpg",
        author: "Tiana Grace",
        date: 2016,
        category: "Action",
        rating: 3.9,
    },
];

// Function to perform live search and update UI
function performSearch(query) {
    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.category.toLowerCase().includes(query.toLowerCase())
    );

    displaySearchResults(filteredBooks);
}

// Function to display search results
function displaySearchResults(results) {
    const itemContainer = document.querySelector(".item-list");
    itemContainer.innerHTML = "";

    results.forEach((book) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
        <p>${book.id}</p>
        <div class="itemi">
          <input placeholder="Choose file" type="file">
        </div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.year}</p>
        <div class="catdot">
          <p>${book.category}</p>
          <p class="dot">···</p>
          <button class="details-btn" data-id="${book.id}">Details</button>
        </div>
      `;
        itemContainer.appendChild(item);
    });

    // Add event listener to details button
    document.querySelectorAll(".details-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const bookId = e.target.getAttribute("data-id");
            // Redirect to details page with bookId parameter
            window.location.href = `/details.html?id=${bookId}`;
        });
    });
}

// Event listener for search input
document.querySelector(".searchi").addEventListener("input", (e) => {
    const query = e.target.value.trim();
    performSearch(query);
});

// Search input on the right side bar with all the items
let searchHistory = [];

function liveSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = ""; // Clear previous results

    // Filter and add matching items
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        const title = item
            .querySelector("p:nth-of-type(3)")
            .textContent.toLowerCase();
        if (title.includes(input)) {
            searchResultsDiv.appendChild(item.cloneNode(true));
        }
    });

    // Add the latest search item to the top of the list
    if (input.trim() !== "") {
        searchHistory.unshift(input);
    }

    // Remove duplicate items
    const uniqueResults = Array.from(new Set(searchHistory));

    // Display search results
    uniqueResults.forEach((item) => {
        if (item.includes(input)) {
            const li = document.createElement("li");
            li.textContent = item;
            searchResultsDiv.appendChild(li);
        }
    });
}

// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

// Get the modal
const modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
const btn2 = document.getElementById("addBookBtn");

// Get the <span> element that closes the modal
const span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function () {
    modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};

// Form submission logic
const form = document.getElementById("addBookForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const newBook = {};
    formData.forEach((value, key) => {
        newBook[key] = value;
    });

    addBook(formData); // Add the new book to the books array
    console.log("Books Array:", books); // Check the updated books array in the console
    modal2.style.display = "none";
    form.reset();
});

// Function to add a new book to the books array
function addBook(formData) {
    const newBook = {
        id: books.length, // Assign a unique ID based on array length
        title: formData.get("title"),
        img: formData.get("img"),
        author: formData.get("author"),
        date: parseInt(formData.get("date")),
        category: formData.get("category"),
        rating: parseFloat(formData.get("rating")),
    };
    books.unshift(newBook);
    updateBookList(); // Update the book list display
}

// Function to update the book list display
function updateBookList() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous list items
    books.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}
