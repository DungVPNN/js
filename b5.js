class book{
    constructor(name, author){
        this.name = name;
        this.author = author;    
    }
}
let books= [
    book1 = new book("Thieu","Duong"),
    book2 = new book("Vy")
];
let searchAuthor = prompt("Nhập tên");
let foundBook = books.find( book => book.author == searchAuthor);
if (foundBook) {
    console.log(foundBook);
} else {
    console.log("Không tìm thấy");
}