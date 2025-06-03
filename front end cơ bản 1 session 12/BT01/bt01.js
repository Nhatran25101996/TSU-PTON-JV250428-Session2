
// Bài 1
function bai1() {
  let a = Number(prompt("Nhập số a:"));
  let b = Number(prompt("Nhập số b:"));
  if (b === 0) {
    alert("Không thể chia cho 0");
  } else if (a % b === 0) {
    alert(a + " chia hết cho " + b);
  } else {
    alert(a + " không chia hết cho " + b);
  }
}

// Bài 2
function bai2() {
  let tuoi = Number(prompt("Nhập tuổi học sinh:"));
  if (tuoi >= 15) {
    alert("Đủ điều kiện vào lớp 10.");
  } else {
    alert("Không đủ điều kiện vào lớp 10.");
  }
}

// Bài 3
function bai3() {
  let so = Number(prompt("Nhập số nguyên bất kỳ:"));
  if (so > 0) {
    alert("Số bạn nhập lớn hơn 0.");
  } else if (so < 0) {
    alert("Số bạn nhập nhỏ hơn 0.");
  } else {
    alert("Số bạn nhập bằng 0.");
  }
}

// Bài 4
function bai4() {
  let x = Number(prompt("Nhập số thứ nhất:"));
  let y = Number(prompt("Nhập số thứ hai:"));
  let z = Number(prompt("Nhập số thứ ba:"));
  let max = x;
  if (y > max) max = y;
  if (z > max) max = z;
  alert("Giá trị lớn nhất là: " + max);
}

// Bài 5
function bai5() {
  let kiemTra = Number(prompt("Điểm bài kiểm tra:"));
  let giuaKy = Number(prompt("Điểm giữa kỳ:"));
  let cuoiKy = Number(prompt("Điểm cuối kỳ:"));

  let diemTB = (kiemTra + giuaKy + cuoiKy) / 3;
  let xepLoai = "";

  if (diemTB >= 9) xepLoai = "Xuất sắc";
  else if (diemTB >= 8) xepLoai = "Giỏi";
  else if (diemTB >= 6.5) xepLoai = "Khá";
  else if (diemTB >= 5) xepLoai = "Trung bình";
  else xepLoai = "Yếu";

  alert("Điểm trung bình: " + diemTB.toFixed(2) + "\nXếp loại: " + xepLoai);
}
