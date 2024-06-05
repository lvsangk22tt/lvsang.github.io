function KiemTra(){
    if (frm.NoiDung.value.length > 5)
        alert("Bạn đã gõ quá số lượng ký tự cho phép !");
    frm.SoKyTu.value = frm.NoiDung.value.length;
}