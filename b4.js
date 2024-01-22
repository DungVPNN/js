function Product(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
let product1 = new Product();
 product1.id = +prompt("Nhap id");
 product1.name = prompt("Nhap name");
 product1.price = +prompt("Nhap price");
 product1.quantity = prompt("Nhap quantity");
 console.log(product1);