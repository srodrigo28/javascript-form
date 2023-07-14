let valor1 = document.querySelector('#valor1')
let valor2 = document.querySelector('.valor1')
let valor3 = document.getElementById('valor1')
let valor4 = document.querySelector('input')

valor1 = Number(valor1.value)

let b = document.querySelector("p")
b.addEventListener('click', calcular, false)

function calcular(e) {
    e.preventDefault()
    
    console.log(
        ' Valor da variavel 1: ' + valor1 + '\n' +
        '------------------------------------------------------- \n' +
        ' Esse tipo de variavel é ' + typeof (valor1) + '\n' +
        '------------------------------------------------------- \n' +
        ' Convertido para: ', typeof (valor1) +  '\n' +
        '------------------------------------------------------- \n' +
        ' Valor da variavel 2: ' + valor2 + '\n' +
        '------------------------------------------------------- \n' +
        ' Esse tipo de variavel é ' + typeof (valor2.value) + '\n' +
        '------------------------------------------------------- \n' +
        ' Convertido para: ', typeof(valor2.value) + '\n \n'
    )
    console.log(valor2)
    console.log(valor3)
    console.log(valor4)
}