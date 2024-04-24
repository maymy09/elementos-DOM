// Método Simples: Usando innerHTML
document.getElementById('titulo').innerHTML = 'Produtos à Venda'; // Define o título

// Método Complexo: Criando elementos e adicionando ao DOM
var produtoDiv = document.createElement('div'); // Cria um elemento div para representar o produto

// Adiciona os detalhes do produto
produtoDiv.innerHTML = `
    <h2>Nome do Produto</h2>
    <p>Descrição do Produto: Protetor Solar</p>
    <p>Preço: R$ 79,99</p>
`;

// Adiciona a classe ao elemento div do produto
produtoDiv.classList.add('produto');

// Insere o elemento produto no final do body
document.body.appendChild(produtoDiv);
