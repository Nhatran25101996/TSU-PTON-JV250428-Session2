let arr = [];
let count = 0;

for (let i = 0; i < 10; i++) {
    let integer = Number(prompt("Nhập số nguyên:"));
    arr.push(integer);
    if (integer >= 10) {
        count++;
    }
}

alert("Có " + count + " số lớn hơn hoặc bằng 10");
console.log("Mảng đã nhập:", arr);
console.log("Số lượng phần tử lớn hơn hoặc bằng 10 là:", count);