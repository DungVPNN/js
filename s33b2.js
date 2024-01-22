let phoneBook = {
    contract1: {
        name: "Thieu",
        phone: "09832431",
        email: "Thieuabc@gmail.com",
    },
    contract2: {
        name: "Vy",
        phone: "039842321",
        email: "Vybuu123@gmail.com",
    },
}
for(let key in phoneBook){
    console.log(`Name: ${phoneBook[key].name},
Phone: ${phoneBook[key].phone},
Email: ${phoneBook[key].email}`)
};