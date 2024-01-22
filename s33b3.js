let phoneBook = {
    contract: {
            name: "Thieu",
            phone: "09832431",
            email: "Thieuabc@gmail.com",
        displayInfo(){
            for(let key in phoneBook){
                console.log(`Name: ${phoneBook[key].name},
Phone: ${phoneBook[key].phone},
Email: ${phoneBook[key].email}
-------------------------`);
            }
        },
    },
    create(){
        this.contract.id=Object.keys(this.contract).length
        return this.contract;
    }
};
phoneBook.contract.displayInfo();