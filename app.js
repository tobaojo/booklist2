
//get values from input
const bookForm = document.querySelector('#book-form').addEventListener('submit' , (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const book = new Book(title, author,isbn);
  const ui = new UI();

  //validate
  if (title || author || isbn === '') {
    checkFields();
  } else {
    //add book to List
    ui.addBookToList(book);

    ui.clearFields();
  }



  e.preventDefault();
});

//book constructor
function Book(title, author, isbn){
  this.title = title;
  this. author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI(){

}


UI.prototype.addBookToList = function (book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
  //insert col
  row.innerHTML = `<td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.isbn}</td>
                  <td><a href='#' class = "delete">X</a></td>`
  list.appendChild(row);
};


UI.prototype.clearFields = function () {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
};

function checkFields(){
  const msg = document.createElement('div')
  msg.classList.add('error');
  msg.innerHTML = 'Please fill in fields'
  const container = document.querySelector('.container')
  container.appendChild(msg);
}
