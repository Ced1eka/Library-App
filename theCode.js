class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.status}`;
  }
}

class Library{

  constructor(){
    this.books = [];

  }

  addBook(book){
    this.books.push(book)
  }

  addNew() {
    //this holds reference to the last latest new book
    const aNewBook = this.books[this.books.length - 1];

    const container = document.querySelector(".container");

    // Create a new div element.
    const card = document.createElement("div");

    // Set the class attribute of the div element to "card grid".
    card.classList.add("card");
    card.classList.add("grid");
    card.dataset.bookNumber = this.books.length - 1;

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
    if (aNewBook.status === "not-read") {
      status.selectedIndex = 1;
    } else status.selectedIndex = 0;

    //modify status
    status.addEventListener("change", () => {
      if (status.value === "1") {
        status.selectedIndex = 0;
        aNewBook.status = "read";
      } else {
        status.selectedIndex = 1;
        aNewBook.status = "not read";
      }
      // console.table(myLibrary)
    });

    //Add in a button element to delete the entire book
    const del = document.createElement("button");
    del.classList.add("delete");
    del.dataset.bookNumber = this.books.length - 1;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>`;
    svg.innerHTML = svgString;
    del.appendChild(svg);

    // Append the paragraph elements to the div element.
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(del);

    // Append the div element to the body tag element.
    container.appendChild(card);

    // add delete book function
    del.addEventListener("click", () => {
      const cardNum = card.dataset.bookNumber;
      this.books.splice(cardNum, 1);
      // const par =  del.parentElement;
      const divNum = document.querySelector(`[data-book-number="${cardNum}"]`);
      divNum.remove();
      document.querySelectorAll(".card").forEach((divNum, index) => {
        divNum.dataset.bookNumber = index;
      });
    });
  }

  render() {
    this.books.forEach((item, index) => {
      const container = document.querySelector(".container");

      // Create a new div element.
      const card = document.createElement("div");

      // Set the class attribute of the div element to "card grid".
      card.classList.add("card");
      card.classList.add("grid");
      card.dataset.bookNumber = index;

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

      //Add in a button element to delete the entire book
      const del = document.createElement("button");
      del.classList.add("delete");
      del.dataset.bookNumber = index;

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>`;
      svg.innerHTML = svgString;
      del.appendChild(svg);

      // Append the paragraph elements to the div element.
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(status);
      card.appendChild(del);

      // Append the div element to the body tag element.
      container.appendChild(card);

      // add delete book function
      del.addEventListener("click", () => {
        const cardNum = card.dataset.bookNumber;
        this.books.splice(cardNum, 1);
        // const par =  del.parentElement;
        const divNum = document.querySelector(`[data-book-number="${cardNum}"]`);
        divNum.remove();
        document.querySelectorAll(".card").forEach((divNum, index) => {
          divNum.dataset.bookNumber = index;
        });
      });
    });
  }



}


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

//submit btn does this
const sub = document.querySelector(".sub");
sub.addEventListener("click", () => {
  //closes modal
  const dia = document.querySelector("dialog");
  dia.close();
  //get values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const logg = document.getElementById("mod-status");
  // const status = logg.options[logg.selectedIndex].value;
  const status = logg.selectedIndex !== -1 ? logg.options[logg.selectedIndex].value : "not read";

  const newBook = new Book(title, author, pages, status);
  // console.log(newBook);
  myLibrary.addBook(newBook);
  myLibrary.addNew();
});

const dia = document.querySelector("dialog");
dia.addEventListener("close", () => {
  const title = document.getElementById("title");
  title.value = "";
  const author = document.getElementById("author");
  author.value = "";
  const pages = document.getElementById("pages");
  pages.value = "";
  const status = document.getElementById("mod-status");
  status.selectedIndex = 0;
});

//creates the library
const myLibrary = new Library();

//temp books just to populate space
const tH = new Book("The Hobbit", "J.R.R Tolkein", 295, "not read");
const lotr = new Book("The Lord of the Rings", "J.R.R Tolkein", 1216, "read");
const lotr2 = new Book("some book", "Me", 68, "not read");


//add books to library
myLibrary.addBook(lotr);
myLibrary.addBook(tH);
myLibrary.addBook(lotr2);
myLibrary.render()
