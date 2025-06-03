function bai1() {
  let doC = Number(prompt("Nhập độ C:"));
  let doF = doC * 9 / 5 + 32;
  alert(`${doC}°C = ${doF.toFixed(2)}°F`);
}

function bai2() {
  let met = Number(prompt("Nhập mét:"));
  let feet = met * 3.2808;
  alert(`${met}m = ${feet.toFixed(2)} feet`);
}

function bai3() {
  let a = Number(prompt("Nhập cạnh hình vuông:"));
  alert("Diện tích: " + (a * a));
}

function bai4() {
  let a = Number(prompt("Nhập cạnh a:"));
  let b = Number(prompt("Nhập cạnh b:"));
  alert("Diện tích HCN: " + (a * b));
}

function bai5() {
  let a = Number(prompt("Cạnh kề a:"));
  let b = Number(prompt("Cạnh kề b:"));
  alert("Diện tích tam giác vuông: " + ((a * b) / 2));
}

function bai6() {
  let a = Number(prompt("Nhập a:"));
  let b = Number(prompt("Nhập b:"));
  if (a === 0) {
    alert(b === 0 ? "Vô số nghiệm" : "Vô nghiệm");
  } else {
    alert("Nghiệm x = " + (-b / a));
  }
}

function bai7() {
  let a = Number(prompt("Nhập a:"));
  let b = Number(prompt("Nhập b:"));
  let c = Number(prompt("Nhập c:"));
  if (a === 0) return alert("Không phải PT bậc 2");
  let delta = b * b - 4 * a * c;
  if (delta < 0) alert("Vô nghiệm");
  else if (delta === 0) alert("Nghiệm kép x = " + (-b / (2 * a)));
  else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`x1 = ${x1}, x2 = ${x2}`);
  }
}

function bai8() {
  let tuoi = Number(prompt("Nhập tuổi:"));
  if (tuoi > 0 && tuoi < 120) alert("Tuổi hợp lệ");
  else alert("Tuổi không hợp lệ");
}

function bai9() {
  let a = Number(prompt("Cạnh a:"));
  let b = Number(prompt("Cạnh b:"));
  let c = Number(prompt("Cạnh c:"));
  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    alert("Là tam giác");
  } else {
    alert("Không phải tam giác");
  }
}
