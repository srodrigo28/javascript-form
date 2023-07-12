var pao = document.querySelector('#input1')
var arroz = document.querySelector('#input2')
var feijao = document.querySelector('#input3')

function calcularProdutos() {
    pao = parseFloat(pao.value)
    arroz = parseFloat(arroz.value)
    feijao = parseFloat(feijao.value)

    var soma = pao + arroz + feijao

    alert(soma)
}