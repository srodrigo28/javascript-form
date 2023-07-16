var pao = document.querySelector('#input1')
var arroz = document.querySelector('#input2')
var feijao = document.querySelector('#input3')

var resultado = document.querySelector('#resultado')

var button = document.querySelector('button')
button.addEventListener('click', calcularProdutos, false)

function calcularProdutos(e) {
    e.preventDefault()

    pao = parseFloat(pao.value)
    arroz = parseFloat(arroz.value)
    feijao = parseFloat(feijao.value)

    var soma = pao + arroz + feijao

    resultado.innerHTML = soma

    console.log('Resultado é :' + resultado)
    console.log('Resultado é :' + soma)
}