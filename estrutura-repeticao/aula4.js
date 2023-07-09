const produtos = [
    { id: 1, nome: 'detergente', valor: 2.00,  categoria: 'limpeza'},
    { id: 2, nome: 'amaciante',  valor: 6.50,  categoria: 'limpeza'},
    { id: 3, nome: 'pão',        valor: 2.00,  categoria: 'alimento'},
    { id: 4, nome: 'queijo',     valor: 20.50, categoria: 'alimento'},
    { id: 5, nome: 'leite',      valor: 7.20,  categoria: 'alimento'},
]

/** Retorna a soma de todos produtos */
// const total = produtos.reduce((acc, item) => acc + item.valor, 0);
// console.log(total)

/** Retorna a soma de todos produtos por categoria alimentos */
// const filtroCategoria = produtos
//     .filter( item => item.categoria === 'alimento')
//     .map( a => a.valor )

//     let total = filtroCategoria.reduce((acc, total) => acc + total);
//     console.log("Soma todos da categoria alimentos: R$ " + total)

/** Retorna a soma de todos produtos por categoria limpeza */
const filtroCategoriaLimpesa = produtos
    .filter( item => item.categoria === 'limpeza')
    .map( a => a.valor )

    let total = filtroCategoriaLimpesa.reduce((acc, total) => acc + total);
    console.log("Soma todos da categoria limpeza: R$ " + total)
