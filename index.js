const math = Math;

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
        else if(btn.value == "del"){
            str = document.querySelector("#ans").innerHTML;
            let newStr = "";
            if(str.length == 1){
                str = "";
                document.querySelector("#ans").innerHTML = str;
            }
            else{
                for(let i=0; i<(str.length)-1; i++){
                    newStr += str[i];
                    document.querySelector("#ans").innerHTML = newStr;
                }
            }
        }
        else{
            str+= btn.value;
            document.querySelector("#ans").innerHTML = str;
        }
    });
});
