class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}


class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    deleteBook(index){
        this.books.splice(index, 1);
        this.renderBook();
    }

    renderBook(){
        let tableBody = document.querySelector('.tableBody');
        tableBody.innerHTML = '';

        this.books.forEach((book, index)=>{
            let newRow = document.createElement('tr');
     
             newRow.innerHTML = 
             `
                 <td style="text-align:left;">
                     ${book.title}
                 </td>
                 <td style="text-align:left;">
                     ${book.author}
                 </td>
                 <td>${book.pages}</td>
                 <td onclick="library.toggleRead(${index})">
                     <button type="button">
                         ${book.read ? "Read" : "Not Read"}
                     </button>
                 </td>
                 <td>
                     <button type="button" onclick="library.deleteBook(${index})">Delete</button>
                 </td>
             `;
             tableBody.appendChild(newRow);
        });
    }

    toggleRead(index){
        this.books[index].toggleRead();
        this.renderBook();
    }
}

// *library class
const library = new Library();

function addBookToLibrary() {
    const title = document.querySelector('#bookTitle').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#bookPages').value;
    const read = document.querySelector('#read').value === true;
    
    const newBook = new Book(title, author, pages, read);
    
    library.addBook(newBook);
    library.renderBook();
    
    // *clear fields
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#bookPages').value = '';
    document.querySelector('#read').value = false;
}

const form = document.querySelector('.formBook');

document.querySelector('.addBook').addEventListener('click', ()=>{
    form.style.display = 'flex';
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    form.style.display = 'none';
});

library.renderBook();