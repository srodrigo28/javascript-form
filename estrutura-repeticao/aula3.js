const produtos = [
    { id: 1, nome: 'detergente', valor: 2.00,  categoria: 'limpeza'},
    { id: 2, nome: 'amaciante',  valor: 6.50,  categoria: 'limpeza'},
    { id: 3, nome: 'pão',        valor: 2.00,  categoria: 'alimento'},
    { id: 4, nome: 'queijo',     valor: 20.50, categoria: 'alimento'},
    { id: 5, nome: 'leite',      valor: 7.20,  categoria: 'alimento'},
]

const alimentos = produtos.filter( item => item.categoria === 'alimento')
console.log(alimentos)

/** Retorna todos nomes categoria alimento */
// const alimentos = produtos
//     .filter( item => item.categoria === 'alimento')
//     .map( a => a.nome )
    // console.log(alimentos)

/** Retorna todos valores categoria alimento */
// const alimentos2 = produtos
//     .filter( item => item.categoria === 'alimento')
//     .map( a => a.valor )
    // console.log(alimentos2)

/** Retorna a soma dos produtos categoria alimento */
// const alimentos3 = produtos
//     .filter( item => item.categoria === 'alimento')
//     .map( a => a.valor )
//     .reduce((total, value) => total + value)
//     console.log(alimentos3)

/** Retorna a soma dos produtos categoria alimento */
// const alimentos4 = produtos
//     .filter( item => item.categoria === 'alimento')
//     .map( a => a.valor )

//     let total = alimentos4.reduce((acc, total) => acc + total);
//     console.log(total)

/** Retorna a soma dos produtos categoria limpeza */
// const alimentos4 = produtos
//     .filter( item => item.categoria === 'limpeza')
//     .map( a => a.valor )
//     .reduce((total, value) => total + value)
//     console.log(alimentos4)

/** Retorna a soma dos produtos categoria limpeza */
// const alimentos4 = produtos
//     .filter( item => item.categoria === 'limpeza')
//     .map( a => a.valor )

//     let total = alimentos4.reduce((acc, total) => acc + total);
//     console.log(total)

// const limpeza = produtos.filter( item => item.categoria === 'limpeza')
// console.log(limpeza)