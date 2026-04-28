function aleatorio(){
    let x = Number(Math.random()*100);
    document.getElementById("random").value = x.toFixed(2);
}

function raizquadrada(){
    let y = parseFloat(Math.sqrt(document.getElementById("numero").value));
    document.getElementById("raiz").value = y.toFixed(1);
}

function potencia(){
   let a = parseFloat(document.getElementById("base").value);
   let b = parseFloat(document.getElementById("expoente").value);
   let resut = Math.pow(a,b);
   document.getElementById("result").value = resut;
}