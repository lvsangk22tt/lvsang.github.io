function show(content) {
    alert(content);
}
let inp = document.getElementById("textInput");
inp.addEventListener("focus", function(){
    show("focus");
});
inp.addEventListener("change", function(){
    show("change");
});