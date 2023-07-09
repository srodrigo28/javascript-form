const produtos = [
    { id: 1, nome: 'detergente', valor: 2.00,  categoria: 'limpeza'},
    { id: 2, nome: 'amaciante',  valor: 6.50,  categoria: 'limpeza'},
    { id: 3, nome: 'pão',        valor: 2.00,  categoria: 'alimento'},
    { id: 4, nome: 'queijo',     valor: 20.50, categoria: 'alimento'},
    { id: 5, nome: 'leite',      valor: 7.20,  categoria: 'alimento'},
]

// const codigos = produtos.map(produto => produto.id);
// console.log(codigos)

// const produtosNome = produtos.map(produto => produto.nome);
// console.log(produtosNome)

// const produtoValor = produtos.map(item => item.valor)
// console.log(produtoValor)

// const produtoCategoria = produtos.map(item => item.categoria)
// console.log(produtoCategoria)

const numeros = [1,2,3,4,5]

const dubplicados = numeros.map(x => x + 2)
console.log(dubplicados)