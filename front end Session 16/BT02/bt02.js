const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0];

function minOfArray(arr) {
    if (arr.length === 0) {
        return "Không hợp lệ!";
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


const min1 = minOfArray(arr1);
const min2 = minOfArray(arr2);
const min3 = minOfArray(arr3);
const min4 = minOfArray(arr4);


alert("Giá trị nhỏ nhất arr1 là: " + min1);
console.log(`min của mảng arr1 là: ${min1}`);

alert("Giá trị nhỏ nhất arr2 là: " + min2);
console.log(`min của mảng arr2 là: ${min2}`);

alert("Giá trị nhỏ nhất arr3 là: " + min3);
console.log(`min của mảng arr3 là: ${min3}`);

alert("Giá trị nhỏ nhất arr4 là: " + min4);
console.log(`min của mảng arr4 là: ${min4}`);
