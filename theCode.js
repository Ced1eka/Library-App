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

const tH = new Book("The Hobbit", "J.R.R Tolkein", 295, "not read");
const lotr = new Book("The Lord of the Rings", "J.R.R Tolkein", 1216, "read");

myLibrary.push(tH);
myLibrary.push(lotr);

function addBook() {
  myLibrary.forEach((item) => {
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

    // Create a new select element for the status.
    const status = document.createElement("select");
    status.setAttribute("name", "status");
    status.setAttribute("id", "status");
    //add options as values
    const read = document.createElement("option");
    read.value = "read";
    read.textContent = "read";
    const notRead = document.createElement("option");
    notRead.value = "not read";
    notRead.textContent = "not read";
    status.appendChild(read);
    status.appendChild(notRead);

    if (item.status === "not read") {
      status.selectedIndex = 1;
    } else status.selectedIndex = 0;

    // Append the paragraph elements to the div element.
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);

    // Append the div element to the body tag element.
    container.appendChild(card);
  });
}
addBook();

//append a button to the body
const contain = document.querySelector("body");
const btn = document.createElement("button");
btn.classList.add("btn");
btn.innerHTML = "Add Book";
contain.appendChild(btn);

btn.addEventListener("click", () => {
  const dia = document.querySelector("dialog");
  dia.showModal();
});

const sub = document.querySelector(".sub");
sub.addEventListener("click", () => {
  //closes modal
  const dia = document.querySelector("dialog");
  dia.close();
  //get values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("mod-status");
  const logg = status.options[status.selectedIndex].value;
  const newBook = new Book(title, author, pages, logg);
  console.log(newBook)
  myLibrary.push(newBook);
  addNew();
});

function addNew() {
  const aNewBook = myLibrary[myLibrary.length - 1];
  const container = document.querySelector(".container");

  // Create a new div element.
  const card = document.createElement("div");

  // Set the class attribute of the div element to "card grid".
  card.classList.add("card");
  card.classList.add("grid");

  // Create a new paragraph element for the title.
  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = aNewBook.title;

  // Create a new paragraph element for the author.
  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = aNewBook.author;

  // Create a new paragraph element for the pages.
  const pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = aNewBook.pages;

  // Create a new select element for the status.
  const status = document.createElement("select");
  status.setAttribute("name", "status");
  status.setAttribute("id", "status");
  //add options as values
  const read = document.createElement("option");
  read.value = "1";
  read.textContent = "read";
  const notRead = document.createElement("option");
  notRead.value = "2";
  notRead.textContent = "not read";
  status.appendChild(read);
  status.appendChild(notRead);
console.log(aNewBook.status)
  if (aNewBook.status === "not-read") {
    status.selectedIndex = 1;
  } else status.selectedIndex = 0;

  // Append the paragraph elements to the div element.
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(status);

  // Append the div element to the body tag element.
  container.appendChild(card);
}
