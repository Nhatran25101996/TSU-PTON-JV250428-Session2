
let openBtn = document.querySelector(".OpenButton");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".btn-close");

openBtn.onclick = function () {
  overlay.style.display = 'block';
};

closeBtn.onclick = function () {
  overlay.style.display = 'none';
};
