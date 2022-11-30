


class Library {
    constructor() {
        this.library = [];
    }

    get library() {
        return this._library;
    }

    set library(library) {
        this._library = library;
    }

    addBooks(...books) {
        this.library.push(...books);
    }

    removeBook(index) {
        this.library.splice(index, 1);
        this.displayBooks();
    }

    initializeForm() {
        const addBookButton = document.querySelector('.book-form');
        addBookButton.addEventListener('submit', this.addBookToLibrary);
    }

    addBookToLibrary = (e) => {
        e.preventDefault();
        const bookForm = document.querySelector('.book-form');
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read').checked;
        let book = new Book(title, author, pages, read);
        this.library.push(book);
        alert(`"${title}" added`);
        bookForm.reset();
        this.displayBooks();
    }

    toggleReadButton(event, index) {
        this.library[index].toggleRead();
        
        //change button color and text
        event.target.textContent = this.library[index].read ? 'Read Already' : "Not yet";
        event.target.classList.toggle('read-yet');
        event.target.classList.toggle('not-read-yet');
    }

    displayBooks() {
        const mainContent = document.querySelector('.main-content');
        let bookDiv;
        let btnRemove;
        const bookTable = document.createElement('div');
        mainContent.textContent = "";
        bookTable.classList.add('books');
        this.library.forEach((book,index) => {
            btnRemove = document.createElement('p');
            //create the card that will have the book
            bookDiv = document.createElement('div');
            bookDiv.classList.add('card');
            

            let btnRead = document.createElement("span");
            let btnNotRead = document.createElement("span");
            btnRead.innerHTML = `<p>Read? <button style="width:100px" data-position="${index}" class="read-yet">Read Already</button></p>`
            btnRead.addEventListener('click', (e) => this.toggleReadButton(e,`${index}`))
            btnNotRead.innerHTML = `<p> Read? <button style="width:100px" data-position="${index}" class="not-read-yet">Not Read</button></p>`
            btnNotRead.addEventListener('click', (e) => this.toggleReadButton(e, `${index}`))
            let isRead = book.read ? btnRead : btnNotRead;
            bookDiv.innerHTML = 
            '<h1>' + `${book.title}` + '</h1>\n'
            + '<p>' + `Author: ${book.author}` + '</p>\n'
            + '<p>' + `Pages: ${book.pages}` + '</p>\n'

            bookDiv.appendChild(isRead)

            btnRemove.innerHTML = `<button class="btn-remove" data-position="${index}">Remove</button>`
            btnRemove.addEventListener('click', (e) => this.removeBook(e.target.getAttribute("data-position")));
            bookDiv.appendChild(btnRemove);
            bookTable.appendChild(bookDiv);

                    
    
        });
    
        mainContent.appendChild(bookTable);
    }

}

class Book{
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }

}





const LibraryInitializer = (() => {    
    let book = new Book("tom tom et nana", "Herge", 300, true);
    let book2 = new Book("Le seigneur des anneaux", "Tolkien", 600, false);
    let book3 = new Book("Naruto", "Kishimoto", 150, true);
    let myLibrary = new Library();
    
    myLibrary.addBooks(book, book2, book3);
    myLibrary.displayBooks();
    myLibrary.initializeForm();
})();
















