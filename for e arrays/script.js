function mVendas() {
   // Implementation for showing sales
   let qtd = Number(document.getElementById('qtd').value);
   let texto = "";
    for (let i = 1; i <= qtd; i++) {
        texto += `<p>Venda ${i}: Realizada</p>`;
    }
    
   document.getElementById('quantidade-vendas').innerHTML = texto;
}

function mCompras() {
    // Implementation for adding items to the shopping list
    let item = []
    let itemInput = document.getElementById('item').value;
    item.push(itemInput);
    document.getElementById('lista-compras').innerHTML += `<li>${itemInput}</li>`;
    //document.getElementById('lista-compras').innerHTML = item;
    document.getElementById('item').value = "";
}

function limparlista2() {
    item = [];
    document.getElementById('lista-compras').innerHTML = "";
    document.getElementById('item').value = "";
}

let item = [];
function exibirLista() {
    // Implementation for displaying the shopping list
    
    let texto = "";
    for (let i = 0; i < item.length; i++) {
        texto += `<li>${item[i]}</li>`;
    }
    document.getElementById('exibir-lista').innerHTML = texto;
}

function excluir() {
    item.pop();
    exibirLista();
}

function adicionar() {
    
    let itemInput = document.getElementById('item2').value;
   
    item.push(itemInput);
   
    document.getElementById('aviso').innerHTML = "ok";
    
    document.getElementById('item2').value = "";
    
    //exibirLista();
    
}

function limparlista() {
    item = [];
    exibirLista();
    document.getElementById('item2').value = "";
    document.getElementById('aviso').innerHTML = "<p id='aviso'>aguardando item<span class='reticencias'></span></p>";
}