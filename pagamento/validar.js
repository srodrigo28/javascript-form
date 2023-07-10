var nome = document.querySelector('#nome').value
var salario = Number(document.querySelector('#salario').value)
var inssInput = Number(document.querySelector('#inss').value)
var fgtsInput = Number(document.querySelector('#fgts').value)

var inss = (salario * inssInput) / 100
var fgts = (salario * fgtsInput) / 100
var salario_liquido = salario - (inss + fgts)
var rs = document.querySelector('#rs')

const cadastrar = document.querySelector("button")
cadastrar.addEventListener("click", validar1, false);

function validar1(e) {
    e.preventDefault()

    if (nome == "") {
        console.log("Preencher o campo nome")
    } else {
        console.log("Sucesso nome preenchido: " + nome)
    }

    if (salario == "") {
        console.log("Preencher o campo salário")
    } else {
        console.log("Sucesso salário preenchido: " + salario)
    }

    if (inssInput == "") {
        console.log("Preencher o campo inss")
    } else {
        console.log("Sucesso inss preenchido: " + inssInput)
    }

    if (fgtsInput == "") {
        console.log("Preencher o campo fgts")
    } else {
        console.log("Sucesso fgts preenchido: " + fgtsInput)
    }
}