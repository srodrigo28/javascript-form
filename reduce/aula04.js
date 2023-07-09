/** Filtro com validação */
const data = require('./base')

let filtroMes = "janeiro1"
//let filtroMes = "fevereiro"

function filtro1(){
    try{
        let filtro = data.contas
        .filter( item => item.mes === filtroMes)
        .map( chave => chave.valor)

        let total = filtro.reduce((acc, total) => acc + total)

        return console.log("Soma do mês: " + filtroMes + "R$ " + total)
    }catch(error){
        console.log("Erro na consulta")
    }
}

filtro1()