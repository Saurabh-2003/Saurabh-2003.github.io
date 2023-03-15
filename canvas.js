const text = document.getElementById("text");
const length = document.getElementById("length");
const low = document.getElementById("isLow");
const upp = document.getElementById("isUpp");
const symbol = document.getElementById("symbol");
const number = document.getElementById("number");
const generate = document.getElementById("generate");
const icon = document.getElementById("icon");
const body = document.body;

function getLow(){
    return String.fromCharCode(Math.floor(97+Math.random()*26));
}
function getUpp(){
    return String.fromCharCode(Math.floor(65+Math.random()*26));
}
function getNum(){
    return Math.floor(Math.random()*100)%11;
}
function getSymbol(){
    const arr = "!@#$%^&*()-=+{}[]|\/?";
    return arr[Math.floor(Math.random()*100)%arr.length];
}
function check(){
    if(length.value>=5 && length.value<=20)return 0;
    alert("length must be between 5 to 20");
    return 1;
}
function check1(){
    if(low.checked || upp.checked || symbol.checked || number.checked)return 0;
    alert("Select at least one checkbox");
    return 1;
}

function buttonreset(){
    generate.style.transform="none";
}

function setback(){
    generate.innerHTML = "GENERATE & COPY";
    generate.disabled=false;
    generate.style.backgroundColor="rgba(0,0,0,0.18)";
    generate.style.color="white";
    text.style.transform="none";
    body.style.background="url(p.jpg)";
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundSize="150% 150%";
    icon.classList.remove("fix");
    icon.className="pix";
}

function work(){
    if(check()) return;
    if(check1()) return;

    var arr=[];
    if(low.checked)arr.push(1);
    if(upp.checked)arr.push(2);
    if(number.checked)arr.push(3);
    if(symbol.checked)arr.push(4);

    var str = "";
    for(var i=0;i<length.value;i++){
        var ind = Math.floor(Math.random()*100)%arr.length;
        if(arr[ind]==1)str+=getLow();
        else if(arr[ind]==2)str+=getUpp();
        else if(arr[ind]==3)str+=getNum();
        else str+=getSymbol();
    }

    text.value=str;
    navigator.clipboard.writeText(str);
    generate.innerHTML=".....COPIED!.....";
    generate.disabled=true;
    generate.style.transform="translateX(6px) translateY(6px)";
    generate.style.boxShadow="none";
    generate.style.backgroundColor="rgba(0,0,0,0.18)";
    generate.style.color="white";


    body.style.background="linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)),url(p.jpg)";
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundSize="200% 200%";
    icon.classList.remove("pix");
    icon.className="fix";


    const timeoutt = setTimeout(buttonreset,200);
    const timeout = setTimeout(setback,1800);
}
generate.addEventListener("click",work);
