function isEven (number){
    return number % 2 === 0;
}
let number = Number(prompt("nhap vap so nguyen bat ky:"));
if (isEven(number)){
    alert(number + " so chan.");
}
   else{
    alert(number + " so le.");
   }
    

