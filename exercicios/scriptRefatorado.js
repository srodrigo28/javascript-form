var produto = document.querySelector('#produto')
var quantidade = document.querySelector('#quantidade')
var resultado = document.querySelector('#resultado')

var button = document.querySelector('button')
button.addEventListener('click', funcaoCalcular, false)

function funcaoCalcular() {
    resultado.innerHTML = produto.value * quantidade.value
}