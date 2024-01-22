function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.display = function() {
      console.log("Title: " + this.title);
      console.log("Author: " + this.author);
      console.log("Published Year: " + this.publishedYear);
    }
  }
  function()