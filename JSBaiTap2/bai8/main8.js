function clickXanh() {
    document.body.style.backgroundColor="blue";
 }
 function clickDo() {
    document.body.style.backgroundColor="red";
}
function clickGreen() {
    document.body.style.backgroundColor="green";
}
 let blueButton = document.getElementById("xanh");
 let redButton = document.getElementById("do");
 let greenButton = document.getElementById("green");
 blueButton.addEventListener("click", clickXanh);
 redButton.addEventListener("click", clickDo);
 greenButton.addEventListener("click", clickGreen);