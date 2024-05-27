let show = document.querySelector(".show");
let icon = document.getElementById("ic");
let con = document.querySelector(".content")
show.addEventListener("click", function(){
    if(icon.classList.contains("bxs-right-arrow")){
        icon.classList.remove("bxs-right-arrow");
        icon.classList.add("bxs-down-arrow");
        con.classList.remove("content");
        con.classList.add("hidden");
    }
    else {
        icon.classList.remove("bxs-down-arrow");
        icon.classList.add("bxs-right-arrow");
        con.classList.remove("hidden");
        con.classList.add("content");
    }
})
