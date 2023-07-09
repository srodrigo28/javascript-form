/** Filtro com validação e Formatação 1 */
const data = require('./base')

let filtroMes = "janeiro"
//let filtroMes = "fevereiro"

// console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(2000.50));

let real = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

// console.log(real.format(200.50))

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

filtro1()