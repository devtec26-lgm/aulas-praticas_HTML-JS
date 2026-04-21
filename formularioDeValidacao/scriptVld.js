const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');

form.addEventListener('submit',(event) => {
    event.preventDefault();

    /*verifica se o nome esta vazio
    if(nameInput.value.trim() === ''){
        alert('Por favor, preencha o campo de nome.');
        return;
    } */

    //verifica se o email esta vazio ou invalido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)){
        alert('Por favor, preencha um email válido.');
        return;

    }

    //verifica se a senha tem pelo menos 6 caracteres
    if(passwordInput.value.length < 8){
        alert('A senha deve conter pelo menos 8 caracteres.');
        return;
    }

    // verifica se um trabalho foi selecionado
    if(jobSelect.value === ''){
        alert('Por favor, selecione sua situação atual.');
        return;
    }

    //verifica se a mensagem esta vazia    
    if(messageTextarea.value.trim() === ''){
        alert('Por favor, preencha o campo de mensagem.');
        return;
    
    }
    //se tudo estiver correto, envia o formulario
    form.submit();
    alert('Formulário enviado com sucesso!');
    
});

