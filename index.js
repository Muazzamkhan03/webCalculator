

btns = document.querySelectorAll(".btn");
let str = "";

btns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        if(btn.value == "="){
            str = eval(str);
            document.querySelector("#ans").innerHTML = str;
        }
        else if(btn.value == "ac"){
            str = "";
            document.querySelector("#ans").innerHTML = str;
        }
        else{
            str+= btn.value;
            document.querySelector("#ans").innerHTML = str;
        }
    });
});
