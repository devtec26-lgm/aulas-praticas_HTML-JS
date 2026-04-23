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