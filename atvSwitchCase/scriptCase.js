function verificarTime() {
        const time = parseInt(document.getElementById('time').value);
        let mensagem = "";

        switch (time) {
            case 1:
                mensagem = "Você torce para o Flamengo!";
                break;
            case 2:
                mensagem = "Você torce para o Palmeiras!";
                break;
            case 3:
                mensagem = "Você torce para o Corinthians!";
                break;
            case 4:
                mensagem = "Você torce para o Sport!";
                break;
            case 5:
                mensagem = "Você torce para o Santa Cruz!";
                break;
            default:
                mensagem = "Número inválido. Por favor, escolha um número entre 1 e 5.";
        }

        document.getElementById('resultado').value = mensagem;
    }

function verificarPedido() {
    let produto = parseInt(document.getElementById('pedido').value);
    let mensagem = "";

    switch (produto) {
        case 1:
            mensagem = "Você pediu um Humbúrguer!";
            break;
        case 2:
            mensagem = "Você pediu uma Pizza!";
            break;
        case 3:
            mensagem = "Você pediu um Refrigerante!";
            break;
        default:
            mensagem = "Número inválido. Por favor, escolha um número entre 1 e 3.";
    }

    document.getElementById('resultadoPedido').value = mensagem;
}

function verificarProduto() {
    let produto = parseInt(document.getElementById('produto').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let nome = "";
    let preco = 0;
    let total = 0;
    let mensagem = "";

    switch (produto) {
        case 1:
            nome = "Camiseta";
            preco = 50;
            total = preco * quantidade;
            if (quantidade >= 3) {
                total *= 0.9; // Aplica 10% de desconto
                mensagem = "total: R$" + total.toFixed(2) + " - Parabéns! Você ganhou 10% de desconto!";
            } else {
                mensagem = "total: R$" + total.toFixed(2) + " - Compre 3 ou mais camisetas para ganhar 10% de desconto!";
            }
            break;
        case 2:
            nome = "Calça";
            preco = 100;
            total = preco * quantidade;
            if (quantidade >= 2) {
                mensagem = "total: R$" + total.toFixed(2) + " - frete grátis para compras de 2 ou mais calças!";
            } else {
                mensagem = "total: R$" + total.toFixed(2) + " - frete a pagar!";
            }
            break;
        case 3:
            nome = "Tênis";
            preco = 200;
            total = preco * quantidade;
            if (quantidade >= 5) {
                total = preco * (quantidade - 1); // Aplica a promoção "Leve 5 e pague 4"
                mensagem = "Leve 5 e pague 4! - Total a pagar: R$ " + total.toFixed(2);  ;
                 
            } else {
                mensagem = "Compre 5 ou mais unidades para ganhar a promoção!";
            }
            break;
        default:
            mensagem = "Número inválido. Por favor, escolha um número entre 1 e 3.";
    }
    // Se o produto for válido, calcula o total sem desconto e exibe a mensagem final
    if (!mensagem) {
        total = preco * quantidade;
        mensagem = `Você comprou ${quantidade} ${nome}(s) por R$ ${total.toFixed(2)}.`;
    }

    document.getElementById('resultadoProduto').value = mensagem;

   /*document.getElementById('resultadoProduto2').innerHTML = "Produto: " + nome + "<br>" + 
    "Quantidade: "+ quantidade + "<br>" + "Total: R$ " + total.toFixed(2)+ "<br>" + mensagem;*/
}
