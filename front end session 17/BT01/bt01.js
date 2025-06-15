
let textElement = document.querySelector(".text");
let hideButton = document.querySelector(".hide");
let showButton = document.querySelector(".show");
hideButton.onclick = function(){
    textElement.style.display = "none";
};

showButton.onclick = function(){
    textElement.style.display ="block";
};