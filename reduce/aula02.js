const data = require('./base')

let itemFiltro = "alimento"

function filtra(){
    let filtroCategoria = data.produtos
    .filter( item => item.categoria === itemFiltro)
    .map( a => a.valor )

    let total = filtroCategoria.reduce((acc, total) => acc + total);
    
    console.log("Soma todos da categoria alimentos: R$ " + total)
}

filtra()