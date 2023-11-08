function Book(title, author, pages, status) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status);

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${status}`;
  };
}
const myLibrary = [];

const lotr = new Book("The Hobbit", "J.R.R Tolkein", 295, "not read");
const lotr2 = new Book("The Hobbit", "J.R.R Tolkein", 295, "not read");

myLibrary.push(lotr);
myLibrary.push(lotr2);


function addBook(){

myLibrary.forEach((item) =>{

const container = document.querySelector(".container");

// Create a new div element.
const card = document.createElement("div");

// Set the class attribute of the div element to "card grid".
card.classList.add("card");
card.classList.add("grid");

// Create a new paragraph element for the title.
const title = document.createElement("p");
title.classList.add("title");
title.textContent = item.title;

// Create a new paragraph element for the author.
const author = document.createElement("p");
author.classList.add("author");
author.textContent = item.author;

// Create a new paragraph element for the pages.
const pages = document.createElement("p");
pages.classList.add("pages");
pages.textContent = item.pages;

// Create a new paragraph element for the status.
const status = document.createElement("p");
status.classList.add("status");
status.textContent = item.status;

// Append the paragraph elements to the div element.
card.appendChild(title);
card.appendChild(author);
card.appendChild(pages);
card.appendChild(status);

// Append the div element to the body tag element.
container.appendChild(card);

});
}
// addBook();


const contain = document.querySelector("body");
const btn = document.createElement("button");
btn.classList.add("btn");
btn.innerHTML = "Add Book"
contain.appendChild(btn);

btn.addEventListener('click',()=>{
      const dia = document.querySelector("dialog");
      dia.showModal();
})


const sub = document.querySelector(".sub");
sub.addEventListener('click',()=>{
      //closes modal
      const dia = document.querySelector("dialog");
      dia.close();
      //get values
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;
      const status = document.getElementById('status').value;

      const newBook = new Book(title, author, pages, status);
      myLibrary.push(newBook);
      addBook();
/* implement a way to read values from inputs and
   create a new Book object from them and store inside
   the array.
*/
})

function addNew(){
// get value from the dialog inputs

}
addNew();
