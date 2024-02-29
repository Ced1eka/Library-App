
const myLibrary = [
      {name: "The Hobbit", author: "J.R.R. Tolkein", pageNumbers: 295},
      {name: "The Lord of the Rings", author: "J.R.R. Tolkein", pageNumbers: 1216}
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
 function displayBooks(){
      // used the forEach method cause it has array methods on it???
      myLibrary.forEach(function(book){
            console.log(`${book.name}: ${book.author}, pages:${book.pageNumbers}`)
      })
 }