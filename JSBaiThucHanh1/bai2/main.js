function clickXanh() {
   window.document.bgColor="blue";
}
function clickDo() {
    window.document.bgColor="red";
 }
let blueButton = document.getElementById("xanh");
let redButton = document.getElementById("do");
blueButton.addEventListener("click", clickXanh);
redButton.addEventListener("click", clickDo);
