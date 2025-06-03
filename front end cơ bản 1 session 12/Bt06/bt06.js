let ten = "";
let tuoi = 0;
let luaChon;

do {
  luaChon = Number(prompt(
    "MENU\n" +
    "1. Nhập tên người dùng\n" +
    "2. Nhập tuổi người dùng\n" +
    "3. In tên và tuổi\n" +
    "4. In bảng cửu chương\n" +
    "0. Thoát\n\n" +
    "Hãy chọn:"
  ));

  switch (luaChon) {
    case 1:
      ten = prompt("Nhập tên của bạn:");
      break;

    case 2:
      tuoi = Number(prompt("Nhập tuổi của bạn:"));
      break;

    case 3:
      if (ten === "" || tuoi === 0) {
        alert("Bạn chưa nhập đủ tên và tuổi!");
      } else {
        alert("Họ tên: ${ten}\nTuổi: ${tuoi}"); 
      }
      break;

    case 4:
      let n = Number(prompt("Nhập một số để in bảng cửu chương:"));
      let bang = "";
      for (let i = 1; i <= 10; i++) {
        bang += "${n} x ${i} = ${n * i}\n"; 
      }
      alert(bang);
      break;

    case 0:
      alert("Tạm biệt!");
      break;

    default:
      alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
  }

} while (luaChon !== 0);
