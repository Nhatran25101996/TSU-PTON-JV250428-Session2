
 let form = document.getElementById("registerForm");
let  email = document.getElementById("email");
let  password = document.getElementById("password");
let  confirm = document.getElementById("confirm");
let  message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
       const emailVal = email.value.trim();
      const passVal = password.value;
      const confirmVal = confirm.value;

      // Reset thông báo
      message.className = "error";
      message.textContent = "";

      // Kiểm tra các điều kiện
      if (!emailVal) {
        message.textContent = "Email không được để trống.";
        return;
      }

      if (!passVal) {
        message.textContent = "Mật khẩu không được để trống.";
        return;
      }

      if (passVal !== confirmVal) {
        message.textContent = "Mật khẩu xác nhận không khớp.";
        return;
      }

      // Kiểm tra email đã tồn tại
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let existingUser = users.find(user => user.email === emailVal);

      if (existingUser) {
        message.textContent = "Email đã được sử dụng.";
        return;
      }

      // Lưu tài khoản mới vào localStorage
      users.push({ email: emailVal, password: passVal });
      localStorage.setItem("users", JSON.stringify(users));

      message.className = "success";
      message.textContent = "Đăng ký thành công!";
      form.reset();
    });