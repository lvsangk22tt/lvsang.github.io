function switchlight(){
    var check = window.document.frmlight.chklight;
        if(check.checked)
            document.bgColor = 'white';
        else
            document.bgColor = 'black';
}
let l = document.getElementById("light");
l.addEventListener("click", switchlight);