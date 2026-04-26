function autenticar(){
    let usuario = document.getElementById("usuario").value;
    let senha = parseInt(document.getElementById("senha").value);
    let mensagem = "";

    if (usuario === "admin" && senha === 123456) {
        mensagem = "autenticação bem-sucedida!";
    } else {
        mensagem = "usuário ou senha incorretos!";
    }
        document.getElementById("mensagem").innerHTML = mensagem;
        setTimeout(function() {
        location.href = "home.html";
    }, 900);

}

function sisbank(){
    let saldo = 1600;
    let operacao = parseInt(document.getElementById("operacao").value);
    let mensagem = "";

    switch (operacao) {
        case 1:
            mensagem = " Seu saldo é: R$" + saldo;
            document.getElementById("msgSaldo").innerHTML = "Saldo a tela";
            document.getElementById("saldo").value = mensagem;
            document.getElementById("btn1").innerHTML += "<button onclick='limpar()'>OK</button>";
        break;
            case 2:
                mensagem = "realizar um saque" 
                document.getElementById("opSaque").innerHTML = "<p>Informe o valor do saque</p>";
                document.getElementById("opSaque").innerHTML += '<input type="text" id="valorSaque" placeholder="**********">';
                document.getElementById("opSaque").innerHTML += '<button onclick="realizarSaque()">realizar saque</button>';
                document.getElementById("mensagem").innerHTML = mensagem;
                
                document.getElementById("saldo").value = "saldo: R$" + saldo;
                
            break;
                case 3:
                    mensagem = "realizar um depósito"
                    document.getElementById("deposito").innerHTML = "<p>Informe o valor do depósito</p>";
                    document.getElementById("deposito").innerHTML += '<input type="text" id="valorDeposito" placeholder="**********">';
                    document.getElementById("deposito").innerHTML += '<button onclick="realizarDeposito()">realizar depósito</button>';
                    document.getElementById("mensagem").innerHTML = mensagem;
                    
                    document.getElementById("saldo").value = "saldo: R$" + saldo;
                    
                break;
    }
    /*document.getElementById("mensagem").innerHTML = mensagem; */
     
}

function realizarSaque(){
    let valorSaque = parseFloat(document.querySelector("#valorSaque").value);
    let saldo = 1600;
    let mensagem = "";
    if (valorSaque > saldo) {
        mensagem = "saldo insuficiente para saque";
    } else {
        saldo -= valorSaque;
        mensagem = "saque realizado com sucesso! novo saldo: R$" + saldo.toFixed(2);
    }
    document.getElementById("mensagemSaque").innerHTML = mensagem;
    document.getElementById("saldo").value = "saldo: R$" + saldo.toFixed(2);
    document.getElementById("btn2").innerHTML += "<button onclick='limpar()'>OK</button>";
}

function realizarDeposito(){
    let valorDeposito = parseFloat(document.querySelector("#valorDeposito").value);
    let saldo = 1600;
    let mensagem = "";
    if (valorDeposito <= 0) {
        mensagem = "valor inválido para depósito";
    } else {
        saldo += valorDeposito;
        mensagem = "depósito realizado com sucesso! novo saldo: R$" + saldo.toFixed(2);
    }
    document.getElementById("mensagemDeposito").innerHTML = mensagem;
    document.getElementById("saldo").value = "saldo: R$" + saldo.toFixed(2);
    document.getElementById("btn3").innerHTML += '<button onclick="limpar()">OK</button>';
}

function limpar(){
    document.getElementById("operacao").value = "";
    document.getElementById("msgSaldo").innerHTML = "";
    document.getElementById("saldo").value = "";
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("opSaque").innerHTML = "";
    document.getElementById("deposito").innerHTML = ""; 
    document.getElementById("mensagemSaque").innerHTML = "";
    document.getElementById("mensagemDeposito").innerHTML = "";
    document.getElementById("btn1").innerHTML = "";
    document.getElementById("btn2").innerHTML = "";
    document.getElementById("btn3").innerHTML = ""; 
}
