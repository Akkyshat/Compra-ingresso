function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    comprarIngresso(tipo, quantidade);
}

function comprarIngresso(tipo, quantidade) {
    let qtdDisponivel = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    if (quantidade > qtdDisponivel) {
        alert(`Quantidade indisponível para ${tipo}`);
    } else {
        qtdDisponivel -= quantidade; // Subtrai a quantidade comprada da disponível
        document.getElementById(`qtd-${tipo}`).textContent = qtdDisponivel; // Atualiza o valor na página
        alert('Compra realizada com sucesso.');
    }
}
