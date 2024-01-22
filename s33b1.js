let person = {
    name: "Gia Thieu",
    age: 18,
    address: "Ha Noi"
};
console.log(person);
person.dateOfBirth = new Date("20-06-2005");
console.log(person);
delete person.age;
console.log(person);