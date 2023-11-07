function Book(title, author, pages, status) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status);

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${status}`;
  };
}

const lotr = new Book("The Hobbit", "J.R.R Tolkein", 295, "not read");

console.log(lotr.info())
