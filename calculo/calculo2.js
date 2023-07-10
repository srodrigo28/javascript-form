var recebido = Number( document.querySelector('#recebido').value )
var motorista = Number( document.querySelector('#motorista').value )

var mot = document.querySelector('#motoristaPercentual')
var plat = document.querySelector('#plataformaPercentual')

var plataforma = (recebido - motorista)

var f1 = document.querySelector("button")
f1.addEventListener("click", calcular, false)


function calcular(event){
    event.preventDefault()

    var motoristaPercentual = ( motorista / recebido ) * 100
    var plataformaPercentual = (plataforma / recebido) * 100 

    mot.innerHTML = motoristaPercentual.toFixed(2) + "%"
    plat.innerHTML = plataformaPercentual.toFixed(2) + "%"
}