
function togglePassword() {
    let pw = document.getElementById("password");
    pw.type = pw.type === "password" ? "text" : "password";
}

function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ Email và Password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let found = users.find(user => user.email === email && user.password === password);

    if (found) {
        alert("Đăng nhập thành công!");
        window.location.href = "home.html";
    } else {
        alert("Email hoặc mật khẩu không đúng.");
    }
}
