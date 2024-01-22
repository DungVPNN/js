class Information {
    constructor (id, name, phone, address){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}
let information = new Information();
information.id = +prompt("Nhap id");
information.name = prompt("Nhap ten");
information.phone = +prompt("Nhap SDT");
information.address = prompt("Nhap dia chi");
console.log(information);
