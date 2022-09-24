

btns = document.querySelectorAll(".btn");
let str;
btns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        if(document.querySelector("#ans").innerHTML==="0"){
            str= btn.value;
            document.querySelector("#ans").innerHTML = str;
        }
        else{
            str = document.querySelector("#ans").innerHTML;
            str+= btn.value;
            document.querySelector("#ans").innerHTML = str;
        }
    });
});