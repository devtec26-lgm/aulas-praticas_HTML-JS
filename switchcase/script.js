function verificarTime(){
    let time = Number(document.getElementById("time").value);
    let mensagem = "";

    switch (time) {
        case 1:
            mensagem = "você escolheu Santa Crus";
            break;
        case 2:
            mensagem = "você escolheu Náutico";
            break;
        case 3:
            mensagem = "você escolheu Sport";
            break;

        default:
        mensagem = "codigo invalido";
    }
    
    document.getElementById("resultado").value = mensagem;
}

function verificarPedido(){
    let produto = Number(document.getElementById("produto").value);
    let mensagem = "";

    switch (produto){
        case 1:
        mensagem = "vc escolheu hamburguer";
        break;
        case 2:
        mensagem = "vc escolheu pizza";
        break;
        case 3:
        mensagem = "vc escolheu Refrigerante"
        break;
        default:
        mensagem = "código invalido"
    }
    document.getElementById("resultado2").innerHTML= mensagem;
}


function calcular(){
    let produto = Number(document.getElementById("produto").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let nome = "";
    let preco = 0;
    let total = 0;
    let mensagem = "";

    switch (produto){

        case 1:
            nome = "hamburguer";
            preco = 10;

            total = preco * quantidade;

            if (quantidade >= 3){
                mensagem = "vc ganhou desconto!";
                total = total * 0.9; 

            }else {
                mensagem = "compre 3 ou mais para ganhar desconto";
            }
            break;
            case 2:
                nome = "pizza";
                preco = 20;

                total = preco * quantidade;

                if (quantidade >= 2) {
                    mensagem = "frete gratis";
                }else {
                    mensagem = "frete será cobrado";
                }
                break;
        case 3:
            nome = "refrigerante";
            preco = 5;
            
            total = preco * quantidade;

            if (quantidade >= 5) {
                mensagem = "leve 5 pague 4";
                total = preco * (quantidade - 1);

            }else {
                mensagem = "promoção a partir de 5 unidades";
            }
            break;

            default:
                mensagem = "produto inválido"
    }
    document.getElementById("resultado3").innerHTML = "produto" + nome + "quantidade:" + quantidade + "total: R$ " + total.toFixed(2) + mensagem;
}

function servico(){
    let saldo = 200;
    let mensagem = ""
    switch (saldo) {
        case 1:
            if (saldo > 0){
            mensagem = "saldo: " + saldo;
    }else if(saldo < 0) {
        mensagem = "saldo negativo: " + saldo; 
    }
     
    break;
    default:
        mensagem = "R$ " + saldo;
    }
    document.getElementById("saldo").value = mensagem;
}

function sisbank(){
    let saldo = 1600;
    let operacao = parseInt(document.getElementById("operacao").value);
    let mensagem = "";

    switch (operacao) {
        case 1:
            mensagem = " seu saldo é: " + saldo;
        break;
            case 2:
                mensagem = "realize um saque" 
            break;
                case 3:
                    mensagem = "realize um depósito"
                break;
    }
    document.getElementById("mensagem").innerHTML = mensagem;
}