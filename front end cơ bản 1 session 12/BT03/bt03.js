let so = 2;
let dem = 0;
let ketQua = "";

while (dem < 20) {
  let laNguyenTo = true;
  for (let i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) {
      laNguyenTo = false;
      break;
    }
  }
  if (laNguyenTo) {
    ketQua += so + " ";
    dem++;
  }
  so++;
}

document.body.innerHTML += "<h2>20 số nguyên tố đầu tiên:</h2>";
document.body.innerHTML += "<p>" + ketQua + "</p>";
