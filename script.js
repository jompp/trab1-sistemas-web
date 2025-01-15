let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    const preco = parseFloat(produto.match(/R\$([\d,]+)/)[1].replace(',', '.'));
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    itensCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itensCarrinho.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: R$${total.toFixed(2).replace('.', ',')}`;
}

function finalizarCompra() {
    alert(`Compra finalizada! Total: R$${total.toFixed(2).replace('.', ',')}`);
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}

function enviarFormulario(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
}
