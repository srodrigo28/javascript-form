var nome = document.querySelector('#nome').value
var salario = Number(document.querySelector('#salario').value)
var inssInput = Number(document.querySelector('#inss').value)
var fgtsInput = Number(document.querySelector('#fgts').value)

var inss = (salario * inssInput) / 100
var fgts = (salario * fgtsInput) / 100
var salario_liquido = salario - (inss + fgts)
var rs = document.querySelector('#rs')

const cadastrar = document.querySelector("button")
cadastrar.addEventListener("click", calcular, false);

function calcular(e){
    e.preventDefault()

    console.log("Salário R$ " + salario.toFixed(2))
    console.log("Inss: R$ " + inss.toFixed(2))
    console.log("Fgts: R$ " + fgts.toFixed(2))
    console.log("Salário Liquido: R$ " + salario_liquido.toFixed(2))

    rs.innerHTML = "R$ " + salario_liquido

}