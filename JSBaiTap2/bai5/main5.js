bLight=0;
    function changeimage(){
        if (bLight==0){
            bLight=1; document.myimage.src="on.jpg";
        }
        else{
            bLight=0; document.myimage.src="off.jpg";
         }
    }