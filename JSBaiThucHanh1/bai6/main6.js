function tt(){
    var sl = parseInt(document.getElementById('soluong').value);
    var dg = parseInt(document.getElementById('dongia').value);
    var TTien = sl * dg;
    document.getElementById('thanhtien').value = TTien;
}