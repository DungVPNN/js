

// let person2 = {
//     // key : value
//     name: "TRAN DUONG",
//     age : 19,
//     school: "PTIT",
//     curly: "Lúa đổ miền quê",
//     // methods
//     eat: function () {
//      console.log("an nhu heo");

//     },
//     flirnt: function () {
//         console.log("Chao em");
//     },  
//     thuagame: function(){
//         console.log("Cut me may di");
//     },
// };

// let sudent1 = {
//     name: "Gia thieu",
//     age: 18,
//     grade: "good",
// };
// let sudent2 = {
//     name: "Duong ngu",
//     age: 18,
//     grade: "good",
// };
// let sudent3 = {
//     name: "Vy ngu",
//     age: 18,
//     grade: "good",
// };


// function Student(name, age, grade) {
    // this.name = name;
    // this.age = age;
    // this.grade = grade;
    // this.introduce = function(){
    //     console.log(this);
    //     console.log(`Hello,my name is ${this.name}`);
    // }
// }
// let student1 = new Student("Gia thieu", 18, "Good");
// let student2 = new Student("Duong ngu", 18, "Bad");
// let student3 = new Student("Vy ngyu", 18, "Average");

// console.log("Student 1", student1);
// console.log("Student 2", student2);
// console.log("Student 3", student3);



// student1.introduce();
// student2.introduce();
// student3.introduce();


// 


// let person = {
//        // key : value
//        name: "Gia thieu",
//        age : 19,
//        school: "PTIT",
//        curly: "Lúa đổ miền quê",
//        // methods
//        eat: function () {
//         console.log("eat fast");

//        },
//        flirnt: function () {
//            console.log("Chao em");
//        },
//       thuagame: function(){
//      console.log("Dmm cay the nho");
// },
// };
// console.log("Doi tuong person", person);
// person.height = 1.93;
// person.weight = "90kg";
// console.log("Doi tuong person dc them height va weight",person);

// console.log(`Xin chao ${person.name}, ban co ny chua`);
// console.log(`toc cua ${person["name"]}, nhu ${person["curly"]}`);



// for( let key in person){
//     console.log(key, person[key]);
// }
// // uppdate
// person.name("Gia thieu nopro");
// console.log(person);
// // delete
// delete person.curly;
// console.log(person);


// class Student {
//     constructor(id,name){
//         this.id = id;
//         this.name =name;
//     }
//  }

// const students = [
// new Student(1,"Khanh Huyen"),
// new Student(2,"Thieu Ngu"),
// new Student(3,"Aura"),
// ]
// console.log("Danh sach sinh vien", students);
// console.log("id:",students[0].id);
// console.log("name:",students[0].name);


// console.log("id:",students[1].id);
// console.log("name:",students[1].name);
 

//  for ( let i = 0; i < students.length; i++){
//     console.log(`Student tai vi tri ${i}`, students[i]);
//     console.log(`id:`, students[i].id);
//     console.log(`name:`, students[i].name);
//  }



// let newStudent = new Student("","");
// newStudent.id= +prompt("Nhap vao id cho student moi");
// newStudent.name= prompt("Nhap vao name cho student moi");
// students.push(newStudent);
// console.log(students);



// console.log(students);
// students[1].name = prompt("Nhap ten");
// students[1].id = prompt("Nhap id");


// students.shift();
// console.log(students);


let person = {
    // key : value
    name: "Gia thieu",
    age : 19,
    school: "PTIT",
    curly: "Lúa đổ miền quê",
    // methods
    eat: function () {
     console.log("eat fast");

    },
    flirnt: function () {
        console.log("Chao em");
    },
    address: {
        number: 20,
        street: "Tran Phu",
        ward: "Văn Quán",
        district: "Ha Dong",
        city: "Ha Noi",
        Zipcode: 10000,
    },
};

