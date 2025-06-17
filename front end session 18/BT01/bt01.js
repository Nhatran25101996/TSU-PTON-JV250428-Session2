
let person = {
    name: "Nguyen Van A",
    age: 28,
    address: "Tphcm",
    phone: "09035872510"
};

console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
console.log("Số điện thoại:", person.phone);


let student1 = {
    id: 1,
    name: "Nguyen Van A",
    gender: "Nam",
    age: 20,
    mark: 8
};

let students = [];
students.push(student1); 

console.log("ID:", students[0].id);
console.log("Tên:", students[0].name);
console.log("Giới tính:", students[0].gender);
console.log("Tuổi:", students[0].age);
console.log("Điểm:", students[0].mark)

students = [
    { id: 1, name: "Nguyen Van A", gender: "nam", age: 20, mark: 8 },
    { id: 2, name: "Nguyen Van B", gender: "nam", age: 20, mark: 6 },
    { id: 3, name: "Nguyen Thi C", gender: "nu", age: 20, mark: 9 }
];

let topStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].mark > topStudent.mark) {
        topStudent = students[i];
    }
}

console.log("Học sinh điểm cao nhất:");
console.log("ID:", topStudent.id);
console.log("Tên:", topStudent.name);
console.log("Giới tính:", topStudent.gender);
console.log("Tuổi:", topStudent.age);
console.log("Điểm:", topStudent.mark);
