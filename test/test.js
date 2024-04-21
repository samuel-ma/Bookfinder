// Define the books array
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

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("addBookBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
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
    modal.style.display = "none";
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

// Function to add a new book to the beginning of the books array
function addBook(formData) {
    const newBook = {
        id: books.length,
        title: formData.get("title"),
        img: formData.get("img"),
        author: formData.get("author"),
        date: parseInt(formData.get("date")),
        category: formData.get("category"),
        rating: parseFloat(formData.get("rating")),
    };
    books.unshift(newBook);
    updateBookList();
}

// Function to update the book list display
function updateBookList() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous list items
    books.forEach((book) => {
        const li = document.createElement("li");
        li.dataset.bookId = book.id;
        li.textContent = `${book.title} by ${book.author}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";
        li.appendChild(deleteBtn);
        bookList.appendChild(li);
    });
}

// Function to delete a book from the books array
function deleteBook(id) {
    books = books.filter((book) => book.id !== id);
    updateBookList();
}

// Initialize book list on page load
updateBookList();

// Event delegation to handle delete button clicks
const bookList = document.getElementById("bookList");
bookList.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        const li = event.target.parentElement;
        const bookId = parseInt(li.dataset.bookId, 10);
        deleteBook(bookId);
    }
});

// Live search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
    );
    updateBookList(filteredBooks);
});
