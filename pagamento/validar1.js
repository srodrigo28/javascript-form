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

    if (nome == "" || salario == "" || inssInput == "" || fgtsInput == "") {
        console.log("Preencher todos os campos")
    } else {
        console.log("Sucesso todos campos preenchidos: ")
    }
}