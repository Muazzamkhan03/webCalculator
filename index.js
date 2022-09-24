
btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("mouseover", ()=>{
        btn.style.cursor = "pointer";
        btn.style.transform = "scale(2,2)"
    });
});