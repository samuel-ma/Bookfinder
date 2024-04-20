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

const books = [
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

const booksList = document.getElementById("booksList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Function to display books based on search and filter
function displayBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value.toLowerCase();

    const filteredBooks = books.filter((book) => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm);
        const categoryMatch =
            selectedCategory === "" ||
            book.category.toLowerCase() === selectedCategory;
        return titleMatch && categoryMatch;
    });

    booksList.innerHTML = ""; // Clear previous results

    filteredBooks.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
        <img src="${book.img}" alt="${book.title}">
        <div class="book-desc">
            <h3>${book.title}</h3>
            <p><span>Author:</span> ${book.author}</p>
            <p><span>Category:</span> ${book.category}</p>
            <p><span>Date:</span> ${book.date}</p>
        </div>
      `;
        booksList.appendChild(bookCard);
    });
}

// Event listeners for input and select change
searchInput.addEventListener("input", displayBooks);
categoryFilter.addEventListener("change", displayBooks);

// Initial display of books
displayBooks();
