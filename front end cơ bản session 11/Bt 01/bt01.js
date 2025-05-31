
let year = Number(prompt("Nhập vào năm muốn kiểm tra: "));
if(year % 4 === 0 && year % 100 !== 0){
    alert( year + " la nam nhuan.");
} else{ alert(year + " khong phai nam nhuan.");}