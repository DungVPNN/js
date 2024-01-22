class Information {
    constructor (id, name, phone, address){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
}
let information = new Information();
information.id = +prompt("Nhap id");
information.name = prompt("Nhap ten");
information.phone = +prompt("Nhap SDT");
information.address = prompt("Nhap dia chi");
information.email = prompt("Nhap email");
delete information.address

console.log(information);
