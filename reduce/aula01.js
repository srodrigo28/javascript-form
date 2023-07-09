const data = require('./base')

function imprime1(){
    return data.species.reduce((prev, curr) => {
        return [...prev, curr.name]
    }, [])
}

function imprime2(){
    return data.species.reduce((a, b) => {
        return [...a, b.name]
    }, [])
}

function imprime3(){
    return data.produtos.reduce((a, b) => {
        return [...a, b.valor]
    }, [])
}
/**
function imprime4(){
    return data.produtos.reduce((acumulador, indice) => 
           acumulador + indice.valor,0)
}
console.log("Soma dos produtos: R$ " + imprime4())
 */

let itemFiltro = "limpeza"

function filtra(){
    let filtroCategoria = data.produtos
    .filter( item => item.categoria === itemFiltro)
    .map( a => a.valor )

    let total = filtroCategoria.reduce((acc, total) => acc + total);
    console.log("Soma todos da categoria alimentos: R$ " + total)
}

filtra()

/** Retorna a soma de todos produtos */
// const total = produtos.reduce((acc, item) => acc + item.valor, 0);
// console.log(total)

