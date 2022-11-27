const paraBooks = document.querySelector('.books');

let bookDiv;
let para;


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    var bookName = prompt("Please add a book : ");
    myLibrary.push(new Book(bookName));
}

let book = new Book("tom tom et nana", "Herge", 300, true);
let book2 = new Book("Le seigneur des anneaux", "Tolkien", 600, false);
let book3 = new Book("Naruto", "Kishimoto", 150, true);
let book4 = new Book("Naruto", "Kishimoto", 150, true);
let book5 = new Book("Naruto", "Kishimoto", 150, true);
let book6 = new Book("Naruto", "Kishimoto", 150, true);

myLibrary.push(book, book2, book3, book4, book5, book6);


function displayBooks() {
    const bookTable = document.createElement('div');
    bookTable.classList.add('books');
    myLibrary.forEach(book => {
        //create the card that will have the book
        bookDiv = document.createElement('div');
        bookDiv.classList.add('card');
        

        bookDiv.innerHTML =
        '<h1>' + `Title: ${book.title}` + '</h1>\n'
        + '<p>' + `Author: ${book.author}` + '</p>\n'
        + '<p>' + `Pages: ${book.pages}` + '</p>\n'
        + '<p>' + `Title: ${book.read ? 'Already read' : 'Not read yet'}` + '</p>\n'

        bookTable.appendChild(bookDiv);

    });

    document.body.appendChild(bookTable);
}


displayBooks();









