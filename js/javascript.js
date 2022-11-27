const paraBooks = document.querySelector('.books');
const mainContent = document.querySelector('.main-content');
const bookForm = document.querySelector('.book-form');
const addBookButton = document.querySelector('.book-form');
addBookButton.addEventListener('submit', addBookToLibrary);


let bookDiv;
let para;


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    console.log(read);
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    alert(`"${title}" added`);
    bookForm.reset();
    displayBooks();
}


function displayBooks() {
    const bookTable = document.createElement('div');
    mainContent.textContent = "";
    bookTable.classList.add('books');
    myLibrary.forEach((book,index) => {
        //create the card that will have the book
        bookDiv = document.createElement('div');
        bookDiv.classList.add('card');
        
        let isRead = book.read ? `<button style="width:100px" data-position="${index}" onclick="toggleReadButton(event)" class="read-yet">Read Already</button>` : `<button style="width:100px" data-position="${index}" onclick="toggleReadButton(event)" class="not-read-yet">Not Read</button>` + '</p>'
        bookDiv.innerHTML = 
        '<h1>' + `${book.title}` + '</h1>\n'
        + '<p>' + `Author: ${book.author}` + '</p>\n'
        + '<p>' + `Pages: ${book.pages}` + '</p>\n'
        + '<p>Title: ' + `${isRead}`
        + `<p><button onclick="removeBook(event)" data-position="${index}">Remove</button></p>`

        bookTable.appendChild(bookDiv);

    });

    mainContent.appendChild(bookTable);
}


function removeBook(e) {
    let indexToRemove = e.target.getAttribute('data-position');
    myLibrary.splice(indexToRemove, 1);
    displayBooks();
}


function toggleReadButton(event) {
    let indexToToggle = event.target.getAttribute('data-position');
    myLibrary[indexToToggle].toggleRead();
    
    //change button color and text
    event.target.textContent = myLibrary[indexToToggle].read ? 'Read Already' : "Not yet";
    event.target.classList.toggle('read-yet');
    event.target.classList.toggle('not-read-yet');
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}



let book = new Book("tom tom et nana", "Herge", 300, true);
let book2 = new Book("Le seigneur des anneaux", "Tolkien", 600, false);
let book3 = new Book("Naruto", "Kishimoto", 150, true);
myLibrary.push(book, book2, book3);
displayBooks();









