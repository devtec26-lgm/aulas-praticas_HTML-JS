
function iniciarContagem() {
    let contador = 0;
    let numero = parseInt(document.getElementById("numero").value);
    // Enquanto o contador for menor que 'x', o loop continua
    while (contador <= 10) {
        document.getElementById("contagem").innerHTML += contador + " x " + numero + " = " + (contador * numero) + "<br>";
        contador++; // Importante: incrementa para evitar loop infinito
    }
}

function iniciarContagem1() {
    let contador = 0;
    let num = parseInt(document.getElementById("numero").value);
    // Enquanto o contador for menor que 'x', o loop continua
    while (contador <= 10) {
        document.getElementById("contagem").innerHTML += `${contador} x ${num} = ${contador * num} <br>`;
        contador++; // Importante: incrementa para evitar loop infinito '
        
    }
}
function limpar() {
    document.getElementById("numero").value = "";
    document.getElementById("contagem").innerHTML = "";
}