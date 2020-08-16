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

UI.prototype.deleteBook = function(target){
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();

  }
}

UI.prototype.clearFields = function () {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
};

UI.prototype.showAlert = function(message, className){
  const div = document.createElement('div')
  div.className = `alert ${className}`
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container')
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  //timeout after  3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}

//get values from input
const bookForm = document.querySelector('#book-form').addEventListener('submit' , (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const book = new Book(title, author,isbn);
  const ui = new UI();

  //validate
  if (title === ''|| author === ''|| isbn === '') {
    ui.showAlert('please fill in all fields', 'error');
  } else {
    //add book to List
    ui.addBookToList(book);

    ui.showAlert('book added', 'success')

    ui.clearFields();
  }



  e.preventDefault();
});


//add event listener for delete

document.querySelector('#book-list').addEventListener('click',function(e){
  const ui = new UI();
  ui.deleteBook(e.target);

  ui.showAlert('book Removed', 'success');

  e.preventDefault();
})
