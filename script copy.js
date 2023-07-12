
var r = document.querySelector('#recebido').value
var m = document.querySelector('#motorista').value

recebido = parseFloat(r.replace(",", "."))
motorista = parseFloat(m.replace(",", "."))


var mot = document.querySelector('#motoristaPercentual')
var plat = document.querySelector('#plataformaPercentual')

var plataforma = (recebido - motorista)

var f1 = document.querySelector("button")
f1.addEventListener("click", calcular, false)


function calcular(event){
    event.preventDefault()
    if ( r == "" || m == "" ) {
        alert("Preencher todos campos!")
    } else {
        var motoristaPercentual = ( motorista / recebido ) * 100
        var plataformaPercentual = (plataforma / recebido) * 100 

        motoristaRec = 'R$ ' + motorista.toFixed(2) + ' - Percentual: ' + motoristaPercentual.toFixed(1) + '%'
        plataformaRec = 'R$ ' + plataforma.toFixed(2) + ' - Percentual: ' + plataformaPercentual.toFixed(1) + '%'

        mot.innerHTML = motoristaRec
        plat.innerHTML = plataformaRec

        console.log(motoristaPercentual)
        console.log(plataformaPercentual)
    }
}