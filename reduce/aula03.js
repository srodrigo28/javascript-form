/** Filtro sem validação */
const data = require('./base')

let filtroMes = "janeiro"
//let filtroMes = "fevereiro"

function filtro1(){
    let filtro = data.contas
    .filter( item => item.mes === filtroMes)
    .map( chave => chave.valor)

    let total = filtro.reduce((acc, total) => acc + total)

    return console.log("Soma do mês: " + filtroMes + "R$ " + total)
}

filtro1()