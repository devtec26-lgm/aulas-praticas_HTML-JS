function contI(){
    let i = 0;
    while(i <= 10){
        document.getElementById("contagem2").innerHTML += i + "<br>";
        i++;
    }
}

function decI(){
    let i = 10;
    while(i >= 0){
        document.getElementById("contagem3").innerHTML += i + "<br>";
        i--;
    }
}

function incI(){
    let i = 0;
    while(i <= 10){
        document.getElementById("contagem4").innerHTML += i + "<br>";
        i += 2;
    }
}

function decmi(){
    let i = 10;
    while(i >= 0){
        document.getElementById("contagem5").innerHTML += i + "<br>";
        i -= 2;
    }
}
function decmmI(){
    let i = 10;
    while(i >= 0){
        document.getElementById("contagem6").innerHTML += i + "<br>";
        --i;
    }
}

function incMMi(){
    let i = 0;
    while(i <= 10){
        document.getElementById("contagem7").innerHTML += i + "<br>";
        ++i;
    }
}

function limpar2(){
    document.getElementById("contagem2").innerHTML = "";
    document.getElementById("contagem3").innerHTML = "";
    document.getElementById("contagem4").innerHTML = "";
    document.getElementById("contagem5").innerHTML = "";
    document.getElementById("contagem6").innerHTML = "";
    document.getElementById("contagem7").innerHTML = "";
}