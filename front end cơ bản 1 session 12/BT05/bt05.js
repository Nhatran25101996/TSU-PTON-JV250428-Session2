let n = Number(prompt("Nhap so nguyen duong: "));
let giaithua = 1;

if (n < 0) {
    alert("khong co gia thua cho so am!");
} else{
    for(let i = 1; i <= n; i++) {
        giaithua *= i; 
    }
alert('${n}! = ${giaithua}');
}