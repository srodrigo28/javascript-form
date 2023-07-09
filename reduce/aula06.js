/** Filtro com validação e Formatação 2 */
const data = require('./base2')

let filtroMes = "janeiro"
//let filtroMes = "fevereiro"

let real = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

function filtro1(){
    try{
        let filtro = data.contas
        .filter( item => item.mes === filtroMes)
        .map( chave => chave.valor)

        let total = filtro.reduce((acc, total) => acc + total)

        return console.log(
            "Soma das contas mês: " + 
            filtroMes + ": " + real.format(total)
        )
    }catch(error){
        console.log("Erro na consulta")
    }
}

function filtro2(){
    filtro1()
    try{
        let filtro = data.contas
        console.log(filtro)
    }catch(error){
        console.log("Erro na consulta")
    }
}

filtro2()