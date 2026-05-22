let gastos = [];

function addGasto() {
    /*pegar valor*/
let valor = Number(document.getElementById("valor").value);

    /*pegar categoria*/
let categoria = document.getElementById("categoria").value;

    /*validar */
if (!valor || valor <= 0) {
        alert("Por favor, insira um valor válido para o gasto.");
        return;
    }

    if (!categoria) {
        alert("Por favor, selecione uma categoria para o gasto.");
        return;
    }

    /*adicionar no array */
    gastos.push({ valor, categoria });

    /*mostrar gasto na tela */
   document.getElementById("lista").innerHTML += "<p>" + categoria + ": R$ " + valor.toFixed(2) + "</p>";

    /*soma*/
    let total = gastos[0].valor;
    for (let i = 1; i < gastos.length; i++) {
        total += gastos[i].valor;
    }
    /*mostrar total */
    document.getElementById("total").innerHTML = total.toFixed(2);
    /*verificar limite */
    if(total > 500) {
        document.getElementById("mensagem").innerHTML = "Limite de gastos excedido!";
    } else {
        document.getElementById("mensagem").innerHTML = "";
    }
    /*limpar input */
    document.getElementById("valor").value = "";
    document.getElementById("categoria").value = "";
}

