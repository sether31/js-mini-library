const myLibrary = [
  /*  {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        pages: 281,
        read: 'Not Read'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        read: 'Read'
    }
        */
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary() {
  let title = document.querySelector('#bookTitle');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#bookPages');
  let read = document.querySelector('#read');

  const newBook = new Book(title.value, author.value, pages.value, read.value);

  myLibrary.push(newBook);
  renderBook();

  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
}


const form = document.querySelector('.formBook');

document.querySelector('.addBook').addEventListener('click', ()=>{
    form.style.display = 'flex';
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addBookToLibrary();
});

function renderBook(){
   let tableBody = document.querySelector('.tableBody');

   tableBody.innerHTML = '';

   for(let i = 0; i < myLibrary.length; i++){
    let newRow = document.createElement('tr');
    let book = myLibrary[i];

    newRow.innerHTML = 
        `
            <td style="text-align:left;">
                ${book.title}
            </td>
            <td style="text-align:left;">
                ${book.author}
            </td>
            <td>${book.pages}</td>
            <td onclick="toggleRead(${i})">
                <button type="button">
                    ${book.read ? "Read" : "Not Read"}
                </button>
            </td>
            <td>
                <button type="button" onclick="deleteBook(${i})">Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);
   };
}

renderBook();

function deleteBook(index){
    myLibrary.splice(index, 1);
    renderBook();
}


Book.prototype.isRead = function(){
    this.read = !this.read;
}

function toggleRead(i){
    myLibrary[i].isRead();
    renderBook();
}

